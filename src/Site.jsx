import { useEffect, useRef, useState } from "react";

import App from "./App.jsx";
import AboutPage from "./AboutPage.jsx";
import BackToTop from "./BackToTop.jsx";
import { applyDocumentRouteMetadata } from "./documentMetadata.js";
import { getUiCopy } from "./localization.js";
import {
  getRouteById,
  getRouteHref,
  resolveRoute,
} from "./routes.js";
import UpdatesPage from "./UpdatesPage.jsx";
import { LanguageToggle, ThemeToggle } from "./SiteControls.jsx";
import { applyDocumentTheme } from "./theme.js";

export default function Site({ route, concept = false }) {
  const [activeRoute, setActiveRoute] = useState(route);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const navRef = useRef(null);
  const pageHeadingRef = useRef(null);
  const previousPageRef = useRef(route.page);
  const copy = getUiCopy(activeRoute.language);

  useEffect(() => {
    if (!menuOpen) return;
    const dismiss = (event) => {
      if (event.type === "keydown" && event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      } else if (event.type === "pointerdown" && !navRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const resize = () => { if (window.innerWidth > 760) setMenuOpen(false); };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", dismiss);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", dismiss);
      window.removeEventListener("resize", resize);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handlePopState = () => {
      setMenuOpen(false);
      setActiveRoute(
        resolveRoute(window.location.pathname, import.meta.env.BASE_URL)
      );
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    applyDocumentRouteMetadata(activeRoute);

    const pageChanged = previousPageRef.current !== activeRoute.page;
    previousPageRef.current = activeRoute.page;

    if (!pageChanged) {
      return undefined;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const frameId = window.requestAnimationFrame(() => {
      pageHeadingRef.current?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeRoute]);

  const navigate = (event, routeId, hash = "") => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    setMenuOpen(false);
    const nextRoute = getRouteById(routeId);
    const pageChanged = nextRoute.page !== activeRoute.page;

    window.history.pushState(
      {},
      "",
      `${getRouteHref(routeId, import.meta.env.BASE_URL)}${concept ? `?${new URLSearchParams({ ...Object.fromEntries(new URLSearchParams(window.location.search)), concept: "xai" })}` : ""}${hash ? `#${hash}` : ""}`
    );
    setActiveRoute(nextRoute);

    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView();
      });
    } else if (pageChanged || concept) {
      window.scrollTo({ top: 0 });
    }
  };

  const page = activeRoute.page === "about"
    ? <AboutPage language={activeRoute.language} onNavigate={navigate} headingRef={pageHeadingRef} />
    : activeRoute.page === "updates"
    ? (
      <UpdatesPage
        concept={concept}
        language={activeRoute.language}
        onNavigate={navigate}
        headingRef={pageHeadingRef}
      />
    )
    : (
      <App
        concept={concept}
        language={activeRoute.language}
        onNavigate={navigate}
        headingRef={pageHeadingRef}
      />
    );

  return (
    <>
      {concept && <nav ref={navRef} className="concept-nav" aria-label="Primary navigation">
        <a className="concept-brand" href="/?concept=xai" aria-label="PCDS 2030 Project Tracker home">
          <img src="/favicon-production-browser.png?v=20260804d" alt="" width="32" height="32" />
        </a>
        <div id="concept-navigation-links" className={`concept-links${menuOpen ? " concept-links--open" : ""}`}>
          <a className="concept-about-link" href={getRouteHref(activeRoute.language === "ms" ? "about-ms" : "about") + "?concept=xai"} onClick={(event) => navigate(event, activeRoute.language === "ms" ? "about-ms" : "about")}>{activeRoute.language === "ms" ? "Tentang" : "About"}</a>
          <a href={getRouteHref(activeRoute.language === "ms" ? "tracker-ms" : "tracker-en") + "?concept=xai"} onClick={(event) => navigate(event, activeRoute.language === "ms" ? "tracker-ms" : "tracker-en")}>{activeRoute.language === "ms" ? "Projek" : "Projects"}</a>
          <a href={getRouteHref(activeRoute.language === "ms" ? "updates-ms" : "updates") + "?concept=xai"} onClick={(event) => navigate(event, activeRoute.language === "ms" ? "updates-ms" : "updates")}>{activeRoute.language === "ms" ? "Kemas kini" : "Updates"}</a>
        </div>
        <div className="concept-utilities">
          <LanguageToggle copy={copy} language={activeRoute.language} englishRouteId={activeRoute.page === "about" ? "about" : activeRoute.page === "updates" ? "updates" : "tracker-en"} malayRouteId={activeRoute.page === "about" ? "about-ms" : activeRoute.page === "updates" ? "updates-ms" : "tracker-ms"} onNavigate={navigate} />
          <ThemeToggle copy={copy} onThemeToggle={(theme) => {
            applyDocumentTheme(theme);
            try { localStorage.setItem("pcds-theme", theme); } catch { /* Theme still works without storage. */ }
          }} />
          <button ref={menuButtonRef} className="concept-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="concept-navigation-links" aria-label={activeRoute.language === "ms" ? (menuOpen ? "Tutup menu" : "Buka menu") : (menuOpen ? "Close menu" : "Open menu")} onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </nav>}
      {page}
      <BackToTop label={copy.accessibility.backToTop} />
    </>
  );
}
