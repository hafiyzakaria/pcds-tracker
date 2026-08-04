#!/usr/bin/env node
import { deflateSync, inflateSync } from "node:zlib";
import { copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";

const publicDir = resolve("public");
const productionColor = "#14b8a6";
const smallIconSizes = [16, 32, 48];
const environments = [
  { name: "production", color: productionColor },
  { name: "development", color: "#f97316" },
  { name: "preview", color: "#7c3aed" },
];

const largeEnvironmentSources = [
  { input: "favicon.png", output: (name) => `favicon-${name}.png` },
  { input: "apple-touch-icon.png", output: (name) => `apple-touch-icon-${name}.png` },
];

const productionCopies = [
  ["favicon.png", "favicon-production.png"],
  ["apple-touch-icon.png", "apple-touch-icon-production.png"],
];

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function parseHexColor(hex) {
  const value = hex.replace("#", "");

  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}

function crc32(buffer) {
  let crc = 0xffffffff;

  for (const byte of buffer) {
    crc ^= byte;

    for (let i = 0; i < 8; i += 1) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data = Buffer.alloc(0)) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  const checksum = Buffer.alloc(4);

  length.writeUInt32BE(data.length);
  checksum.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));

  return Buffer.concat([length, typeBuffer, data, checksum]);
}

function parsePng(filePath) {
  const file = readFileSync(filePath);

  if (!file.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error(`${basename(filePath)} is not a PNG file.`);
  }

  let offset = 8;
  let ihdr;
  let palette;
  const idatChunks = [];

  while (offset < file.length) {
    const length = file.readUInt32BE(offset);
    const type = file.toString("ascii", offset + 4, offset + 8);
    const dataStart = offset + 8;
    const data = file.subarray(dataStart, dataStart + length);

    if (type === "IHDR") ihdr = Buffer.from(data);
    if (type === "PLTE") palette = Buffer.from(data);
    if (type === "IDAT") idatChunks.push(Buffer.from(data));
    if (type === "IEND") break;

    offset = dataStart + length + 4;
  }

  if (!ihdr || idatChunks.length === 0) {
    throw new Error(`${basename(filePath)} is missing required PNG chunks.`);
  }

  const width = ihdr.readUInt32BE(0);
  const height = ihdr.readUInt32BE(4);
  const bitDepth = ihdr.readUInt8(8);
  const colorType = ihdr.readUInt8(9);
  const compression = ihdr.readUInt8(10);
  const filter = ihdr.readUInt8(11);
  const interlace = ihdr.readUInt8(12);

  if (bitDepth !== 8 || colorType !== 6 || compression !== 0 || filter !== 0 || interlace !== 0) {
    throw new Error(`${basename(filePath)} must be a non-interlaced 8-bit RGBA PNG.`);
  }

  return {
    width,
    height,
    ihdr,
    palette,
    raw: unfilterPng(inflateSync(Buffer.concat(idatChunks)), width, height),
  };
}

function unfilterPng(data, width, height) {
  const bytesPerPixel = 4;
  const rowLength = width * bytesPerPixel;
  const output = Buffer.alloc(rowLength * height);
  let inputOffset = 0;
  let outputOffset = 0;

  for (let y = 0; y < height; y += 1) {
    const filterType = data[inputOffset];
    inputOffset += 1;

    for (let x = 0; x < rowLength; x += 1) {
      const raw = data[inputOffset + x];
      const left = x >= bytesPerPixel ? output[outputOffset + x - bytesPerPixel] : 0;
      const up = y > 0 ? output[outputOffset + x - rowLength] : 0;
      const upperLeft = x >= bytesPerPixel && y > 0 ? output[outputOffset + x - rowLength - bytesPerPixel] : 0;

      if (filterType === 0) output[outputOffset + x] = raw;
      if (filterType === 1) output[outputOffset + x] = (raw + left) & 0xff;
      if (filterType === 2) output[outputOffset + x] = (raw + up) & 0xff;
      if (filterType === 3) output[outputOffset + x] = (raw + Math.floor((left + up) / 2)) & 0xff;
      if (filterType === 4) output[outputOffset + x] = (raw + paethPredictor(left, up, upperLeft)) & 0xff;
    }

    inputOffset += rowLength;
    outputOffset += rowLength;
  }

  return output;
}

function paethPredictor(left, up, upperLeft) {
  const estimate = left + up - upperLeft;
  const leftDistance = Math.abs(estimate - left);
  const upDistance = Math.abs(estimate - up);
  const upperLeftDistance = Math.abs(estimate - upperLeft);

  if (leftDistance <= upDistance && leftDistance <= upperLeftDistance) return left;
  if (upDistance <= upperLeftDistance) return up;
  return upperLeft;
}

function createIhdr(width, height) {
  const ihdr = Buffer.alloc(13);

  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8);
  ihdr.writeUInt8(6, 9);
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);

  return ihdr;
}

function encodePng({ width, height, raw }) {
  const rowLength = width * 4;
  const scanlines = Buffer.alloc((rowLength + 1) * height);

  for (let y = 0; y < height; y += 1) {
    const scanlineOffset = y * (rowLength + 1);
    scanlines[scanlineOffset] = 0;
    raw.copy(scanlines, scanlineOffset + 1, y * rowLength, (y + 1) * rowLength);
  }

  return Buffer.concat([
    PNG_SIGNATURE,
    createChunk("IHDR", createIhdr(width, height)),
    createChunk("IDAT", deflateSync(scanlines)),
    createChunk("IEND"),
  ]);
}

function isLogoPixel(r, g, b, a) {
  if (a === 0) return false;

  const brightEnough = g > 70 && b > 60;
  const tealDominant = g > r * 1.8 && b > r * 1.6;
  const notDarkBackground = r + g + b > 170;

  return brightEnough && tealDominant && notDarkBackground;
}

function recolorLogo(png, targetHex) {
  const target = parseHexColor(targetHex);
  const targetTeal = { r: 20, g: 184, b: 166 };
  const targetTealLuma = luminance(targetTeal);
  const raw = Buffer.from(png.raw);

  for (let index = 0; index < raw.length; index += 4) {
    const r = raw[index];
    const g = raw[index + 1];
    const b = raw[index + 2];
    const a = raw[index + 3];

    if (!isLogoPixel(r, g, b, a)) {
      continue;
    }

    const shade = Math.min(Math.max(luminance({ r, g, b }) / targetTealLuma, 0.78), 1.12);

    raw[index] = Math.round(Math.min(target.r * shade, 255));
    raw[index + 1] = Math.round(Math.min(target.g * shade, 255));
    raw[index + 2] = Math.round(Math.min(target.b * shade, 255));
  }

  return {
    ...png,
    raw,
  };
}

function luminance({ r, g, b }) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function resizeLogo(png, size, targetHex) {
  const target = parseHexColor(targetHex);
  const raw = Buffer.alloc(size * size * 4);
  const scaleX = png.width / size;
  const scaleY = png.height / size;

  for (let targetY = 0; targetY < size; targetY += 1) {
    const sourceTop = targetY * scaleY;
    const sourceBottom = (targetY + 1) * scaleY;

    for (let targetX = 0; targetX < size; targetX += 1) {
      const sourceLeft = targetX * scaleX;
      const sourceRight = (targetX + 1) * scaleX;
      let weightedAlpha = 0;
      let totalWeight = 0;

      for (let sourceY = Math.floor(sourceTop); sourceY < Math.ceil(sourceBottom); sourceY += 1) {
        const overlapY = Math.min(sourceBottom, sourceY + 1) - Math.max(sourceTop, sourceY);

        for (let sourceX = Math.floor(sourceLeft); sourceX < Math.ceil(sourceRight); sourceX += 1) {
          const overlapX = Math.min(sourceRight, sourceX + 1) - Math.max(sourceLeft, sourceX);
          const weight = overlapX * overlapY;
          const sourceIndex = (sourceY * png.width + sourceX) * 4;

          weightedAlpha += png.raw[sourceIndex + 3] * weight;
          totalWeight += weight;
        }
      }

      const targetIndex = (targetY * size + targetX) * 4;
      raw[targetIndex] = target.r;
      raw[targetIndex + 1] = target.g;
      raw[targetIndex + 2] = target.b;
      raw[targetIndex + 3] = Math.round(weightedAlpha / totalWeight);
    }
  }

  return { width: size, height: size, raw };
}

function createIcoFromPngs(images) {
  const header = Buffer.alloc(6);
  const entries = images.map(() => Buffer.alloc(16));
  let imageOffset = header.length + entries.reduce((total, entry) => total + entry.length, 0);

  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  for (const [index, image] of images.entries()) {
    const entry = entries[index];

    entry.writeUInt8(image.size, 0);
    entry.writeUInt8(image.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(image.buffer.length, 8);
    entry.writeUInt32LE(imageOffset, 12);
    imageOffset += image.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((image) => image.buffer)]);
}

for (const [input, output] of productionCopies) {
  copyFileSync(join(publicDir, input), join(publicDir, output));
}

for (const environment of environments.filter(({ name }) => name !== "production")) {
  for (const source of largeEnvironmentSources) {
    const inputPath = join(publicDir, source.input);
    const outputPath = join(publicDir, source.output(environment.name));
    const png = parsePng(inputPath);
    const output = encodePng(recolorLogo(png, environment.color));

    writeFileSync(outputPath, output);
  }

}

const smallIconMaster = parsePng(join(publicDir, "favicon-small-master.png"));

for (const environment of environments) {
  const images = smallIconSizes.map((size) => {
    const buffer = encodePng(resizeLogo(smallIconMaster, size, environment.color));
    const environmentFilename = `favicon-${environment.name}-${size}x${size}.png`;
    const browserFilename = `favicon-${environment.name}-browser-${size}x${size}.png`;

    writeFileSync(join(publicDir, environmentFilename), buffer);
    writeFileSync(join(publicDir, browserFilename), buffer);

    if (environment.name === "production") {
      writeFileSync(join(publicDir, `favicon-${size}x${size}.png`), buffer);
    }

    return { size, buffer };
  });
  const browserIcon = encodePng(resizeLogo(smallIconMaster, 512, environment.color));
  const ico = createIcoFromPngs(images);

  writeFileSync(join(publicDir, `favicon-${environment.name}-browser.png`), browserIcon);
  writeFileSync(join(publicDir, `favicon-${environment.name}-browser.ico`), ico);
  writeFileSync(join(publicDir, `favicon-${environment.name}.ico`), ico);

  if (environment.name === "production") {
    writeFileSync(join(publicDir, "favicon-browser.png"), browserIcon);
    writeFileSync(join(publicDir, "favicon.ico"), ico);
  }
}

console.log("Generated Production, Preview, and Development favicons.");
