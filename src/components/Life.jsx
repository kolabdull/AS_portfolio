import { life } from "../data/life";
import SocialIcon from "./SocialIcon";
import Guestbook from "./Guestbook";
import ReadingList from "./ReadingList";

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
        {/* Movement — wide, top */}
        <article className="life-card life-card--wide">
          <span className="life-label">{movement.label}</span>
          <p className="life-body">{movement.body}</p>

          <div className="life-goal">
            <div className="life-goal-top">
              <span>{movement.goalLabel}</span>
              <span className="life-goal-value">
                <strong>{movement.goalCurrent}</strong> / {movement.goalTarget} {movement.goalUnit}
              </span>
            </div>

            <div className="life-goal-track">
              {Array.from({ length: 20 }).map((_, i) => {
                const segmentFilled = (i + 1) <= Math.round(progress / 5);
                return (
                  <div
                    key={i}
                    className={`life-goal-seg ${segmentFilled ? "filled" : ""}`}
                  />
                );
              })}
            </div>

            <div className="life-goal-meta">
              <span>0 KM</span>
              <span>{progress}% COMPLETE</span>
              <span>{movement.goalTarget} KM</span>
            </div>
          </div>
        </article>

        {/* Listening + Writing side by side */}
        <article className="life-card">
          <span className="life-label">{listening.label}</span>
          <p className="life-body">{listening.body}</p>
          <span className="life-genre">{listening.genre}</span>
        </article>

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
                {link.name} {"↗\uFE0E"}
              </a>
            ))}
          </div>
        </article>

        {/* Reading list — full width, restyled */}
        <ReadingList />

        {/* Guestbook — pulled up, wide */}
        <Guestbook />

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
                <span className="life-social-icon">
                  <SocialIcon name={item.name} />
                </span>
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