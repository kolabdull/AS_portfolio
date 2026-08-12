import { life } from "../data/life";

function ReadingList() {
  const { reading } = life;
  if (!reading) return null;

  const sections = [
    { key: "inProgress", label: "In Progress" },
    { key: "completed", label: "Recently Finished" },
    { key: "queued", label: "Queued" },
  ].filter((s) => reading[s.key]?.length > 0);

  if (sections.length === 0) return null;

  return (
    <article className="life-card life-card--wide">
      <span className="life-label">{reading.label}</span>
      <p className="life-body">{reading.body}</p>

      <div className="reading-list">
        {sections.map((s) => (
          <div key={s.key} className="reading-section">
            <span className="reading-section-label">{s.label}</span>
            <ul>
              {reading[s.key].map((book, i) => (
                <li key={i}>
                  <em>{book.title}</em> — {book.author}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

export default ReadingList;