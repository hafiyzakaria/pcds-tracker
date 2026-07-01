import { useEffect, useMemo, useState } from "react";

import {
  ECONOMIC_SECTOR_IDS,
  SECTORS,
} from "./trackerData.js";

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
    label: "Delivered",
    bg: "#16a34a",
    text: "#ffffff",
    order: 3,
    description: "in use or completed",
  },
  Designated: {
    label: "Delivered",
    bg: "#16a34a",
    text: "#ffffff",
    order: 4,
    description: "outcome formally achieved",
  },
  Enacted: {
    label: "Delivered",
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

const STATUS_LEGEND = ["In Progress", "Planning", "Operational"];

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

  return (
    <section
      className="summary-metrics"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(132px, 1fr))",
        marginBottom: "24px",
        borderLeft: "1px solid #e5e7eb",
      }}
    >
      <Metric value={rows.length} label="Tracked Projects" accent="#0d9488" />
      <Metric value={ongoing} label="Ongoing" accent="#d97706" />
      <Metric value={planning} label="Planning" accent="#4f46e5" />
      <Metric value={completeLike} label="Delivered" accent="#16a34a" />
      <Metric value={`${doneMilestones}/${totalMilestones}`} label="Milestones" accent="#1d4ed8" />
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

function StatusLegend() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        margin: "-4px 0 18px",
        color: "#6b7280",
        fontFamily: FONT_STACK,
        fontSize: "10px",
        lineHeight: 1.45,
      }}
    >
      {STATUS_LEGEND.map((status) => {
        const meta = getStatusMeta(status);

        return (
          <span
            key={status}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: meta.bg,
              }}
            />
            <span>
              <strong style={{ color: "#374151" }}>{meta.label}</strong>: {meta.description}
            </span>
          </span>
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

function MilestoneCount({ row }) {
  return (
    <span
      style={{
        display: "inline-flex",
        width: "max-content",
        maxWidth: "100%",
        padding: "4px 8px",
        border: "1px solid #e5e7eb",
        borderRadius: "999px",
        color: "#6b7280",
        fontFamily: FONT_STACK,
        fontSize: "11px",
        fontWeight: 700,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {row.doneMilestones}/{row.totalMilestones} milestones logged
    </span>
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
        {row.doneMilestones}/{row.totalMilestones} logged
      </span>
    </div>
  );
}

function FactList({ row }) {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
      <span>{row.lead}</span>
      {row.value && row.value !== "—" && (
        <span style={{ color: row.sectorColor, fontWeight: 700 }}>{row.value}</span>
      )}
      <MilestoneCount row={row} />
    </div>
  );
}

function MilestoneNote({ milestone, emptyText }) {
  if (!milestone) {
    return <span>{emptyText}</span>;
  }

  return (
    <span>
      <strong
        style={{
          color: "#374151",
          fontFamily: FONT_STACK,
          fontSize: "12px",
        }}
      >
        {milestone.date}
      </strong>
      {": "}
      {milestone.text}
    </span>
  );
}

function SourceLinks({ sources, color }) {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      {sources.map((source) => (
        <a
          key={source.url}
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          style={{
            color,
            fontFamily: FONT_STACK,
            fontSize: "11px",
            fontWeight: 700,
            textDecoration: "none",
            borderBottom: `1px solid ${color}33`,
          }}
        >
          {source.label} ↗
        </a>
      ))}
    </div>
  );
}

function MilestoneList({ milestones }) {
  return (
    <div style={{ display: "grid", gap: "0", marginTop: "12px" }}>
      {milestones.map((milestone, index) => (
        <div
          key={`${milestone.date}-${index}`}
          style={{
            display: "grid",
            gridTemplateColumns: "86px minmax(0, 1fr)",
            gap: "12px",
            padding: "7px 0",
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

function ProjectCard({ row, expanded, onToggle }) {
  return (
    <article
      style={{
        border: "1px solid #e5e7eb",
        borderTop: `3px solid ${row.sectorColor}`,
        borderRadius: "8px",
        backgroundColor: expanded ? "#f8fafc" : "#ffffff",
        overflow: "hidden",
        transition: "background-color 0.15s ease, border-color 0.15s ease",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        style={{
          width: "100%",
          minHeight: "190px",
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
              color: expanded ? row.sectorColor : "#9ca3af",
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
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          <MilestoneIndicator row={row} />
          <div>
            <div
              style={{
                marginBottom: "5px",
                color: "#9ca3af",
                fontFamily: FONT_STACK,
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Next Milestone
            </div>
            <div style={{ color: "#4b5563", fontSize: "13px", lineHeight: 1.45 }}>
              {row.nextMilestone ? `${row.nextMilestone.date}: ${row.nextMilestone.text}` : "No open milestone"}
            </div>
          </div>
        </div>
      </button>

      {expanded && (
        <div
          style={{
            display: "grid",
            gap: "18px",
            padding: "18px",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <DetailSection title="Now">
            {row.summary}
            <FactList row={row} />
          </DetailSection>

          <DetailSection title="Next">
            <MilestoneNote
              milestone={row.nextMilestone}
              emptyText="No open public milestone is currently listed."
            />
            <MilestoneList milestones={row.milestones} />
          </DetailSection>

          <DetailSection title="Evidence">
            <p style={{ margin: "0 0 10px" }}>
              Latest logged milestone:{" "}
              <MilestoneNote
                milestone={row.latestMilestone}
                emptyText="No completed milestone is currently logged."
              />
            </p>
            <SourceLinks sources={row.sources} color={row.sectorColor} />
          </DetailSection>
        </div>
      )}
    </article>
  );
}

function ProjectGrid({ rows, expandedId, onToggle }) {
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
          expanded={expandedId === row.id}
          onToggle={() => onToggle(expandedId === row.id ? null : row.id)}
        />
      ))}
    </section>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);

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
        @media (max-width: 760px) {
          .summary-metrics {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .project-card-grid {
            grid-template-columns: 1fr !important;
          }
          .tracker-title {
            font-size: 36px !important;
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
            <span style={{ color: "#0d9488" }}>Public Tracker</span>
          </h1>
          <p
            style={{
              maxWidth: "680px",
              margin: "18px 0 0",
              color: "#6b7280",
              fontSize: "17px",
              lineHeight: 1.65,
            }}
          >
            A scan-first view of major Sarawak development projects, their current status,
            next visible milestone, and public evidence.
          </p>
        </header>

        <SummaryMetrics rows={rows} />

        <section>
          <FilterBar activeFilter={activeFilter} onFilter={setActiveFilter} />
          <StatusLegend />
          <ProjectGrid rows={filteredRows} expandedId={expandedId} onToggle={setExpandedId} />
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
    </div>
  );
}
