import { life } from "../data/life";

const statusMeta = {
  inProgress: { label: "In Progress", tag: "READING" },
  completed: { label: "Recently Finished", tag: "DONE" },
  queued: { label: "Queued", tag: "NEXT" },
};

function ReadingList() {
  const { reading } = life;
  if (!reading) return null;

  const sections = ["inProgress", "completed", "queued"]
    .filter((key) => reading[key]?.length > 0)
    .map((key) => ({ key, ...statusMeta[key], books: reading[key] }));

  if (sections.length === 0) return null;

  return (
    <article className="life-card life-card--wide">
      <span className="life-label">{reading.label}</span>
      <p className="life-body">{reading.body}</p>

      <div className="reading-manifest">
        {sections.map((s) => (
          <div key={s.key} className="reading-block">
            <div className="reading-block-head">
              <span className={`reading-tag reading-tag--${s.key}`}>
                {s.tag}
              </span>
              <span className="reading-block-label">{s.label}</span>
              <span className="reading-block-count">
                {String(s.books.length).padStart(2, "0")}
              </span>
            </div>

            <ul className="reading-books">
              {s.books.map((book, i) => (
                <li key={i}>
                  <span className="reading-book-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="reading-book-title">{book.title}</span>
                  <span className="reading-book-author">{book.author}</span>
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