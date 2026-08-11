import { education } from "../data/education";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-index">
        02 / education.log
      </div>

      <div className="education-header">
        <p className="section-eyebrow">
          Academic Record
        </p>

        <h2>Education</h2>
      </div>

      <div className="education-main">
        <div className="education-intro">
          <div className="education-period">
            {education.period}
          </div>

          <h3>{education.institution}</h3>

          <p className="education-degree">
            {education.degree}
          </p>

          <span className="education-distinction">
            {education.distinction}
          </span>
        </div>

        <div className="education-focus">
          <p className="detail-label">
            Academic Focus
          </p>

          <div className="education-focus-list">
            {education.focus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="education-research">
        <div className="detail-label">
          Research
        </div>

        <div className="research-content">
          <h3>{education.research.title}</h3>

          <p>
            {education.research.description}
          </p>

          <div className="research-methods">
            {education.research.methods.map(
              (method) => (
                <span key={method}>
                  {method}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="education-recognition">
        <div className="detail-label">
          Recognition
        </div>

        <div className="recognition-list">
          {education.recognition.map(
            (item, index) => (
              <article
                className="recognition-item"
                key={item.title}
              >
                <span className="recognition-number">
                  0{index + 1}
                </span>

                <div>
                  <h3>{item.title}</h3>

                  <p>
                    {item.description}
                  </p>
                  {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="recognition-link"
                  >
                    Read {"↗\uFE0E"}
                  </a>
                )}
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Education;