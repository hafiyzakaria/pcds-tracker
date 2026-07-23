import { useEffect, useRef, useState } from "react";

import {
  ECONOMIC_SECTOR_IDS,
  LAST_UPDATED,
  SECTORS,
} from "./trackerData.js";
import { getAppEnvironment } from "./environment.js";
import {
  DEFAULT_LANGUAGE,
  getUiCopy,
  localizeSectors,
} from "./localization.js";
import { getProjectAnchor, getRouteHref } from "./routes.js";
import {
  EnvironmentBadge,
  LanguageToggle,
  NavigationPillLink,
  ProjectClassificationBadge,
  ThemeToggle,
} from "./SiteControls.jsx";
import { applyDocumentTheme } from "./theme.js";

const FONT_STACK = "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const DEFAULT_ACCENT_COLOR = "#6b7280";

const STATUS_CONFIG = {
  "Awaiting Decision": {
    group: "ongoing",
    order: 1,
  },
  "In Progress": {
    group: "ongoing",
    order: 1,
  },
  Planning: {
    group: "planning",
    order: 0,
  },
  Operational: {
    group: "completed",
    order: 2,
  },
  Designated: {
    group: "completed",
    order: 2,
  },
  Enacted: {
    group: "completed",
    order: 2,
  },
};

const INTRO_EMPHASIS = {
  en: [
    "10-year Post COVID-19 Development Strategy",
    "8% annual growth",
    "RM282 billion by 2030",
    "project tracker",
  ],
  ms: [
    "Strategi Pembangunan Pasca COVID-19 Kerajaan Sarawak selama 10 tahun",
    "pertumbuhan tahunan 8%",
    "RM282 bilion menjelang 2030",
    "Project tracker",
  ],
};

function getCategoryFilters(rows, copy) {
  const filters = [
    {
      id: "all",
      type: "all",
      label: copy.filters.all,
      count: rows.length,
    },
  ];

  [
    { kind: "sector", label: copy.filters.sectors },
    { kind: "enabler", label: copy.filters.enablers },
  ].forEach((group) => {
    const groupRows = rows.filter((row) => row.kind === group.kind);

    if (groupRows.length === 0) {
      return;
    }

    filters.push({
      id: `group:${group.kind}`,
      type: "group",
      kind: group.kind,
      label: group.label,
      count: groupRows.length,
    });

    const categories = new Map();
    groupRows.forEach((row) => {
      const current = categories.get(row.sectorId);
      categories.set(row.sectorId, {
        id: `category:${row.sectorId}`,
        type: "category",
        kind: group.kind,
        sectorId: row.sectorId,
        label: row.sectorName,
        accentColor: row.sectorColor,
        count: (current?.count || 0) + 1,
      });
    });

    filters.push(...categories.values());
  });

  return filters.map((filter) => ({
    ...filter,
    accessibleLabel: copy.filters.show(filter.label, filter.count),
  }));
}

function getStatusMeta(status, copy) {
  const config = STATUS_CONFIG[status] || {
    group: "unknown",
    order: 99,
  };
  const translated = copy.status[status] || {
    ...copy.status.fallback,
    label: status,
  };

  return { ...translated, ...config };
}

function getPublicStatusMeta(status, milestones, copy) {
  const statusMeta = getStatusMeta(status, copy);
  const hasOpenMilestone = milestones.some((milestone) => !milestone.done);

  if (statusMeta.group === "completed" && hasOpenMilestone) {
    return getStatusMeta("In Progress", copy);
  }

  return statusMeta;
}

function filterRowsByCategory(rows, filter) {
  if (filter.type === "group") {
    return rows.filter((row) => row.kind === filter.kind);
  }

  if (filter.type === "category") {
    return rows.filter((row) => row.sectorId === filter.sectorId);
  }

  return rows;
}

function getMilestoneCountLabel(row, copy) {
  if (row.totalMilestones === 0) {
    return copy.milestones.none;
  }

  return copy.milestones.count(row.doneMilestones, row.totalMilestones);
}

function getAccentBadgeTone(color) {
  const accent = color || DEFAULT_ACCENT_COLOR;

  return {
    bg: `color-mix(in srgb, ${accent} 9%, var(--surface))`,
    border: `color-mix(in srgb, ${accent} 28%, var(--surface))`,
    text: `color-mix(in srgb, ${accent} 78%, var(--accent-text-mix))`,
  };
}

function getAccentTextColor(color) {
  return `color-mix(in srgb, ${color || DEFAULT_ACCENT_COLOR} 78%, var(--accent-text-mix))`;
}

function getProjectRows(sectors, copy) {
  return sectors.filter((sector) => !sector.isOverview).flatMap((sector) => {
    const kind = ECONOMIC_SECTOR_IDS.has(sector.id) ? "sector" : "enabler";

    return sector.projects.map((project) => {
      const displayName = project.displayName || project.name;
      const doneMilestones = project.milestones.filter((milestone) => milestone.done).length;
      const totalMilestones = project.milestones.length;
      const nextMilestone = project.milestones.find((milestone) => !milestone.done);
      const latestMilestone = [...project.milestones].reverse().find((milestone) => milestone.done);
      const statusMeta = getPublicStatusMeta(project.status, project.milestones, copy);

      return {
        ...project,
        id: `${sector.id}-${project.name}`,
        displayName,
        sectorId: sector.id,
        sectorName: sector.name,
        sectorColor: sector.color,
        kind,
        doneMilestones,
        totalMilestones,
        progress: totalMilestones > 0 ? Math.round((doneMilestones / totalMilestones) * 100) : 0,
        nextMilestone,
        latestMilestone,
        statusMeta,
        attentionOrder: statusMeta.order,
      };
    });
  });
}

function sortProjectRows(rows, language = DEFAULT_LANGUAGE) {
  return [...rows].sort((a, b) => {
    if (a.attentionOrder !== b.attentionOrder) {
      return a.attentionOrder - b.attentionOrder;
    }

    return a.displayName.localeCompare(b.displayName, language === "ms" ? "ms-MY" : "en-MY");
  });
}

function formatLastUpdated(value, language = DEFAULT_LANGUAGE) {
  const [year, month, day] = value.split("-").map(Number);

  if (![year, month, day].every(Number.isInteger)) {
    return value;
  }

  return new Intl.DateTimeFormat(language === "ms" ? "ms-MY" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function StatusBadge({ statusMeta, accentColor }) {
  const tone = getAccentBadgeTone(accentColor);

  return (
    <span
      title={statusMeta.description}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        justifySelf: "start",
        width: "max-content",
        maxWidth: "100%",
        minHeight: "24px",
        padding: "4px 9px",
        borderRadius: "3px",
        border: `1px solid ${tone.border}`,
        backgroundColor: tone.bg,
        color: tone.text,
        fontSize: "10px",
        fontWeight: 850,
        letterSpacing: "0.08em",
        lineHeight: 1,
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        fontFamily: FONT_STACK,
      }}
    >
      {statusMeta.label}
    </span>
  );
}

function Metric({ value, label, accent = "#0d9488" }) {
  return (
    <div
      style={{
        minHeight: "78px",
        padding: "13px 15px 14px",
        borderTop: `2px solid ${accent}66`,
        borderRight: "1px solid var(--border-soft)",
        borderBottom: "1px solid var(--border-soft)",
        backgroundColor: "var(--surface)",
      }}
    >
      <div
        style={{
          color: "var(--text-strong)",
          fontFamily: FONT_STACK,
          fontSize: "23px",
          fontWeight: 800,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: "9px",
          color: "var(--text-muted)",
          fontFamily: FONT_STACK,
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          lineHeight: 1.4,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function SummaryMetrics({ rows, copy }) {
  const planning = rows.filter((row) => row.statusMeta.group === "planning").length;
  const ongoing = rows.filter((row) => row.statusMeta.group === "ongoing").length;
  const completeLike = rows.filter((row) => row.statusMeta.group === "completed").length;
  const doneMilestones = rows.reduce((sum, row) => sum + row.doneMilestones, 0);
  const totalMilestones = rows.reduce((sum, row) => sum + row.totalMilestones, 0);
  const milestoneProgress = totalMilestones ? (doneMilestones / totalMilestones) * 100 : 0;

  return (
    <section className="summary-wrap">
      <div
        className="summary-metrics"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(132px, 1fr))",
          borderLeft: "1px solid var(--border-soft)",
        }}
      >
        <Metric value={rows.length} label={copy.metrics.trackedProjects} accent="#0d9488" />
        <Metric value={planning} label={copy.metrics.planning} accent="#4f46e5" />
        <Metric value={ongoing} label={copy.metrics.ongoing} accent="#d97706" />
        <Metric value={completeLike} label={copy.metrics.completed} accent="#16a34a" />
        <div className="desktop-milestone-metric">
          <Metric value={`${doneMilestones}/${totalMilestones}`} label={copy.metrics.milestones} accent="#1d4ed8" />
        </div>
      </div>
      <div
        className="mobile-milestone-summary"
        style={{
          display: "none",
          padding: "16px 18px",
          border: "1px solid var(--border-soft)",
          borderTop: 0,
          backgroundColor: "var(--surface)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "14px",
          }}
        >
          <div
            style={{
              color: "var(--text-muted)",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {copy.metrics.milestones}
          </div>
          <div
            style={{
              color: "var(--text-strong)",
              fontSize: "22px",
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            {doneMilestones}/{totalMilestones}
          </div>
        </div>
        <div
          aria-label={copy.milestones.progress(doneMilestones, totalMilestones)}
          style={{
            height: "6px",
            marginTop: "12px",
            overflow: "hidden",
            borderRadius: "999px",
            backgroundColor: "var(--progress-track)",
          }}
        >
          <div
            style={{
              width: `${milestoneProgress}%`,
              height: "100%",
              borderRadius: "999px",
              backgroundColor: "#1d4ed8cc",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function CategoryFilterButton({
  activeAccentColor,
  activeFilter,
  filter,
  onFilter,
  parentActive = false,
}) {
  if (!filter) {
    return null;
  }

  return (
    <button
      className={`category-filter-button category-filter-button--${filter.type}${
        parentActive ? " category-filter-button--parent-active" : ""
      }`}
      key={filter.id}
      onClick={() => onFilter(filter.id)}
      aria-label={filter.accessibleLabel}
      aria-pressed={activeFilter === filter.id}
      style={{
        "--category-filter-accent":
          activeAccentColor || filter.accentColor || "var(--brand)",
      }}
    >
      <span>{filter.label}</span>
      <span className="category-filter-count" aria-hidden="true">
        {filter.count}
      </span>
    </button>
  );
}

function FilterBar({ activeFilter, label, onFilter, filters = [] }) {
  const scrollRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const scrollThumbRef = useRef(null);
  const allFilter = filters.find((filter) => filter.type === "all");
  const groupRows = filters
    .filter((filter) => filter.type === "group")
    .map((group) => ({
      group,
      categories: filters.filter(
        (filter) => filter.type === "category" && filter.kind === group.kind
      ),
    }));

  useEffect(() => {
    const scroller = scrollRef.current;
    const track = scrollTrackRef.current;
    const thumb = scrollThumbRef.current;

    if (!scroller || !track || !thumb) {
      return undefined;
    }

    const updateIndicator = () => {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const scrollable = maxScroll > 1;

      track.hidden = !scrollable;

      if (!scrollable) {
        return;
      }

      const trackWidth = track.clientWidth;
      const thumbWidth = Math.max(
        48,
        trackWidth * (scroller.clientWidth / scroller.scrollWidth)
      );
      const scrollProgress = scroller.scrollLeft / maxScroll;
      const thumbOffset = scrollProgress * (trackWidth - thumbWidth);

      thumb.style.width = `${thumbWidth}px`;
      thumb.style.transform = `translateX(${thumbOffset}px)`;
    };

    updateIndicator();
    scroller.addEventListener("scroll", updateIndicator, { passive: true });
    window.addEventListener("resize", updateIndicator);

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(updateIndicator);

    resizeObserver?.observe(scroller);
    if (scroller.firstElementChild) {
      resizeObserver?.observe(scroller.firstElementChild);
    }

    return () => {
      scroller.removeEventListener("scroll", updateIndicator);
      window.removeEventListener("resize", updateIndicator);
      resizeObserver?.disconnect();
    };
  }, [label]);

  return (
    <nav aria-label={label} style={{ marginBottom: "16px" }}>
      <div className="category-filter-layout">
        <CategoryFilterButton
          activeFilter={activeFilter}
          filter={allFilter}
          onFilter={onFilter}
        />
        <div className="category-filter-scroll-column">
          <div className="category-filter-scroll" ref={scrollRef}>
            <div className="category-filter-group-rows">
              {groupRows.map(({ group, categories }) => {
                const selectedCategory = categories.find(
                  (filter) => filter.id === activeFilter
                );

                return (
                  <div
                    className="category-filter-row"
                    key={group.id}
                    role="group"
                    aria-label={group.label}
                  >
                    <CategoryFilterButton
                      activeAccentColor={selectedCategory?.accentColor}
                      activeFilter={activeFilter}
                      filter={group}
                      onFilter={onFilter}
                      parentActive={Boolean(selectedCategory)}
                    />
                    {categories.map((filter) => (
                      <CategoryFilterButton
                        activeFilter={activeFilter}
                        filter={filter}
                        key={filter.id}
                        onFilter={onFilter}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="category-filter-scroll-indicator"
            ref={scrollTrackRef}
            aria-hidden="true"
          >
            <span
              className="category-filter-scroll-thumb"
              ref={scrollThumbRef}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

function DetailSection({ title, children }) {
  return (
    <section style={{ display: "grid", gap: "8px" }}>
      <h4
        style={{
          margin: 0,
          color: "var(--text-faint)",
          fontFamily: FONT_STACK,
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h4>
      <div
        style={{
          color: "var(--text-secondary)",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        {children}
      </div>
    </section>
  );
}

function MilestoneIndicator({ row, copy }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          color: "var(--text-faint)",
          fontFamily: FONT_STACK,
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {copy.milestones.label}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }} aria-hidden="true">
        {row.milestones.map((milestone, index) => (
          <span
            key={`${row.id}-indicator-${index}`}
            style={{
              width: "18px",
              height: "6px",
              borderRadius: "999px",
              backgroundColor: milestone.done ? row.sectorColor : "var(--border)",
              opacity: milestone.done ? 1 : 0.95,
            }}
          />
        ))}
      </div>
      <span
        style={{
          color: "var(--text-muted)",
          fontFamily: FONT_STACK,
          fontSize: "11px",
          fontWeight: 700,
          whiteSpace: "nowrap",
        }}
      >
        {copy.milestones.progress(row.doneMilestones, row.totalMilestones)}
      </span>
    </div>
  );
}

function CollapsedMilestoneSummary({ row, copy }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        minHeight: "24px",
        color: "var(--text-muted)",
        fontFamily: FONT_STACK,
        fontSize: "11px",
        fontWeight: 750,
        lineHeight: 1.2,
        whiteSpace: "nowrap",
      }}
    >
      <span>{getMilestoneCountLabel(row, copy)}</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }} aria-hidden="true">
        {row.milestones.map((milestone, index) => (
          <span
            key={`${row.id}-collapsed-indicator-${index}`}
            style={{
              width: "15px",
              height: "5px",
              borderRadius: "999px",
              backgroundColor: milestone.done ? row.sectorColor : "var(--border)",
              opacity: milestone.done ? 1 : 0.95,
            }}
          />
        ))}
      </span>
    </span>
  );
}

function FactList({ row, copy }) {
  return (
    <div
      className="project-facts"
      style={{
        display: "grid",
        gridTemplateColumns: row.value && row.value !== "—" ? "minmax(0, 1fr) minmax(136px, auto)" : "1fr",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        backgroundColor: "var(--surface)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "4px",
          padding: "8px 10px",
        }}
      >
        <span
          style={{
            color: "var(--text-faint)",
            fontSize: "8px",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {copy.facts.lead}
        </span>
        <span style={{ color: "var(--text-body)", fontSize: "12px", fontWeight: 750, lineHeight: 1.35 }}>{row.lead}</span>
      </div>
      {row.value && row.value !== "—" && (
        <div
          className="project-facts-value"
          style={{
            display: "grid",
            gap: "4px",
            padding: "8px 10px",
            borderLeft: "1px solid var(--border)",
          }}
        >
          <span
            style={{
              color: "var(--text-faint)",
              fontSize: "8px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {copy.facts.value}
          </span>
          <span style={{ color: getAccentTextColor(row.sectorColor), fontSize: "12px", fontWeight: 850, lineHeight: 1.35 }}>{row.value}</span>
        </div>
      )}
    </div>
  );
}

function SourceLinks({ sources, color, interactive = true }) {
  return (
    <div style={{ display: "grid", gap: "7px" }}>
      {sources.map((source, index) => (
        <a
          key={source.url}
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={interactive ? undefined : -1}
          onClick={(event) => event.stopPropagation()}
          style={{
            display: "grid",
            gridTemplateColumns: "20px minmax(0, 1fr) auto",
            alignItems: "center",
            gap: "9px",
            padding: "7px 9px",
            border: "1px solid var(--border-soft)",
            borderRadius: "6px",
            backgroundColor: "var(--surface)",
            color: "var(--text-body)",
            fontFamily: FONT_STACK,
            fontSize: "11px",
            fontWeight: 700,
            textDecoration: "none",
            lineHeight: 1.35,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: `1px solid ${color}1f`,
              backgroundColor: `${color}0d`,
              color: "var(--text-icon)",
              fontSize: "9px",
              fontWeight: 800,
            }}
          >
            {index + 1}
          </span>
          <span>{source.label}</span>
          <span style={{ color: "var(--text-faint)", fontSize: "12px" }}>↗</span>
        </a>
      ))}
    </div>
  );
}

function AccordionReveal({ expanded, children, className = "" }) {
  return (
    <div
      className={`accordion-reveal ${className}`.trim()}
      aria-hidden={!expanded}
      inert={expanded ? undefined : true}
    >
      <div className="accordion-reveal-inner">{children}</div>
    </div>
  );
}

function formatMilestoneDate(value, language = DEFAULT_LANGUAGE) {
  const date = value?.trim();

  if (!date || date.toLowerCase() === "tbd") {
    return null;
  }

  if (date.toLowerCase() === "ongoing") {
    return language === "ms" ? "Berterusan" : "Ongoing";
  }

  const yearQuarter = date.match(/^(\d{4})-Q([1-4])$/);
  if (yearQuarter) {
    return language === "ms"
      ? `Suku ${yearQuarter[2]} ${yearQuarter[1]}`
      : `Quarter ${yearQuarter[2]} ${yearQuarter[1]}`;
  }

  const yearRange = date.match(/^(\d{4})-(\d{4})$/);
  if (yearRange) {
    return `${yearRange[1]}–${yearRange[2]}`;
  }

  const yearOnward = date.match(/^(\d{4})\+$/);
  if (yearOnward) {
    return language === "ms" ? `mulai ${yearOnward[1]}` : `${yearOnward[1]} onward`;
  }

  const fullDate = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (fullDate) {
    return new Intl.DateTimeFormat(language === "ms" ? "ms-MY" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(Number(fullDate[1]), Number(fullDate[2]) - 1, Number(fullDate[3]))));
  }

  const yearMonth = date.match(/^(\d{4})-(\d{2})$/);
  if (yearMonth) {
    return new Intl.DateTimeFormat(language === "ms" ? "ms-MY" : "en-GB", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(Number(yearMonth[1]), Number(yearMonth[2]) - 1, 1)));
  }

  return date;
}

function MilestoneList({ milestones, language, color = "#0d9488" }) {
  return (
    <div style={{ display: "grid", gap: "0" }}>
      {milestones.map((milestone, index) => {
        const formattedDate = formatMilestoneDate(milestone.date, language);

        return (
          <div
            key={`${milestone.date}-${index}`}
            style={{
              display: "grid",
              gridTemplateColumns: formattedDate ? "118px minmax(0, 1fr)" : "1fr",
              gap: "12px",
              padding: "9px 0",
              borderTop: index === 0 ? "1px solid var(--border)" : "1px solid var(--border-faint)",
            }}
          >
            {formattedDate && (
              <span
                style={{
                  color: milestone.done ? getAccentTextColor(color) : "var(--text-faint)",
                  fontFamily: FONT_STACK,
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                {formattedDate}
              </span>
            )}
            <span style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.45 }}>
              {milestone.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function CompletedMilestoneRows({ row, language }) {
  const loggedMilestones = row.milestones.filter((milestone) => milestone.done);
  const isComplete = row.totalMilestones > 0 && row.doneMilestones === row.totalMilestones;
  const visibleMilestones = isComplete ? loggedMilestones.slice(0, -1) : loggedMilestones;

  if (visibleMilestones.length === 0) {
    return null;
  }

  return <MilestoneList milestones={visibleMilestones} language={language} color={row.sectorColor} />;
}

function FollowingMilestones({ row, copy, language }) {
  const followingMilestones = row.milestones.filter((milestone) => !milestone.done).slice(1);

  if (followingMilestones.length === 0) {
    return null;
  }

  return (
    <DetailSection title={copy.milestones.remaining}>
      <MilestoneList milestones={followingMilestones} language={language} color={row.sectorColor} />
    </DetailSection>
  );
}

function getMilestoneCalloutContent(milestone, copy, language) {
  if (!milestone) {
    return { date: null, text: copy.milestones.noOpen };
  }

  const text = milestone.text.replace(/^(ongoing|planning|completed|berterusan|perancangan|selesai):\s*/i, "");

  return { date: formatMilestoneDate(milestone.date, language), text };
}

function NextMilestoneCallout({ row, expanded, copy, language }) {
  const isComplete = row.totalMilestones > 0 && row.doneMilestones === row.totalMilestones;
  const completionMilestone = isComplete ? [...row.milestones].reverse().find((milestone) => milestone.done) : null;
  const content = getMilestoneCalloutContent(isComplete ? completionMilestone : row.nextMilestone, copy, language);

  return (
    <div
      style={{
        display: "grid",
        gap: "5px",
        padding: expanded ? "10px 12px" : "9px 11px",
        border: `1px solid ${row.sectorColor}30`,
        borderRadius: "6px",
        backgroundColor: `color-mix(in srgb, ${row.sectorColor} 6%, var(--surface))`,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
        <span
          style={{
            color: getAccentTextColor(row.sectorColor),
            fontFamily: FONT_STACK,
            fontSize: "10px",
            fontWeight: 850,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {isComplete ? copy.milestones.completed : copy.milestones.next}
        </span>
        {content.date && (
          <span
            style={{
              color: "var(--text-muted)",
              fontFamily: FONT_STACK,
              fontSize: "11px",
              fontWeight: 750,
              lineHeight: 1.3,
              textAlign: "right",
            }}
          >
            {content.date}
          </span>
        )}
      </div>
      <div
        style={{
          color: "var(--text-body)",
          fontSize: "13px",
          fontWeight: expanded ? 700 : 650,
          lineHeight: 1.45,
          overflowWrap: "anywhere",
        }}
      >
        {content.text}
      </div>
    </div>
  );
}

function ProjectCard({ row, expanded, onToggle, copy, language }) {
  const cardBorderColor = "var(--border-strong)";

  return (
    <article
      id={getProjectAnchor(row.name)}
      className="project-card"
      data-expanded={expanded ? "true" : "false"}
      style={{
        border: `1px solid ${cardBorderColor}`,
        borderTop: `1px solid ${cardBorderColor}`,
        borderRadius: "8px",
        backgroundColor: expanded ? "var(--surface-subtle)" : "var(--surface)",
        overflow: "hidden",
        transition: "background-color 0.15s ease, border-color 0.15s ease",
      }}
    >
      <button
        className="project-card-button"
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-label={expanded ? copy.card.collapse(row.displayName) : copy.card.expand(row.displayName)}
        style={{
          width: "100%",
          minWidth: 0,
          minHeight: expanded ? "190px" : "263px",
          display: "grid",
          gridTemplateRows: expanded ? "auto 1fr auto" : "auto auto auto",
          alignContent: expanded ? "stretch" : "start",
          gap: expanded ? "14px" : "10px",
          padding: "18px",
          border: "none",
          backgroundColor: "transparent",
          color: "inherit",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            alignItems: "flex-start",
            minWidth: 0,
          }}
        >
          <ProjectClassificationBadge
            color={row.sectorColor}
            copy={copy}
            kind={row.kind}
            maxWidth="calc(100% - 122px)"
            name={row.sectorName}
          />
          <span
            aria-hidden="true"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              minHeight: "24px",
              padding: "5px 8px",
              border: `1px solid ${row.sectorColor}24`,
              borderRadius: "999px",
              backgroundColor: `${row.sectorColor}08`,
              color: getAccentTextColor(row.sectorColor),
              fontFamily: FONT_STACK,
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            {expanded ? copy.card.hideDetails : copy.card.viewDetails}
          </span>
        </div>

        <div>
          <h3
            className="project-card-title"
            style={{
              margin: 0,
              minHeight: expanded ? 0 : "44px",
              display: expanded ? "block" : "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: expanded ? "unset" : 2,
              overflow: "hidden",
              color: "var(--text-strong)",
              fontSize: "18px",
              fontWeight: 800,
              lineHeight: 1.22,
            }}
          >
            {row.displayName}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              marginTop: expanded ? "12px" : "10px",
            }}
          >
            <StatusBadge statusMeta={row.statusMeta} accentColor={row.sectorColor} />
            {!expanded && <CollapsedMilestoneSummary row={row} copy={copy} />}
          </div>
          <AccordionReveal expanded={expanded} className="project-card-intro-reveal">
            <div
              style={{
                display: "grid",
                gap: "8px",
                paddingTop: "12px",
                color: "var(--text-secondary)",
                fontSize: "13px",
                lineHeight: 1.55,
              }}
            >
              <FactList row={row} copy={copy} />
              <p style={{ margin: 0 }}>{row.summary}</p>
            </div>
          </AccordionReveal>
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {expanded && <MilestoneIndicator row={row} copy={copy} />}
          <AccordionReveal expanded={expanded} className="project-card-completed-reveal">
            <CompletedMilestoneRows row={row} language={language} />
          </AccordionReveal>
          <NextMilestoneCallout row={row} expanded={expanded} copy={copy} language={language} />
          <AccordionReveal expanded={expanded} className="project-card-timeline-reveal">
            <div style={{ display: "grid", gap: "12px", paddingTop: "2px" }}>
              <FollowingMilestones row={row} copy={copy} language={language} />
            </div>
          </AccordionReveal>
        </div>
      </button>

      <AccordionReveal expanded={expanded} className="project-card-sources-reveal">
        <div
          style={{
            display: "grid",
            padding: "18px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <DetailSection title={copy.facts.sources}>
            <SourceLinks sources={row.sources} color={row.sectorColor} interactive={expanded} />
          </DetailSection>
        </div>
      </AccordionReveal>
    </article>
  );
}

function ProjectGrid({ rows, expandedIds, onToggle, copy, language }) {
  return (
    <section
      className="project-card-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        alignItems: "start",
        gap: "14px",
      }}
    >
      {rows.map((row) => (
        <ProjectCard
          key={row.id}
          row={row}
          expanded={expandedIds.includes(row.id)}
          onToggle={() => onToggle(row.id)}
          copy={copy}
          language={language}
        />
      ))}
    </section>
  );
}

function EmphasizedText({ text, phrases }) {
  const escaped = phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "gi");

  return text.split(pattern).map((part, index) => {
    const emphasized = phrases.some((phrase) => phrase.toLocaleLowerCase() === part.toLocaleLowerCase());
    return emphasized ? <strong key={`${part}-${index}`}>{part}</strong> : part;
  });
}

function HeaderControls({ language, onNavigate, onThemeToggle, copy }) {
  return (
    <div className="header-controls" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <LanguageToggle
        copy={copy}
        englishRouteId="tracker-en"
        language={language}
        malayRouteId="tracker-ms"
        onNavigate={onNavigate}
      />
      <ThemeToggle copy={copy} onThemeToggle={onThemeToggle} />
    </div>
  );
}

export default function App({ language = DEFAULT_LANGUAGE, onNavigate }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedIds, setExpandedIds] = useState([]);
  const environment = getAppEnvironment();
  const copy = getUiCopy(language);
  const lastUpdatedLabel = formatLastUpdated(LAST_UPDATED, language);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const followSystemTheme = (event) => {
      try {
        if (!localStorage.getItem("pcds-theme")) {
          applyDocumentTheme(event.matches ? "dark" : "light");
        }
      } catch {
        applyDocumentTheme(event.matches ? "dark" : "light");
      }
    };

    preference.addEventListener("change", followSystemTheme);
    return () => preference.removeEventListener("change", followSystemTheme);
  }, []);

  const localizedSectors = localizeSectors(SECTORS, language);
  const rows = sortProjectRows(getProjectRows(localizedSectors, copy), language);
  const filters = getCategoryFilters(rows, copy);
  const selectedFilter = filters.find((filter) => filter.id === activeFilter) || filters[0];
  const filteredRows = sortProjectRows(filterRowsByCategory(rows, selectedFilter), language);

  const toggleExpanded = (id) => {
    setExpandedIds((current) =>
      current.includes(id) ? current.filter((expandedId) => expandedId !== id) : [...current, id]
    );
  };
  const toggleTheme = () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyDocumentTheme(nextTheme);
    try {
      localStorage.setItem("pcds-theme", nextTheme);
    } catch {
      // Theme selection still works for this session when storage is unavailable.
    }
  };

  return (
    <div
      className="app-shell"
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--page-bg)",
        color: "var(--text-body)",
        fontFamily: FONT_STACK,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { background: var(--page-bg); }
        .app-shell { animation: app-fade-in 0.5s ease; }
        @keyframes app-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        button { font: inherit; }
        a:hover { opacity: 0.8; }
        ::selection { background: color-mix(in srgb, var(--brand) 26%, transparent); }
        .accordion-reveal {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          overflow: hidden;
          transition:
            grid-template-rows 260ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 160ms ease;
        }
        .accordion-reveal-inner {
          min-height: 0;
          overflow: hidden;
        }
        .project-card[data-expanded="true"] .accordion-reveal {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        @supports (interpolate-size: allow-keywords) {
          .project-card {
            interpolate-size: allow-keywords;
          }
          .accordion-reveal {
            display: block;
            height: 0;
            overflow: clip;
            transition:
              height 280ms cubic-bezier(0.22, 1, 0.36, 1),
              opacity 160ms ease;
          }
          .project-card[data-expanded="true"] .accordion-reveal {
            height: auto;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .app-shell {
            animation: none !important;
          }
          .accordion-reveal {
            transition: none !important;
          }
        }
        @media (max-width: 760px) {
          main {
            padding: 32px 20px 64px !important;
          }
          header {
            margin-bottom: 24px !important;
          }
          .tracker-kicker {
            font-size: 9px !important;
            letter-spacing: 0.14em !important;
          }
          .header-meta-row {
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .header-controls {
            flex-shrink: 0;
          }
          .summary-metrics {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            border-left: 1px solid var(--border);
          }
          .desktop-milestone-metric {
            display: none !important;
          }
          .mobile-milestone-summary {
            display: block !important;
          }
          .summary-wrap {
            margin-bottom: 24px !important;
          }
          .project-card-grid {
            grid-template-columns: 1fr !important;
          }
          .project-card-button {
            min-height: 0 !important;
          }
          .tracker-title {
            font-size: 36px !important;
          }
          .tracker-description {
            font-size: 16px !important;
            line-height: 1.6 !important;
            margin-top: 18px !important;
          }
          .tracker-description strong {
            color: var(--text-body);
            font-weight: 700;
          }
          .project-facts {
            grid-template-columns: 1fr !important;
          }
          .project-facts-value {
            border-left: 0 !important;
            border-top: 1px solid var(--border) !important;
          }
        }
      `}</style>

      <main style={{ maxWidth: "1040px", margin: "0 auto", padding: "40px 24px 80px" }}>
        <header
          style={{
            marginBottom: "28px",
          }}
        >
          <div
            className="header-meta-row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "12px",
            }}
          >
            <div
              className="tracker-kicker"
              style={{
                color: "var(--text-muted)",
                fontFamily: FONT_STACK,
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {copy.header.kicker}
            </div>
            <HeaderControls
              language={language}
              onNavigate={onNavigate}
              onThemeToggle={toggleTheme}
              copy={copy}
            />
          </div>
          <h1
            className="tracker-title"
            style={{
              margin: 0,
              color: "var(--text-strong)",
              fontSize: "48px",
              fontWeight: 800,
              letterSpacing: "0",
              lineHeight: 1.04,
            }}
          >
            PCDS 2030
            <br />
            <span style={{ color: "var(--brand)" }}>{copy.header.title}</span>
          </h1>
          <div
            className="tracker-description"
            style={{
              maxWidth: "720px",
              margin: "18px 0 0",
              color: "var(--text-muted)",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            {copy.header.intro.map((paragraph, index) => (
              <p key={paragraph} style={{ margin: index === 0 ? 0 : "10px 0 0" }}>
                <EmphasizedText text={paragraph} phrases={INTRO_EMPHASIS[language]} />
              </p>
            ))}
          </div>
          <p
            className="tracker-last-updated"
            style={{
              margin: "14px 0 0",
              color: "var(--text-muted)",
              fontSize: "12px",
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            <NavigationPillLink
              className="tracker-updates-link"
              href={getRouteHref(language === "ms" ? "updates-ms" : "updates")}
              onClick={(event) =>
                onNavigate(
                  event,
                  language === "ms" ? "updates-ms" : "updates"
                )
              }
            >
              {copy.header.lastUpdated} {lastUpdatedLabel}
              <span aria-hidden="true" style={{ marginLeft: "5px" }}>
                {"\u2197\uFE0E"}
              </span>
            </NavigationPillLink>
          </p>
        </header>

        <div style={{ marginBottom: "24px" }}>
          <SummaryMetrics rows={rows} copy={copy} />
        </div>

        <section>
          <FilterBar
            activeFilter={selectedFilter.id}
            label={copy.filters.label}
            onFilter={setActiveFilter}
            filters={filters}
          />
          <ProjectGrid
            rows={filteredRows}
            expandedIds={expandedIds}
            onToggle={toggleExpanded}
            copy={copy}
            language={language}
          />
        </section>

        <footer
          style={{
            marginTop: "56px",
            paddingTop: "20px",
            borderTop: "1px solid var(--border)",
            color: "var(--text-faint)",
            fontSize: "12px",
            lineHeight: 1.7,
          }}
        >
          <p style={{ margin: "0 0 8px" }}>
            {copy.footer.independent.split("hafiy.my")[0]}
            <a
              href="https://hafiy.my"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--brand)", textDecoration: "none" }}
            >
              hafiy.my
            </a>
            {copy.footer.independent.split("hafiy.my")[1]}
          </p>
          <p style={{ margin: 0 }}>
            {copy.footer.methodology}
          </p>
        </footer>
      </main>
      <EnvironmentBadge environment={environment} copy={copy} />
    </div>
  );
}
