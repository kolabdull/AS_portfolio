const researchAreas = [
  {
    number: "01",
    title: "Computational Mechanics",
    description:
      "Exploring numerical methods for understanding complex engineering systems and structural behaviour.",
  },
  {
    number: "02",
    title: "Wave Propagation",
    description:
      "Investigating wave propagation in periodic structures using computational and numerical methods.",
  },
  {
    number: "03",
    title: "Metamaterials",
    description:
      "Studying engineered materials and periodic structures with unusual mechanical and wave-propagation properties.",
  },
  {
    number: "04",
    title: "Finite Element Methods",
    description:
      "Developing computational frameworks for modelling structural dynamics and engineering systems.",
  },
];

function Research() {
  return (
    <section id="research" className="research-section">
      <div className="section-header">
        <div className="section-index">02</div>

        <div>
          <p className="section-kicker">/ research.lab</p>
          <h2>Research</h2>
        </div>
      </div>

      <div className="research-intro">
        <p>
          My research sits at the intersection of engineering,
          computational modelling, and intelligent systems.
        </p>

        <p>
          I am interested in using computational methods to understand
          complex physical systems and develop new approaches to
          engineering problems.
        </p>
      </div>

      <div className="research-grid">
        {researchAreas.map((area) => (
          <article className="research-card" key={area.number}>
            <span>{area.number}</span>

            <h3>{area.title}</h3>

            <p>{area.description}</p>

            <div className="research-card-arrow">↗</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Research;