import { Link } from "react-router-dom";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-item">
      <div className="experience-meta">
        <span>{experience.period}</span>
        <span>{experience.type}</span>
      </div>

      <div className="experience-main">
        <h3>{experience.role}</h3>
        <p className="experience-company">{experience.company}</p>

        <p className="experience-description">
          {experience.description}
        </p>

        <ul className="experience-achievements">
          {experience.achievements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="experience-technologies">
          {experience.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {experience.projectId && (
          <Link
            to={`/project/${experience.projectId}`}
            className="experience-case-study"
          >
            View Case Study {"↗\uFE0E"}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;