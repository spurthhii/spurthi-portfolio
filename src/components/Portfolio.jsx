import React from "react";

export default function Portfolio() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navbar">
        <h2 className="logo">Spurthi H V</h2>
        <nav>
          <a href="#intro">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION (REFERENCE STYLE) */}
      {/* HERO SECTION */}
<section id="intro" className="hero">
  {/* LEFT TEXT */}
  <div className="hero-text">
    <h1>
      Hello, I'm <br />
      <span>Spurthi H V</span>
    </h1>

    <h3>Business Development | Analytics | Tech Strategy</h3>

    <p>
      Currently pursuing BTech in Cybersecurity at Ramaiah Institute of
      Technology. I bring a unique blend of business strategy, analytics,
      AI-driven research, and cybersecurity awareness.
    </p>

    <p>
      I excel at translating technical concepts into business value, building
      stakeholder relationships, and driving growth through structured
      problem-solving.
    </p>

    <div className="buttons">
      <a
        href="https://www.linkedin.com/in/spurthi-venkatesh-264a88320/"
        target="_blank"
      >
        LinkedIn
      </a>
      <a href="https://github.com/spurthhii" target="_blank">
        GitHub
      </a>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="hero-photo">
    <img src="/profile.jpeg" alt="Spurthi" />
  </div>
</section>


      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <p className="subtitle">
          A blend of business development, analytics, AI research, and strong
          communication.
        </p>

        <div className="grid">
          {[
            {
              title: "Market & Feasibility Analysis",
              desc: "Evaluating opportunities and assessing business viability.",
            },
            {
              title: "Business Analytics & Insights",
              desc: "Generating data-driven insights for strategic decisions.",
            },
            {
              title: "AI-Driven Document Analysis",
              desc: "Experience with OCR, NER, and Retrieval-Augmented Generation.",
            },
            {
              title: "Cloud Computing Fundamentals",
              desc: "AWS EC2 basics with deployment and cost awareness.",
            },
            {
              title: "Cybersecurity Risk Assessment",
              desc: "Understanding vulnerabilities, threats, and secure design.",
            },
            {
              title: "Product Requirement Definition",
              desc: "Supporting feature prioritization and roadmap planning.",
            },
            {
              title: "Stakeholder Communication",
              desc: "Translating technical ideas into business-friendly language.",
            },
            {
              title: "Strategic Problem Solving",
              desc: "Research-oriented thinking with ownership and initiative.",
            },
            {
              title: "Presentation & Storytelling",
              desc: "Delivering ideas clearly through business-focused narratives.",
            },
          ].map((skill, idx) => (
            <div key={idx} className="card">
              <h4>{skill.title}</h4>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p className="subtitle">
          Projects that demonstrate my ability to connect technology with
          business outcomes.
        </p>

        <div className="grid">
          <div className="card">
            <h4>📊 Business Analytics & Feasibility Projects</h4>
            <p>
              Conducted analytics-based feasibility assessments to identify
              growth opportunities, generate insights, and support business
              decision-making through structured evaluation.
            </p>
          </div>

          <div className="card">
            <h4>🤖 AI Document Intelligence</h4>
            <p>
              Built AI-driven document understanding solutions using OCR,
              Named Entity Recognition, and RAG frameworks to automate knowledge
              extraction and improve information accessibility.
            </p>
          </div>

          <div className="card">
            <h4>🔐 Cybersecurity Risk & Impact Analysis</h4>
            <p>
              Explored vulnerability assessment, threat modeling, and secure
              system design awareness to strengthen business resilience and
              improve trust in digital ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p className="subtitle">
          Let’s connect and explore business development opportunities.
        </p>
        <p>Email: hvspurthi@gmail.com</p>
        <p>Phone no: 6379091775</p>
      </section>

      {/* FOOTER */}
      <footer>
        © {new Date().getFullYear()} Spurthi H V | Business Development Portfolio
      </footer>
    </div>
  );
}