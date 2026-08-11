import { Link } from "react-router-dom";
import Magnetic  from "../components/Magnetic";

const gateways = [
  {
    num: "01",
    label: "Work",
    to: "/work",
    line: "Professional experience across AI, automation, and financial systems — plus academic record.",
  },
  {
    num: "02",
    label: "Research",
    to: "/research",
    line: "Computational mechanics, finite element methods, and wave propagation in periodic structures.",
  },
  {
    num: "03",
    label: "Build",
    to: "/build",
    line: "Software, data, and entrepreneurial projects — from EdTech to intelligent automation.",
  },
];

function Home() {
  return (
    <section className="home">
      <div className="home-hero">
        <div className="home-hero-content">
          <p className="home-kicker">
            <span className="terminal-prompt">$</span> whoami
          </p>

          <h1>
            Abdul-Samad
            <br />
            <span>Kolawole</span>
          </h1>

          <p className="home-positioning">
            Software engineer with a research interest in computational mechanics.
          </p>

          <div className="home-actions">
            <Link to="/build" className="primary-action">
              View Work <span>{"↗\uFE0E"}</span>
            </Link>
            <Link to="/contact" className="secondary-action">
              Get in Touch <span>{"↗\uFE0E"}</span>
            </Link>
          </div>
        </div>

        <div className="home-hero-photo">
          <div className="photo-frame">
            <span className="photo-tag photo-tag-top">
              <span>ID_001</span>
              <span>KOLAWOLE, A-S</span>
            </span>

            <div className="photo-inner">
              <img src="/portrait.jpg" alt="Abdul-Samad Kolawole" />
            </div>

            <span className="photo-tag photo-tag-bottom">
              <span>LAGOS, NIGERIA</span>
              <span>2026</span>
            </span>
          </div>
        </div>
      </div>

      <div className="home-gateways">
        {gateways.map((g) => (
          <Magnetic key={g.num} strength={18}>
            <Link to={g.to} className="home-gateway" key={g.num}>
              <span className="home-gateway-num">{g.num}</span>
              <span className="home-gateway-label">{g.label}</span>
              <span className="home-gateway-line">{g.line}</span>
              <span className="home-gateway-arrow">{"↗\uFE0E"}</span>
            </Link>
          </Magnetic>
        ))}
      </div>
    </section>
  );
}

export default Home;