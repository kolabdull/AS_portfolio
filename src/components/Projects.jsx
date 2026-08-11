import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section className="projects-section" id="projects">
      <div className="section-index">04 / selected.work</div>

      <div className="projects-header">
        <div>
          <p className="section-eyebrow">Selected Work</p>
          <h2>
            Projects, research,
            <br />
            and experiments.
          </h2>
        </div>

        <p className="projects-intro">
          A collection of work spanning engineering, computational
          research, data, software, automation, and entrepreneurship.
        </p>
      </div>

      <div className="projects-list">
        {featuredProjects.map((project, index) => (
          <Link
            to={`/project/${project.id}`}
            className="project-item"
            key={project.id}
          >
            <div className="project-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="project-view">
                <span className="project-view-label">View Case Study</span>
                <span className="project-arrow">↗</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;