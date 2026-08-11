import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const commands = [
  { label: "Home", to: "/", hint: "landing" },
  { label: "Work", to: "/work", hint: "experience + education" },
  { label: "Research", to: "/research", hint: "computational mechanics" },
  { label: "Build", to: "/build", hint: "projects" },
  { label: "Life", to: "/life", hint: "beyond work" },
  { label: "Contact", to: "/contact", hint: "get in touch" },
];

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  // Toggle with Cmd/Ctrl+K, close with Escape.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (to) => {
    navigate(to);
    setOpen(false);
    setQuery("");
  };

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    }
    if (e.key === "Enter" && filtered[selected]) {
      go(filtered[selected].to);
    }
  };

  if (!open) return null;

  return (
    <div className="cmdk-overlay" onClick={() => setOpen(false)}>
      <div className="cmdk-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cmdk-input-row">
          <span className="cmdk-prompt">$</span>
          <input
            autoFocus
            className="cmdk-input"
            placeholder="Jump to…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(0);
            }}
            onKeyDown={onInputKey}
          />
          <span className="cmdk-esc">ESC</span>
        </div>

        <div className="cmdk-list">
          {filtered.length === 0 && (
            <div className="cmdk-empty">No matches</div>
          )}
          {filtered.map((c, i) => (
            <button
              key={c.to}
              className={`cmdk-item ${i === selected ? "is-selected" : ""}`}
              onMouseEnter={() => setSelected(i)}
              onClick={() => go(c.to)}
            >
              <span className="cmdk-item-label">{c.label}</span>
              <span className="cmdk-item-hint">{c.hint}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;