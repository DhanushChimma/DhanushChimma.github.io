import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Mail, Phone, Code2, Layers3, Sparkles, MonitorSmartphone, ExternalLink } from "lucide-react";
import "./styles.css";

const skills = [
  ["Frontend", "React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  ["UI & Styling", "Material UI", "Tailwind CSS", "Bootstrap", "React Hooks", "Component Libraries"],
  ["AI / LLM", "Generative AI", "LLM APIs", "Prompt Engineering", "RAG", "AI Chatbots", "AI Search", "Embeddings", "Conversational UI"],
  ["State & APIs", "Redux", "Redux Toolkit", "Context API", "REST APIs", "JSON", "Axios", "API Integration"],
  ["Testing & Tools", "Jest", "React Testing Library", "Cypress", "Git", "GitHub", "VS Code", "npm", "Webpack"],
  ["Cloud & Delivery", "AWS", "Docker", "CI/CD", "GitHub Actions", "Jenkins", "Agile", "Scrum", "SDLC"]
];

const experience = [
  {
    role: "Frontend Developer / AI Engineer",
    company: "CVS Health",
    period: "Aug 2025 – Present",
    points: [
      "Develop responsive enterprise web applications using React.js, TypeScript, Next.js, HTML5 and CSS3.",
      "Integrate Generative AI and LLM APIs into conversational interfaces, intelligent search and AI-assisted workflows.",
      "Build reusable UI components and improve performance through React Hooks, Redux Toolkit, lazy loading and code splitting.",
      "Collaborate with backend, AI/ML, UX and product teams in Agile delivery environments."
    ]
  },
  {
    role: "Senior Frontend Developer",
    company: "BNY Mellon",
    period: "Jan 2024 – Jul 2025",
    points: [
      "Built scalable financial web applications using React.js, TypeScript, JavaScript, Next.js and Redux.",
      "Integrated LLM-powered capabilities such as AI assistants, natural-language search and document summarization through REST APIs.",
      "Developed reusable components, API integrations, form workflows, data visualizations and responsive interfaces.",
      "Implemented automated testing with Jest, React Testing Library and Cypress."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Arkin Systems",
    period: "Jan 2021 – Dec 2022",
    points: [
      "Worked with HTML, JavaScript and CSS to support web-based reporting and user-facing interfaces.",
      "Used Jenkins to automate build and test workflows, run tests and generate daily test reports."
    ]
  }
];


const projects = [
  {
    icon: <MonitorSmartphone size={20} />,
    type: "PORTFOLIO DEMO",
    title: "Responsive Product Dashboard",
    url: "https://dhanushchimma.github.io/responsive-product-dashboard/",
    description: "A demonstration dashboard concept featuring responsive layouts, reusable UI patterns, data cards, filtering and accessible navigation.",
    stack: ["React", "TypeScript", "CSS", "Responsive UI"],
    note: "Independent demonstration project"
  },
  {
    icon: <Layers3 size={20} />,
    type: "PORTFOLIO DEMO",
    title: "Component Library Showcase",
    url: "https://dhanushchimma.github.io/component-library-showcase/",
    description: "A small UI showcase demonstrating reusable buttons, form controls, cards, navigation elements and consistent design tokens.",
    stack: ["React", "Material UI concepts", "CSS", "Component Design"],
    note: "Independent demonstration project"
  },
  {
    icon: <Sparkles size={20} />,
    type: "PORTFOLIO DEMO",
    title: "AI Assistant Interface",
    url: "https://dhanushchimma.github.io/ai-assistant-interface/",
    description: "A frontend concept for a conversational assistant, with message states, prompt suggestions and a clean chat experience.",
    stack: ["React", "TypeScript", "REST API concepts", "Conversational UI"],
    note: "Independent demonstration project"
  }
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home">DC<span>.</span></a>
        <nav>
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#projects">Projects</a>
        </nav>
        <a className="nav-cta" href="mailto:brodhanush50@gmail.com">Contact <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> FRONTEND DEVELOPER · 4+ YEARS</div>
            <h1>Building thoughtful<br /><em>digital experiences.</em></h1>
            <p className="hero-text">I'm Dhanush Chimma, a frontend developer focused on responsive web applications, reusable interfaces and engaging user experiences with React, Next.js and TypeScript.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
              <a className="button secondary" href="mailto:brodhanush50@gmail.com">Get in touch <Mail size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><Code2 size={15} /> React · Next.js · TypeScript</span>
              <span><Github size={15} /> github.com/DhanushChimma</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract frontend development illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="code-window">
              <div className="window-bar"><i></i><i></i><i></i><span>App.tsx</span></div>
              <div className="code-lines">
                <p><b>01</b> <span className="pink">const</span> developer = {'{'}</p>
                <p><b>02</b> &nbsp; name: <span className="green">"Dhanush"</span>,</p>
                <p><b>03</b> &nbsp; role: <span className="green">"Frontend Dev"</span>,</p>
                <p><b>04</b> &nbsp; stack: [</p>
                <p><b>05</b> &nbsp;&nbsp; <span className="yellow">"React"</span>, <span className="yellow">"Next.js"</span>,</p>
                <p><b>06</b> &nbsp;&nbsp; <span className="yellow">"TypeScript"</span></p>
                <p><b>07</b> &nbsp; ]</p>
                <p><b>08</b> {'}'}</p>
                <p><b>09</b> <span className="pink">export default</span> developer;</p>
              </div>
              <div className="window-footer"><span className="pulse"></span> Ready to build</div>
            </div>
            <div className="floating-tag tag-react">⚛ React.js</div>
            <div className="floating-tag tag-ts">TS TypeScript</div>
          </div>
        </section>

        <section className="intro-strip">
          <span>FOCUSED ON</span><strong>Responsive UI</strong><b>✳</b><strong>Reusable Components</strong><b>✳</b><strong>Performance</strong><b>✳</b><strong>AI-powered Experiences</strong>
        </section>

        <section className="section about-section" id="about">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="about-grid">
            <h2>Code that feels<br /><em>as good as it works.</em></h2>
            <div className="about-copy">
              <p>I'm a Frontend Developer with 4+ years of experience building responsive, scalable and high-performance web applications using React.js, TypeScript, JavaScript and Next.js. I enjoy turning complex requirements into clear, accessible and intuitive interfaces.</p>
              <p>My experience includes enterprise healthcare and financial applications, Generative AI and LLM integrations, prompt engineering, AI-powered search, RAG-based experiences, reusable components and automated testing. I work closely with backend, product, UX/UI and AI teams in Agile environments.</p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-kicker">02 / TOOLKIT</div>
          <div className="section-heading"><h2>Tools of the <em>trade.</em></h2><p>A practical toolkit for building and shipping modern frontend experiences.</p></div>
          <div className="skills-grid">
            {skills.map(([title, ...items]) => <article className="skill-card" key={title}><h3>{title}</h3><div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-kicker">03 / EXPERIENCE</div>
          <div className="section-heading"><h2>Where I've <em>contributed.</em></h2><p>Professional experience as listed in my resume.</p></div>
          <div className="timeline">
            {experience.map((job, i) => <article className="timeline-item" key={job.company}>
              <div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div>
              <div className="job-main"><div className="job-top"><div><h3>{job.role}</h3><div className="company">{job.company}</div></div><span className="period">{job.period}</span></div>
                <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>)}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-kicker">04 / SELECTED WORK</div>
          <div className="section-heading"><h2>Concepts & <em>showcases.</em></h2><p>Independent portfolio demonstrations that illustrate frontend skills. These are not presented as employer projects.</p></div>

<div className="projects-grid">
  {projects.map(project => (
    <a
      className="project-card"
      key={project.title}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        color: "inherit",
        textDecoration: "none",
        cursor: "pointer"
      }}
    >
      <div className="project-top">
        <div className="project-icon">{project.icon}</div>
        <span>{project.type}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="chips">
        {project.stack.map(s => <span key={s}>{s}</span>)}
      </div>

      <div className="project-note">
        {project.note} · Click to explore ↗
      </div>
    </a>
  ))}
</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-kicker">05 / LET'S CONNECT</div>
          <h2>Have a good project<br />in <em>mind?</em></h2>
          <p>I'm happy to discuss frontend development opportunities and share more about my experience.</p>
          <div className="contact-links">
            <a href="mailto:brodhanush50@gmail.com"><Mail size={17} /> brodhanush50@gmail.com</a>
            <a href="tel:+12168565267"><Phone size={17} /> +1 216-856-5267</a>
            <a href="https://github.com/DhanushChimma" target="_blank" rel="noreferrer"><Github size={17} /> DhanushChimma <ExternalLink size={14} /></a>
          </div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Dhanush Chimma</span><span>Designed & built with React</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
