import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <div className="section-index">03</div>

        <div>
          <p className="section-kicker">/ build.archive</p>
          <h2>Selected Work</h2>
        </div>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
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

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="project-arrow">↗</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;