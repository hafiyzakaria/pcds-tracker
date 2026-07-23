import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import Site from './Site.jsx'
import { resolveRoute } from './routes.js'

const container = document.getElementById('root')
const route = resolveRoute(window.location.pathname, import.meta.env.BASE_URL)
const app = (
  <StrictMode>
    <Site route={route} />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
