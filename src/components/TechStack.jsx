import { useState } from "react";
import { techStack } from "../data/techStack";

function TechStack() {
  const [activeStack, setActiveStack] = useState(
    techStack[0].id
  );

  const activeCategory = techStack.find(
    (category) =>
      category.id === activeStack
  );

  return (
    <section
      className="tech-stack-section"
      id="stack"
    >
      <div className="section-index">
        03 / stack.log
      </div>

      <div className="tech-stack-header">
        <p className="section-eyebrow">
          How I Build
        </p>

        <h2>
          A toolkit built across
          <br />
          disciplines.
        </h2>

        <p className="tech-stack-intro">
          My work sits at the intersection of
          engineering, computation, data,
          software, and automation.
        </p>
      </div>

      <div className="tech-stack-interface">
        <div className="tech-stack-navigation">
          {techStack.map((category) => (
            <button
              key={category.id}
              className={
                activeStack === category.id
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveStack(category.id)
              }
            >
              <span>{category.number}</span>

              <span>{category.title}</span>
            </button>
          ))}
        </div>

        <div className="tech-stack-display">
          <div className="tech-stack-display-top">
            <span>
              {activeCategory.number}
            </span>

            <span>
              {activeCategory.title}
            </span>
          </div>

          <p className="tech-stack-description">
            {activeCategory.description}
          </p>

          <div className="tech-stack-skills">
            {activeCategory.skills.map(
              (skill, index) => (
                <div
                  className="tech-skill"
                  key={skill}
                >
                  <span>
                    0{index + 1}
                  </span>

                  <strong>{skill}</strong>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;