import { shouldShowEnvironmentBadge } from "./environment.js";
import { getRouteHref } from "./routes.js";

const FONT_STACK =
  "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export function NavigationPillLink({
  children,
  className = "",
  href,
  onClick,
}) {
  return (
    <a
      className={`navigation-pill-link ${className}`.trim()}
      href={href}
      onClick={onClick}
    >
      <span className="navigation-pill-link-inner">{children}</span>
    </a>
  );
}

export function ProjectClassificationBadge({
  activeCategory = false,
  activeKind = false,
  color,
  copy,
  kind,
  maxWidth = "100%",
  name,
  onCategoryFilter,
  onKindFilter,
}) {
  const label = kind === "sector" ? copy.card.sector : copy.card.enabler;
  const groupLabel = kind === "sector"
    ? copy.categoryFilters.sectors
    : copy.categoryFilters.enablers;
  const interactive = Boolean(onCategoryFilter && onKindFilter);

  if (interactive) {
    const kindActionLabel = activeKind
      ? copy.categoryFilters.clearGroup(groupLabel)
      : copy.categoryFilters.showGroup(groupLabel);
    const categoryActionLabel = activeCategory
      ? copy.categoryFilters.clearCategory(name)
      : copy.categoryFilters.showCategory(name);
    const handleFilterClick = (event, action) => {
      action();

      if (event.detail > 0) {
        event.currentTarget.blur();
      }
    };

    return (
      <div
        className="project-classification project-classification--interactive"
        role="group"
        aria-label={copy.categoryFilters.label(label, name)}
        style={{
          "--project-classification-accent": color,
          "--project-classification-label-space": kind === "sector" ? "68px" : "78px",
          maxWidth,
        }}
      >
        <button
          className="project-classification-button project-classification-kind"
          type="button"
          onClick={(event) => handleFilterClick(event, onKindFilter)}
          aria-label={kindActionLabel}
          aria-pressed={activeKind}
          title={kindActionLabel}
        >
          {label}
        </button>
        <button
          className="project-classification-button project-classification-name"
          type="button"
          onClick={(event) => handleFilterClick(event, onCategoryFilter)}
          aria-label={categoryActionLabel}
          aria-pressed={activeCategory}
          title={categoryActionLabel}
        >
          <span>{name}</span>
        </button>
      </div>
    );
  }

  return (
    <span
      className="project-classification"
      style={{
        "--project-classification-accent": color,
        display: "inline-flex",
        alignItems: "center",
        position: "relative",
        width: "max-content",
        maxWidth,
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          position: "absolute",
          inset: "0 auto 0 0",
          zIndex: 2,
          minHeight: "28px",
          padding: "7px 10px",
          border: "1px solid var(--project-classification-accent)",
          borderRadius: "999px",
          backgroundColor: "var(--project-classification-accent)",
          color: "#ffffff",
          fontFamily: FONT_STACK,
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <span
        style={{
          minWidth: 0,
          minHeight: "28px",
          padding: `7px 11px 7px ${kind === "sector" ? "68px" : "78px"}`,
          border: "1px solid var(--project-classification-accent)",
          borderRadius: "999px",
          backgroundColor: "var(--surface)",
          color: "color-mix(in srgb, var(--project-classification-accent) 78%, var(--accent-text-mix))",
          fontFamily: FONT_STACK,
          fontSize: "11px",
          fontWeight: 800,
          lineHeight: 1.25,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {name}
      </span>
    </span>
  );
}

export function LanguageToggle({
  copy,
  englishRouteId,
  language,
  malayRouteId,
  onNavigate,
}) {
  const options = [
    { id: "en", label: "EN", routeId: englishRouteId },
    { id: "ms", label: "BM", routeId: malayRouteId },
  ];

  return (
    <div
      className="language-toggle"
      role="group"
      aria-label={copy.languageControl.label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        minHeight: "var(--pill-control-height)",
        padding: "3px",
        border: "1px solid var(--border)",
        borderRadius: "var(--pill-control-radius)",
        backgroundColor: "var(--surface)",
      }}
    >
      {options.map((option, index) => (
        <span
          key={option.id}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          {index > 0 && (
            <span
              aria-hidden="true"
              style={{ color: "var(--text-faint)", fontSize: "10px" }}
            >
              |
            </span>
          )}
          <a
            className={`language-toggle-option${language === option.id ? " language-toggle-option--active" : ""}`}
            href={getRouteHref(option.routeId)}
            hrefLang={option.id === "en" ? "en" : "ms"}
            lang={option.id === "en" ? "en" : "ms"}
            aria-current={language === option.id ? "page" : undefined}
            onClick={(event) => onNavigate(event, option.routeId)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "38px",
              minHeight: "var(--pill-control-inner-height)",
              padding: "5px 8px",
              borderRadius: "var(--pill-control-radius)",
              cursor: "pointer",
              fontSize: "var(--pill-control-font-size)",
              fontWeight: 850,
              lineHeight: 1,
              textDecoration: "none",
            }}
          >
            {option.label}
          </a>
        </span>
      ))}
    </div>
  );
}

export function EnvironmentBadge({ environment, copy }) {
  if (!shouldShowEnvironmentBadge(environment)) {
    return null;
  }

  return (
    <div
      aria-label={copy.accessibility.environment(environment.name)}
      style={{
        position: "fixed",
        right: "12px",
        bottom: "12px",
        zIndex: 50,
        padding: "5px 8px",
        border: `1px solid ${environment.badgeColor}`,
        borderRadius: "4px",
        backgroundColor: "var(--surface)",
        color: environment.badgeColor,
        boxShadow: "0 6px 16px var(--shadow)",
        fontFamily: FONT_STACK,
        fontSize: "10px",
        fontWeight: 850,
        letterSpacing: "0.08em",
        lineHeight: 1,
        pointerEvents: "none",
      }}
    >
      {environment.badgeLabel}
    </div>
  );
}

export function ThemeToggle({ onThemeToggle, copy }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onThemeToggle}
      aria-label={`${copy.themeToggle.label}: ${copy.themeToggle.light} / ${copy.themeToggle.dark}`}
      title={`${copy.themeToggle.label}: ${copy.themeToggle.light} / ${copy.themeToggle.dark}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "var(--pill-control-height)",
        height: "var(--pill-control-height)",
        padding: 0,
        borderRadius: "var(--pill-control-radius)",
        cursor: "pointer",
      }}
    >
      <svg className="theme-icon-moon" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
      </svg>
      <svg className="theme-icon-sun" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
