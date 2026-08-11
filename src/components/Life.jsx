import { life } from "../data/life";
import SocialIcon from "./SocialIcon";

function Life() {
  const { intro, movement, listening, writing, social } = life;
  const progress = Math.min(
    100,
    Math.round((movement.goalCurrent / movement.goalTarget) * 100)
  );

  return (
    <section className="life-section" id="life">
      <div className="section-index">05 / life.os</div>

      <div className="life-header">
        <p className="section-eyebrow">Beyond Work</p>
        <h2>{intro}</h2>
      </div>

      <div className="life-grid">
        {/* Movement */}
        <article className="life-card life-card--wide">
          <span className="life-label">{movement.label}</span>
          <p className="life-body">{movement.body}</p>

          <div className="life-goal">
            <div className="life-goal-top">
              <span>{movement.goalLabel}</span>
              <span>
                {movement.goalCurrent} / {movement.goalTarget}{" "}
                {movement.goalUnit}
              </span>
            </div>
            <div className="life-goal-track">
              <div
                className="life-goal-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </article>

        {/* Listening */}
        <article className="life-card">
          <span className="life-label">{listening.label}</span>
          <p className="life-body">{listening.body}</p>
          <span className="life-genre">{listening.genre}</span>
        </article>

        {/* Writing */}
        <article className="life-card">
          <span className="life-label">{writing.label}</span>
          <p className="life-body">{writing.body}</p>
          <div className="life-links">
            {writing.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.name} ↗
              </a>
            ))}
          </div>
        </article>

        {/* Around the web */}
        <article className="life-card life-card--wide">
          <span className="life-label">Around the Web</span>
          <div className="life-social">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="life-social-item"
              >
                <span className="life-social-name">{item.name}</span>
                <span className="life-social-handle">{item.handle}</span>
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Life;