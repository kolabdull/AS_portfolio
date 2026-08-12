import { contact } from "../data/contact";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-index">06 / contact.log</div>

      <div className="contact-inner">
        <h2>{contact.heading}</h2>
        <p className="contact-intro">{contact.intro}</p>

        <div className="contact-channels">
          {contact.channels.map((c) => (
            <a
              key={c.label}
              href={c.url}
              target={c.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="contact-channel"
            >
              <span className="contact-channel-label">{c.label}</span>
              <span className="contact-channel-value">{c.value}</span>
              <span className="contact-channel-arrow">{"↗\uFE0E"}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;