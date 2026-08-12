import { useState } from "react";
import { guestbook } from "../data/guestbook";

function Guestbook() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch(guestbook.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ message }),
      });
      if (res.ok) {
        setStatus("sent");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <article className="life-card life-card--wide guestbook">
      <span className="life-label">{guestbook.label}</span>
      <p className="life-body">{guestbook.body}</p>

      <form onSubmit={handleSubmit} className="guestbook-form">
        <input
          type="text"
          className="guestbook-input"
          placeholder="Type something…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "sending"}
        />
        <button
          type="submit"
          className="guestbook-submit"
          disabled={status === "sending" || !message.trim()}
        >
          {status === "sending" ? "Sending…" : `Send ${"↗\uFE0E"}`}
        </button>
      </form>

      {status === "sent" && (
        <p className="guestbook-status guestbook-status--ok">
          Thanks — I'll see it.
        </p>
      )}
      {status === "error" && (
        <p className="guestbook-status guestbook-status--err">
          Didn't send. Try again, or email me instead.
        </p>
      )}
    </article>
  );
}

export default Guestbook;