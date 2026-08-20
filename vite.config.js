import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const CLOUDFLARE_WEB_ANALYTICS_TOKEN = 'd9128ca2b1024d93b53724e64048e6d5'

function cloudflareWebAnalytics(mode) {
  return {
    name: 'cloudflare-web-analytics',
    transformIndexHtml() {
      if (mode !== 'production') {
        return []
      }

      return [
        {
          tag: 'script',
          attrs: {
            defer: true,
            src: 'https://static.cloudflareinsights.com/beacon.min.js',
            'data-cf-beacon': JSON.stringify({
              token: CLOUDFLARE_WEB_ANALYTICS_TOKEN,
              spa: true,
            }),
          },
          injectTo: 'body',
        },
      ]
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), cloudflareWebAnalytics(mode)],
}))
