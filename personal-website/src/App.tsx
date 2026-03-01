import { useState, useEffect } from 'react'
import FolderStack from './components/FolderStack'
import './App.css'

const TITLE = "hi! i'm yaelin hough :)"

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

  const folders = [
    { id: "about", color: "#ff8daa" },
    { id: "experience", color: "#fdaeae" },
    { id: "projects", color: "#f6e2b3" },
    { id: "skills", color: "#b49982" },
    { id: "contact", color: "#7e6651" }
  ];
  return (
    <div className="app-layout">
      <nav className="app-nav">
        {folders.map(f => (
          <a key={f.id} className="app-nav-link" href={`#${f.id}`}>{f.id}</a>
        ))}
      </nav>
      <h1 className="app-title">
        {displayed}
      </h1>
      <div className="app-folders">
        <FolderStack folders={folders} />
      </div>
    </div>
  );
}

export default App;