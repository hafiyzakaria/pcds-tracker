import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const CLOUDFLARE_WEB_ANALYTICS_TOKEN = '5e17ff78afe6423a8a9834b7870b55fd'

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
