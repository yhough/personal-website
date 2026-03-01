import { useState, useEffect } from 'react'
import './App.css'

const TITLE = "hi! i'm yaelin hough :)"
const NAV_LINKS = ["about", "experience", "projects", "skills"]

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
    </div>
  );
}

export default App;
