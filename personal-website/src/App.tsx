import FolderStack from './components/FolderStack'
import './App.css'


function App() {
  const folders = [
    { id: "about", color: "#ff8daa" },
    { id: "experience", color: "#fdaeae" },
    { id: "projects", color: "#f6e2b3" },
    { id: "skills", color: "#b49982" },
    { id: "contact", color: "#7e6651" }
  ];
  return (
    <div className="app-layout">
      <h1 className="app-title">hi! i'm yaelin hough :)</h1>
      <div className="app-folders">
        <FolderStack folders={folders} />
      </div>
    </div>
  );
}

export default App;