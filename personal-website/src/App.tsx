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
    <div style={{ padding: "80px", width: "100%", boxSizing: "border-box" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        hi! i'm yaelin hough :)
      </h1>
      <div style={{ width: "100%", marginTop: "20px" }}>
        <FolderStack folders={folders} />
      </div>
    </div>
  );
}

export default App;