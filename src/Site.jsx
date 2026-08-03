import { useEffect, useState } from "react";

import App from "./App.jsx";
import { applyDocumentRouteMetadata } from "./documentMetadata.js";
import {
  getRouteById,
  getRouteHref,
  resolveRoute,
} from "./routes.js";
import UpdatesPage from "./UpdatesPage.jsx";

export default function Site({ route }) {
  const [activeRoute, setActiveRoute] = useState(route);

  useEffect(() => {
    const handlePopState = () => {
      setActiveRoute(
        resolveRoute(window.location.pathname, import.meta.env.BASE_URL)
      );
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    applyDocumentRouteMetadata(activeRoute);
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
    const nextRoute = getRouteById(routeId);
    const pageChanged = nextRoute.page !== activeRoute.page;

    window.history.pushState(
      {},
      "",
      `${getRouteHref(routeId, import.meta.env.BASE_URL)}${hash ? `#${hash}` : ""}`
    );
    setActiveRoute(nextRoute);

    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView();
      });
    } else if (pageChanged) {
      window.scrollTo({ top: 0 });
    }
  };

  if (activeRoute.page === "updates") {
    return (
      <UpdatesPage
        language={activeRoute.language}
        onNavigate={navigate}
      />
    );
  }

  return <App language={activeRoute.language} onNavigate={navigate} />;
}
