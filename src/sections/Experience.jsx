import { experiences } from "../data/experience";

function Experience() {
  return (
    <section id="work" className="experience-section">
      <div className="section-header">
        <div className="section-index">01</div>

        <div>
          <p className="section-kicker">/ work.log</p>
          <h2>Experience</h2>
        </div>
      </div>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article
            className="experience-item"
            key={`${experience.company}-${index}`}
          >
            <div className="experience-meta">
              <span>{experience.period}</span>
              <span>{experience.type}</span>
            </div>

            <div className="experience-main">
              <h3>{experience.role}</h3>

              <p className="experience-company">
                {experience.company}
              </p>

              <p className="experience-description">
                {experience.description}
              </p>

              <ul className="experience-achievements">
                {experience.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>

              <div className="experience-technologies">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;