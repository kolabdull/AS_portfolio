import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

// Section order per category. Each entry names a field on the project.
// Sections only render if the project actually has that data, so a
// missing field never breaks the page.
const LAYOUTS = {
  Research: ["overview", "problem", "approach", "results", "contribution"],
  "Education Technology": ["problem", "approach", "results", "contribution"],
  "AI & Automation": ["overview", "approach", "results"],
  "Engineering Simulation": ["overview", "approach", "results"],
  Software: ["overview", "approach", "results", "contribution"],
};

const DEFAULT_LAYOUT = [
  "overview",
  "problem",
  "approach",
  "results",
  "contribution",
];

// How each field is labelled and rendered, per category where it differs.
const SECTION_META = {
  overview: { label: "OVERVIEW" },
  problem: { label: "THE PROBLEM" },
  approach: { label: "APPROACH" },
  results: { label: "RESULTS" },
  contribution: { label: "MY CONTRIBUTION" },
};

// Category-specific relabelling (same field, different framing).
const LABEL_OVERRIDES = {
  Software: { approach: "ARCHITECTURE & FEATURES" },
  "Education Technology": { results: "USERS & IMPACT" },
  "Engineering Simulation": { approach: "METHODOLOGY" },
  "AI & Automation": { approach: "HOW IT WORKS" },
};

// Which link types to surface per category (keeps professional work safe).
const LINK_POLICY = {
  Research: ["paper", "report"],
  "Education Technology": ["github", "demo"],
  "AI & Automation": ["demo"],
  "Engineering Simulation": ["report"],
  Software: ["github", "demo"],
};

const LINK_LABELS = {
  github: "GitHub ↗",
  paper: "Paper ↗",
  report: "Report ↗",
  demo: "Live Demo ↗",
};

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="project-not-found">
        <p>404 / PROJECT NOT FOUND</p>
        <Link to="/">← Return to portfolio</Link>
      </main>
    );
  }

  const layout = LAYOUTS[project.category] || DEFAULT_LAYOUT;
  const labelOverrides = LABEL_OVERRIDES[project.category] || {};

  // Only render sections the project actually has content for.
  const sections = layout.filter((field) => {
    const value = project[field];
    return Array.isArray(value) ? value.length > 0 : Boolean(value);
  });

  // Only show links this category permits AND that actually exist.
  const allowedLinks = LINK_POLICY[project.category] || [
    "github",
    "paper",
    "report",
    "demo",
  ];
  const visibleLinks = allowedLinks.filter((key) => project.links?.[key]);

  return (
    <main className="project-detail">
      <header className="project-detail-header">
        <Link to="/" className="project-back">
          ← Back to work
        </Link>

        <div className="project-detail-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h1>{project.title}</h1>

        <p className="project-detail-description">{project.description}</p>

        {project.tags?.length > 0 && (
          <div className="project-detail-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </header>

      <section className="project-detail-hero">
        {project.heroImage ? (
          <img src={project.heroImage} alt={project.title} />
        ) : (
          <div className="project-hero-placeholder">
            <span>PROJECT_VISUAL</span>
            <small>{project.category}</small>
          </div>
        )}
      </section>

      {sections.map((field, index) => {
        const number = String(index + 1).padStart(2, "0");
        const label =
          labelOverrides[field] || SECTION_META[field].label;
        const value = project[field];

        return (
          <section className="project-detail-section" key={field}>
            <div className="detail-label">
              {number} / {label}
            </div>

            <div className="detail-content">
              {Array.isArray(value) ? (
                <ul>
                  {value.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{value}</p>
              )}
            </div>
          </section>
        );
      })}

      {project.technologies?.length > 0 && (
        <section className="project-detail-section">
          <div className="detail-label">
            {String(sections.length + 1).padStart(2, "0")} / TECHNOLOGIES
          </div>
          <div className="detail-content">
            <div className="detail-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="project-detail-footer">
        {project.status && (
          <div>
            <span className="detail-label">STATUS</span>
            <p>{project.status}</p>
          </div>
        )}

        {visibleLinks.length > 0 && (
          <div className="project-links">
            {visibleLinks.map((key) => (
              <a
                key={key}
                href={project.links[key]}
                target="_blank"
                rel="noreferrer"
              >
                {LINK_LABELS[key]}
              </a>
            ))}
          </div>
        )}

        <Link to="/" className="project-back">
          ← All projects
        </Link>
      </footer>
    </main>
  );
}

export default ProjectDetail;