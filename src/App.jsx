import { useEffect, useMemo, useState } from "react";

import {
  ECONOMIC_SECTOR_IDS,
  SECTORS,
} from "./trackerData.js";
import { getAppEnvironment, shouldShowEnvironmentBadge } from "./environment.js";

const FONT_STACK = "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const STATUS_META = {
  "Awaiting Decision": {
    label: "Ongoing",
    bg: "#d97706",
    text: "#ffffff",
    order: 0,
    description: "delivery moving, pending approval, or awaiting next public decision",
  },
  "In Progress": {
    label: "Ongoing",
    bg: "#d97706",
    text: "#ffffff",
    order: 1,
    description: "delivery moving, pending approval, or awaiting next public decision",
  },
  Planning: {
    label: "Planning",
    bg: "#4f46e5",
    text: "#ffffff",
    order: 2,
    description: "scope or delivery being shaped",
  },
  Operational: {
    label: "Completed",
    bg: "#16a34a",
    text: "#ffffff",
    order: 3,
    description: "in use or completed",
  },
  Designated: {
    label: "Completed",
    bg: "#16a34a",
    text: "#ffffff",
    order: 4,
    description: "outcome formally achieved",
  },
  Enacted: {
    label: "Completed",
    bg: "#16a34a",
    text: "#ffffff",
    order: 5,
    description: "law or policy in effect",
  },
};

const FILTERS = [
  { id: "all", label: "All", statuses: null },
  { id: "ongoing", label: STATUS_META["In Progress"].label, statuses: ["Awaiting Decision", "In Progress"] },
  { id: "planning", label: STATUS_META.Planning.label, statuses: ["Planning"] },
  { id: "delivered", label: STATUS_META.Operational.label, statuses: ["Operational", "Designated", "Enacted"] },
];

function shouldUsePreviewCards(environment) {
  return environment.name === "preview";
}

function getStatusMeta(status, color) {
  return STATUS_META[status] || {
    label: status,
    bg: color || "#6b7280",
    text: "#ffffff",
    order: 99,
    description: "Status is based on available public reporting.",
  };
}

function getProjectRows() {
  return SECTORS.filter((sector) => !sector.isOverview).flatMap((sector) => {
    const kind = ECONOMIC_SECTOR_IDS.has(sector.id) ? "sector" : "enabler";

    return sector.projects.map((project) => {
      const doneMilestones = project.milestones.filter((milestone) => milestone.done).length;
      const totalMilestones = project.milestones.length;
      const nextMilestone = project.milestones.find((milestone) => !milestone.done);
      const latestMilestone = [...project.milestones].reverse().find((milestone) => milestone.done);
      const statusMeta = getStatusMeta(project.status, project.statusColor);

      return {
        ...project,
        id: `${sector.id}-${project.name}`,
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

function sortProjectRows(rows) {
  return [...rows].sort((a, b) => {
    if (a.attentionOrder !== b.attentionOrder) {
      return a.attentionOrder - b.attentionOrder;
    }

    return a.name.localeCompare(b.name);
  });
}

function StatusBadge({ status, color }) {
  const tone = getStatusMeta(status, color);

  return (
    <span
      title={status}
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
        backgroundColor: tone.bg,
        color: tone.text,
        fontSize: "10px",
        fontWeight: 800,
        letterSpacing: "0.08em",
        lineHeight: 1,
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        fontFamily: FONT_STACK,
      }}
    >
      {tone.label}
    </span>
  );
}

function EnvironmentBadge({ environment }) {
  if (!shouldShowEnvironmentBadge(environment)) {
    return null;
  }

  return (
    <div
      aria-label={`${environment.name} environment`}
      style={{
        position: "fixed",
        right: "12px",
        bottom: "12px",
        zIndex: 50,
        padding: "5px 8px",
        border: `1px solid ${environment.badgeColor}`,
        borderRadius: "4px",
        backgroundColor: "#ffffff",
        color: environment.badgeColor,
        boxShadow: "0 6px 16px rgba(17, 24, 39, 0.14)",
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

function Metric({ value, label, accent = "#0d9488" }) {
  return (
    <div
      style={{
        minHeight: "82px",
        padding: "14px 16px",
        borderTop: `3px solid ${accent}`,
        borderRight: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          color: "#1a1a2e",
          fontFamily: FONT_STACK,
          fontSize: "24px",
          fontWeight: 800,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: "8px",
          color: "#6b7280",
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

function SummaryMetrics({ rows }) {
  const active = rows.filter((row) => row.status === "In Progress").length;
  const planning = rows.filter((row) => row.status === "Planning").length;
  const awaiting = rows.filter((row) => row.status === "Awaiting Decision").length;
  const ongoing = active + awaiting;
  const completeLike = rows.filter((row) =>
    ["Operational", "Designated", "Enacted"].includes(row.status)
  ).length;
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
          borderLeft: "1px solid #e5e7eb",
        }}
      >
        <Metric value={rows.length} label="Tracked Projects" accent="#0d9488" />
        <Metric value={ongoing} label="Ongoing" accent="#d97706" />
        <Metric value={planning} label="Planning" accent="#4f46e5" />
      <Metric value={completeLike} label="Completed" accent="#16a34a" />
        <div className="desktop-milestone-metric">
          <Metric value={`${doneMilestones}/${totalMilestones}`} label="Milestones" accent="#1d4ed8" />
        </div>
      </div>
      <div
        className="mobile-milestone-summary"
        style={{
          display: "none",
          padding: "16px 18px",
          border: "1px solid #e5e7eb",
          borderTop: 0,
          backgroundColor: "#ffffff",
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
              color: "#6b7280",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Milestones
          </div>
          <div
            style={{
              color: "#1a1a2e",
              fontSize: "22px",
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            {doneMilestones}/{totalMilestones}
          </div>
        </div>
        <div
          aria-label={`${doneMilestones} of ${totalMilestones} milestones completed`}
          style={{
            height: "6px",
            marginTop: "12px",
            overflow: "hidden",
            borderRadius: "999px",
            backgroundColor: "#e5e7eb",
          }}
        >
          <div
            style={{
              width: `${milestoneProgress}%`,
              height: "100%",
              borderRadius: "999px",
              backgroundColor: "#1d4ed8",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function FilterBar({ activeFilter, onFilter }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "16px",
        paddingBottom: "2px",
        flexWrap: "wrap",
      }}
    >
      {FILTERS.map((filter) => {
        const active = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => onFilter(filter.id)}
            style={{
              flexShrink: 0,
              padding: "8px 12px",
              border: active ? "1px solid #0d9488" : "1px solid #d1d5db",
              borderRadius: "999px",
              backgroundColor: active ? "#0d948815" : "#ffffff",
              color: active ? "#0d9488" : "#6b7280",
              cursor: "pointer",
              fontFamily: FONT_STACK,
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

function DetailSection({ title, children }) {
  return (
    <section style={{ display: "grid", gap: "8px" }}>
      <h4
        style={{
          margin: 0,
          color: "#9ca3af",
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
          color: "#4b5563",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        {children}
      </div>
    </section>
  );
}

function MilestoneIndicator({ row }) {
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
          color: "#9ca3af",
          fontFamily: FONT_STACK,
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Milestones
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }} aria-hidden="true">
        {row.milestones.map((milestone, index) => (
          <span
            key={`${row.id}-indicator-${index}`}
            style={{
              width: "18px",
              height: "6px",
              borderRadius: "999px",
              backgroundColor: milestone.done ? row.sectorColor : "#e5e7eb",
              opacity: milestone.done ? 1 : 0.95,
            }}
          />
        ))}
      </div>
      <span
        style={{
          color: "#6b7280",
          fontFamily: FONT_STACK,
          fontSize: "11px",
          fontWeight: 700,
          whiteSpace: "nowrap",
        }}
      >
        {row.doneMilestones}/{row.totalMilestones} completed
      </span>
    </div>
  );
}

function FactList({ row }) {
  return (
    <div
      className="project-facts"
      style={{
        display: "grid",
        gridTemplateColumns: row.value && row.value !== "—" ? "minmax(0, 1fr) minmax(136px, auto)" : "1fr",
        border: "1px solid #e5e7eb",
        borderRadius: "6px",
        backgroundColor: "#ffffff",
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
            color: "#9ca3af",
            fontSize: "8px",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Lead / parties
        </span>
        <span style={{ color: "#374151", fontSize: "12px", fontWeight: 750, lineHeight: 1.35 }}>{row.lead}</span>
      </div>
      {row.value && row.value !== "—" && (
        <div
          className="project-facts-value"
          style={{
            display: "grid",
            gap: "4px",
            padding: "8px 10px",
            borderLeft: "1px solid #e5e7eb",
          }}
        >
          <span
            style={{
              color: "#9ca3af",
              fontSize: "8px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Reported value
          </span>
          <span style={{ color: row.sectorColor, fontSize: "12px", fontWeight: 850, lineHeight: 1.35 }}>{row.value}</span>
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
            border: "1px solid #e5e7eb",
            borderRadius: "6px",
            backgroundColor: "#ffffff",
            color: "#374151",
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
              backgroundColor: `${color}14`,
              color,
              fontSize: "9px",
              fontWeight: 800,
            }}
          >
            {index + 1}
          </span>
          <span>{source.label}</span>
          <span style={{ color, fontSize: "12px" }}>↗</span>
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
      inert={expanded ? undefined : ""}
    >
      <div className="accordion-reveal-inner">{children}</div>
    </div>
  );
}

function MilestoneList({ milestones }) {
  return (
    <div style={{ display: "grid", gap: "0" }}>
      {milestones.map((milestone, index) => (
        <div
          key={`${milestone.date}-${index}`}
          style={{
            display: "grid",
            gridTemplateColumns: "86px minmax(0, 1fr)",
            gap: "12px",
            padding: "9px 0",
            borderTop: index === 0 ? "1px solid #e5e7eb" : "1px solid #f1f5f9",
          }}
        >
          <span
            style={{
              color: milestone.done ? "#0d9488" : "#9ca3af",
              fontFamily: FONT_STACK,
              fontSize: "11px",
              fontWeight: 700,
            }}
          >
            {milestone.date}
          </span>
          <span style={{ color: "#4b5563", fontSize: "13px", lineHeight: 1.45 }}>
            {milestone.text}
          </span>
        </div>
      ))}
    </div>
  );
}

function MilestoneTimeline({ row }) {
  const loggedMilestones = row.milestones.filter((milestone) => milestone.done);

  if (loggedMilestones.length === 0) {
    return null;
  }

  return (
    <DetailSection title="Completed Milestones">
      <MilestoneList milestones={loggedMilestones} />
    </DetailSection>
  );
}

function CompletedMilestoneRows({ row }) {
  const loggedMilestones = row.milestones.filter((milestone) => milestone.done);

  if (loggedMilestones.length === 0) {
    return null;
  }

  return <MilestoneList milestones={loggedMilestones} />;
}

function FollowingMilestones({ row }) {
  const followingMilestones = row.milestones.filter((milestone) => !milestone.done).slice(1);

  if (followingMilestones.length === 0) {
    return null;
  }

  return (
    <DetailSection title="Remaining Milestones">
      <MilestoneList milestones={followingMilestones} />
    </DetailSection>
  );
}

function formatNextMilestone(milestone, compact = false) {
  if (!milestone) {
    return "No open milestone";
  }

  const phaseOnlyDates = new Set(["ongoing"]);
  const date = milestone.date?.trim();
  const fullText = milestone.text.replace(/^(ongoing|planning|completed):\s*/i, "");
  const text = compact ? milestone.shortText || fullText : fullText;

  if (!date || phaseOnlyDates.has(date.toLowerCase())) {
    return text;
  }

  return `${date}: ${text}`;
}

function NextMilestoneCallout({ row, expanded, previewCards }) {
  const text = previewCards
    ? formatNextMilestone(row.nextMilestone, !expanded)
    : row.nextMilestone
      ? `${row.nextMilestone.date}: ${row.nextMilestone.text}`
      : "No open milestone";

  return (
    <div
      style={{
        display: "grid",
        gap: "5px",
        padding: expanded ? "10px 12px" : "9px 11px",
        border: `1px solid ${row.sectorColor}33`,
        borderLeft: `4px solid ${row.sectorColor}`,
        borderRadius: "6px",
        backgroundColor: `${row.sectorColor}0d`,
      }}
    >
      <div
        style={{
          color: row.sectorColor,
          fontFamily: FONT_STACK,
          fontSize: "10px",
          fontWeight: 850,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Next Milestone
      </div>
      <div
        style={{
          color: "#374151",
          fontSize: "13px",
          fontWeight: expanded ? 700 : 650,
          lineHeight: 1.45,
          ...(previewCards
            ? {
                whiteSpace: expanded ? "normal" : "nowrap",
                overflow: expanded ? "visible" : "hidden",
                textOverflow: expanded ? "clip" : "ellipsis",
              }
            : {}),
        }}
      >
        {text}
      </div>
    </div>
  );
}

function ProjectCard({ row, expanded, onToggle, previewCards }) {
  const cardBorderColor = previewCards ? "#cbd5e1" : "#e5e7eb";

  return (
    <article
      className="project-card"
      data-expanded={expanded ? "true" : "false"}
      style={{
        border: `1px solid ${cardBorderColor}`,
        borderTop: previewCards ? `1px solid ${cardBorderColor}` : `3px solid ${row.sectorColor}`,
        borderRadius: "8px",
        backgroundColor: expanded ? "#f8fafc" : "#ffffff",
        overflow: "hidden",
        transition: "background-color 0.15s ease, border-color 0.15s ease",
      }}
    >
      <button
        className="project-card-button"
        onClick={onToggle}
        aria-expanded={expanded}
        style={{
          width: "100%",
          minHeight: expanded ? "190px" : "263px",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          gap: "14px",
          padding: "18px",
          border: "none",
          backgroundColor: "transparent",
          color: "inherit",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "flex-start" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              position: "relative",
              width: "max-content",
              maxWidth: "calc(100% - 32px)",
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
                border: `1px solid ${row.sectorColor}`,
                borderRadius: "999px",
                backgroundColor: row.sectorColor,
                color: "#ffffff",
                fontFamily: FONT_STACK,
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {row.kind === "sector" ? "Sector" : "Enabler"}
            </span>
            <span
              style={{
                minWidth: 0,
                minHeight: "28px",
                padding: `7px 11px 7px ${row.kind === "sector" ? "68px" : "78px"}`,
                border: `1px solid ${row.sectorColor}`,
                borderRadius: "999px",
                backgroundColor: "#ffffff",
                color: row.sectorColor,
                fontFamily: FONT_STACK,
                fontSize: "11px",
                fontWeight: 800,
                lineHeight: 1.25,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {row.sectorName}
            </span>
          </div>
          <span
            aria-hidden="true"
            style={{
              color: row.sectorColor,
              fontFamily: FONT_STACK,
              fontSize: "18px",
              lineHeight: 1,
            }}
          >
            {expanded ? "−" : "+"}
          </span>
        </div>

        <div>
          <h3
            style={{
              margin: 0,
              color: "#1a1a2e",
              fontSize: "18px",
              fontWeight: 800,
              lineHeight: 1.22,
            }}
          >
            {row.name}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "12px" }}>
            <StatusBadge status={row.status} color={row.statusColor} />
          </div>
          <AccordionReveal expanded={expanded} className="project-card-intro-reveal">
            <div
              style={{
                display: "grid",
                gap: "8px",
                paddingTop: "12px",
                color: "#4b5563",
                fontSize: "13px",
                lineHeight: 1.55,
              }}
            >
              <FactList row={row} />
              <p style={{ margin: 0 }}>{row.summary}</p>
            </div>
          </AccordionReveal>
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          <MilestoneIndicator row={row} />
          {previewCards && (
            <AccordionReveal expanded={expanded} className="project-card-completed-reveal">
              <CompletedMilestoneRows row={row} />
            </AccordionReveal>
          )}
          <NextMilestoneCallout row={row} expanded={expanded} previewCards={previewCards} />
          <AccordionReveal expanded={expanded} className="project-card-timeline-reveal">
            <div style={{ display: "grid", gap: "12px", paddingTop: "2px" }}>
              <FollowingMilestones row={row} />
              {!previewCards && <MilestoneTimeline row={row} />}
            </div>
          </AccordionReveal>
        </div>
      </button>

      <AccordionReveal expanded={expanded} className="project-card-sources-reveal">
        <div
          style={{
            display: "grid",
            padding: "18px",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <DetailSection title="Sources">
            <SourceLinks sources={row.sources} color={row.sectorColor} interactive={expanded} />
          </DetailSection>
        </div>
      </AccordionReveal>
    </article>
  );
}

function ProjectGrid({ rows, expandedIds, onToggle, previewCards }) {
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
          previewCards={previewCards}
        />
      ))}
    </section>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedIds, setExpandedIds] = useState([]);
  const environment = getAppEnvironment();
  const previewCards = shouldUsePreviewCards(environment);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const rows = useMemo(() => sortProjectRows(getProjectRows()), []);
  const selectedFilter = FILTERS.find((filter) => filter.id === activeFilter) || FILTERS[0];
  const filteredRows = sortProjectRows(rows.filter((row) => {
    if (!selectedFilter.statuses) return true;
    return selectedFilter.statuses.includes(row.status);
  }));
  const toggleExpanded = (id) => {
    setExpandedIds((current) =>
      current.includes(id) ? current.filter((expandedId) => expandedId !== id) : [...current, id]
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#374151",
        fontFamily: FONT_STACK,
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { background: #ffffff; }
        button { font: inherit; }
        a:hover { opacity: 0.8; }
        ::selection { background: #0d948844; }
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
          .summary-metrics {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            border-left: 1px solid #e5e7eb;
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
            line-height: 1.55 !important;
            margin-top: 18px !important;
          }
          .project-facts {
            grid-template-columns: 1fr !important;
          }
          .project-facts-value {
            border-left: 0 !important;
            border-top: 1px solid #e5e7eb !important;
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
            className="tracker-kicker"
            style={{
              marginBottom: "10px",
              color: "#6b7280",
              fontFamily: FONT_STACK,
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Sarawak Development Monitor
          </div>
          <h1
            className="tracker-title"
            style={{
              margin: 0,
              color: "#1a1a2e",
              fontSize: "48px",
              fontWeight: 800,
              letterSpacing: "0",
              lineHeight: 1.04,
            }}
          >
            PCDS 2030
            <br />
            <span style={{ color: "#0d9488" }}>Project Tracker</span>
          </h1>
          <p
            className="tracker-description"
            style={{
              maxWidth: "680px",
              margin: "18px 0 0",
              color: "#6b7280",
              fontSize: "17px",
              lineHeight: 1.65,
            }}
          >
            An independent PCDS 2030 dashboard for the Sarawak Post COVID-19 Development
            Strategy 2030, tracking major projects, current status, milestones, and public evidence.
          </p>
        </header>

        <div style={{ marginBottom: "24px" }}>
          <SummaryMetrics rows={rows} />
        </div>

        <section>
          <FilterBar activeFilter={activeFilter} onFilter={setActiveFilter} />
          <ProjectGrid
            rows={filteredRows}
            expandedIds={expandedIds}
            onToggle={toggleExpanded}
            previewCards={previewCards}
          />
        </section>

        <footer
          style={{
            marginTop: "56px",
            paddingTop: "20px",
            borderTop: "1px solid #e5e7eb",
            color: "#9ca3af",
            fontSize: "12px",
            lineHeight: 1.7,
          }}
        >
          <p style={{ margin: "0 0 8px" }}>
            Built by{" "}
            <a
              href="https://hafiy.my"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0d9488", textDecoration: "none" }}
            >
              hafiy.my
            </a>{" "}
            — an independent tracker. Not affiliated with the Sarawak Government.
          </p>
          <p style={{ margin: 0 }}>
            Data sourced from public reports, news outlets, and official announcements.
            Milestone statuses are best-effort based on available information.
          </p>
        </footer>
      </main>
      <EnvironmentBadge environment={environment} />
    </div>
  );
}
