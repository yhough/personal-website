import "../styles.css";

interface FolderType {
  id: string;
  color: string;
}

export default function FolderStack({ folders }: { folders: FolderType[] }) {
  return (
    <div className="folder-stack">
      {folders.map((folder) => (
        <div
          key={folder.id}
          className="folder-tab"
          data-tab={folder.id}
        >
          <div className="folder-tab-label">{folder.id}</div>
          <div className="folder-tab-content">
            <h2>{folder.id}</h2>
            <p>This is the {folder.id} content section.</p>
          </div>
        </div>
      ))}
    </div>
  );
}