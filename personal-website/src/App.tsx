import { useState, useEffect } from 'react'
import './App.css'

const TITLE = "hi! i'm yaelin hough :)"
const NAV_LINKS = ["about", "experience", "projects", "contact"]

function App() {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(TITLE.slice(0, i))
      if (i >= TITLE.length) clearInterval(interval)
    }, 75)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app-layout">
      <nav className="app-nav">
        {NAV_LINKS.map(link => (
          <a key={link} className="app-nav-link" href={`#${link}`}>{link}</a>
        ))}
      </nav>
      <h1 className="app-title">
        {displayed}
      </h1>
      <div className="app-hero-wrapper">
        <img src="/calvin4.png" className="app-hero-image" alt="Calvin and Hobbes comic" />
      </div>
    </div>
  );
}

export default App;
