import { useState, useEffect } from 'react'
import './App.css'

const TITLE = "hi! i'm yaelin hough :)"
const NAV_LINKS = ["about", "experience", "projects", "skills"]

const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Java",       img: "/java_logo.png" },
      { name: "OCaml",      img: "/ocaml_logo.png" },
      { name: "C#",         img: "/c_sharp_logo.png" },
      { name: "TypeScript", icon: "devicon-typescript-original colored" },
      { name: "JavaScript", img: "/javascript_logo.png" },
      { name: "Python",     img: "/python_logo.png" },
      { name: "Swift",      img: "/swift_logo.png" },
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "Unity",     img: "/unity_logo.png" },
      { name: "React",     icon: "devicon-react-original colored" },
      { name: "SwiftUI",   img: "/swiftui_logo.png" },
      { name: "Node.js",   img: "/node_js.png" },
      { name: "Bootstrap", img: "/bootstrap_logo.png" },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Firebase", img: "/firebase_logo.png" },
      { name: "Git",      img: "/git_logo.png" },
      { name: "HTML",     img: "/html_logo.png" },
      { name: "CSS",      img: "/css_logo.png" },
      { name: "Figma",    img: "/figma_logo.png" },
    ]
  }
]

const PROJECTS = [
  {
    title: "NightLight",
    link: null,
    date: "Mar 2026",
    subtitle: "Safety iOS App",
    status: "In Progress",
    description: "Developing an iOS app that acts as a behavioral and safety layer for nights out.",
    tech: [{ label: "Building with", stack: "Swift, SwiftUI" }]
  },
  {
    title: "InstaCal",
    link: "https://github.com/GabrielCastilloH/InstaCal",
    date: "Feb 2026",
    subtitle: "AI-Powered Google Calendar Extension",
    status: null,
    description: "Built a production-ready Chrome extension that converts natural language into structured Google Calendar events. Developed a secure server-side LLM pipeline to prevent client-side API exposure, implemented OAuth 2.0 authentication, and integrated the Google Calendar REST API to create a seamless end-to-end event creation workflow.",
    tech: [
      { label: "Frontend", stack: "React + TypeScript" },
      { label: "Build Tool", stack: "Vite" },
      { label: "Backend", stack: "Firebase Cloud Functions" }
    ],
    image: "/instacal_screenshot.png"
  },
  {
    title: "CamlChess",
    link: "https://github.com/ethanzhang145/ocamlchess",
    date: "Dec 2025",
    subtitle: "Fully Playable Chess Engine",
    status: null,
    description: "Collaborated in a 3-person team to design and implement a 1,700+ line chess application from the ground up. Engineered a complete rules engine supporting legal move generation, castling, en passant, promotion, check/checkmate detection, and game termination logic, paired with an interactive graphical interface.",
    tech: [{ label: "Built with", stack: "OCaml, Bogue" }],
    video: "https://www.youtube.com/embed/DCS8vwwjEFo"
  },
  {
    title: "Architectural Model Reviewer",
    link: null,
    date: "Sept 2025 – Dec 2025",
    subtitle: "Multi-User VR Collaboration Tool",
    status: null,
    description: "Collaborated on a multi-user VR application that enables architects, designers, and clients to collaboratively review architectural models in real time. Features include live annotation tools (drawing + typed notes), voice communication, laser pointer tracking, adjustable model scaling/zoom, a mini-map for spatial awareness, and dynamic lighting controls for day/night simulation.",
    tech: [{ label: "Built with", stack: "Unity, C#, XR Interaction Toolkit" }]
  }
]

const EXPERIENCES = [
  {
    org: "Cornell WebDev",
    period: "Oct. 2025 – Present",
    role: "Frontend Developer",
    logo: "/webdev_logo.png",
    description: "Designing and developing custom websites for Cornell organizations. Creating responsive UI mockups in Figma and implementing accessible, maintainable frontend components using HTML, CSS, and JavaScript.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Figma", "Accessibility (WCAG)", "UI/UX", "Frontend Architecture", "Node"]
  },
  {
    org: "Cornell XR",
    period: "Sept. 2025 – Present",
    role: "Software Subteam Member",
    logo: "/CUXR_logo.png",
    description: "Developed multi-user VR features for architectural model review, including annotations, lighting controls, scaling tools, and real-time communication systems. Currently building custom Unity environments to integrate with an external olfactory device, expanding immersion beyond visual and spatial interaction. Across all features, we prioritize accessibility, usability, and inclusive design to ensure collaborative XR tools are intuitive and widely usable.",
    skills: ["Unity", "C#", "XR Interaction Toolkit", "VR UI/UX Design", "Accessibility Design"]
  },
  {
    org: "Fendodo",
    period: "June 2024 – Oct. 2025",
    role: "Private Tutor (SAT, SSAT, AP Literature)",
    logo: "/fendodo_logo.svg",
    description: "Provided individualized instruction in standardized test preparation and AP English Literature, focusing on analytical writing, reading comprehension, and test strategy. Helped students build confidence, structure arguments clearly, and improve measurable score outcomes.",
    skills: ["Curriculum Design", "Communication", "Critical Thinking", "Standardized Test Strategy", "Mentorship"]
  }
]

function App() {
  const [displayed, setDisplayed] = useState('')
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(TITLE.slice(0, i))
      if (i >= TITLE.length) clearInterval(interval)
    }, 75)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setShowArrow(window.scrollY < 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-layout">
      <nav className="app-nav">
        <div className="app-nav-icons">
          <a href="mailto:yh2299@cornell.edu" className="app-nav-icon" aria-label="Email">
            <svg viewBox="0 0 24 24" width="20" height="20"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/yaelin-hough" target="_blank" rel="noreferrer" className="app-nav-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/yhough" target="_blank" rel="noreferrer" className="app-nav-icon" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
        <div className="app-nav-links">
          {NAV_LINKS.map(link => (
            <a key={link} className="app-nav-link" href={`#${link}`}>{link}</a>
          ))}
        </div>
      </nav>
      <section className="home-section">
        <h1 className="app-title">
          {displayed}
        </h1>
        <p className="app-subtitle">CS & Philosophy Major @ Cornell</p>
        <div className="app-hero-wrapper">
          <img src="/calvin4.png" className="app-hero-image" alt="Calvin and Hobbes comic" />
        </div>
      </section>

      <div className={`scroll-arrow-container${showArrow ? '' : ' hidden'}`}>
        <div className="scroll-arrow" />
      </div>

      <section id="about" className="about-section">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-headshot-wrapper">
            <img src="/headshot.png" className="about-headshot" alt="Yaelin Hough" />
          </div>
          <div className="about-text">
            <p>Hello! I'm Yaelin, a Computer Science and Philosophy double major at Cornell University.</p>
            <p>I love to create — whether that's building products that help people or writing stories and songs.
              I love to learn new technologies, working across full-stack web, AI-powered tools, IOS apps, and VR systems. I'm especially interested in intelligent systems and human-centered design, always trying to emphasize clean architecture, user experience, and real-world impact in everything I build.</p>
            <p>When I'm not coding, I'm probably playing the guitar with my band, writing, or listening to music.</p>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-cards">
          {EXPERIENCES.map((exp) => (
            <div key={exp.org} className="experience-card">
              <div className="experience-card-header">
                <div className="experience-card-header-left">
                  <img src={exp.logo} className="experience-card-logo" alt={`${exp.org} logo`} />
                  <span className="experience-card-org">{exp.org}</span>
                </div>
                <span className="experience-card-period">{exp.period}</span>
              </div>
              <div className="experience-card-role">{exp.role}</div>
              <p className="experience-card-desc">{exp.description}</p>
              <div className="experience-card-skills">
                {exp.skills.map(skill => (
                  <span key={skill} className="experience-card-skill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-scroll">
          {PROJECTS.map((proj) => (
            <div key={proj.title} className={`project-card${proj.video || proj.image ? ' project-card--wide' : ''}`}>
              <div className="project-card-top">
                <div className="project-card-header">
                  {proj.link
                    ? <a href={proj.link} target="_blank" rel="noreferrer" className="project-card-title">{proj.title}</a>
                    : <span className="project-card-title">{proj.title}</span>
                  }
                  {proj.status && <span className="project-card-status">{proj.status}</span>}
                </div>
                <div className="project-card-date">{proj.date}</div>
                <div className="project-card-subtitle">{proj.subtitle}</div>
              </div>
              <p className="project-card-desc">{proj.description}</p>
              {proj.image && (
                <img src={proj.image} className="project-card-image" alt={`${proj.title} screenshot`} />
              )}
              {proj.video && (
                <div className="project-card-video">
                  <iframe
                    src={proj.video}
                    title={`${proj.title} demo`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              )}
              <div className="project-card-tech">
                {proj.tech.map(t => (
                  <div key={t.label} className="project-card-tech-row">
                    <span className="project-card-tech-label">{t.label}:</span>
                    <span className="project-card-tech-stack">{t.stack}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-categories">
          {SKILLS.map(group => (
            <div key={group.category} className="skills-category">
              <h3 className="skills-category-title">{group.category}</h3>
              <div className="skills-grid">
                {group.items.map(skill => (
                  <div key={skill.name} className="skill-item">
                    {skill.img
                      ? <img src={skill.img} className="skill-icon-img" alt={skill.name} />
                      : <i className={`${skill.icon} skill-icon`} />
                    }
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
