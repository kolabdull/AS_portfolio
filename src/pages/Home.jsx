import { Link } from "react-router-dom";

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
        <p className="home-kicker">
          <span className="terminal-prompt">$</span> whoami
        </p>

        <h1>
          Abdul-Samad
          <br />
          <span>Kolawole</span>
        </h1>

        <p className="home-positioning">
          Engineer working at the intersection of computational mechanics,
          data, software, automation, and research.
        </p>

        <div className="home-actions">
          <Link to="/build" className="primary-action">
            View Work <span>↗</span>
          </Link>
          <Link to="/contact" className="secondary-action">
            Get in Touch <span>↗</span>
          </Link>
        </div>
      </div>

      <div className="home-gateways">
        {gateways.map((g) => (
          <Link to={g.to} className="home-gateway" key={g.num}>
            <span className="home-gateway-num">{g.num}</span>
            <span className="home-gateway-label">{g.label}</span>
            <span className="home-gateway-line">{g.line}</span>
            <span className="home-gateway-arrow">↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;