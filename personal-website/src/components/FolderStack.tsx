import { useState } from "react";
import { motion } from "framer-motion";

interface FolderType {
  id: string;
  color: string;
}

export default function FolderStack({ folders }: { folders: FolderType[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        height: "400px",
        minHeight: "400px",
        width: "100%",
        position: "relative",
        overflow: "visible",
        gap: "8px"
      }}
    >
      {folders.map((folder) => {
        const isActive = active === folder.id;

        return (
          <motion.div
            key={folder.id}
            layout
            onClick={() => setActive(folder.id)}
            style={{
              background: folder.color,
              width: isActive ? "70%" : "120px",
              minWidth: isActive ? "300px" : "120px",
              flexShrink: 0,
              height: isActive ? "350px" : "300px",
              borderRadius: "4px 4px 0 0",
              cursor: "pointer",
              position: "relative",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Tab */}
            <div
              style={{
                position: "absolute",
                top: "-30px",
                left: "20px",
                background: folder.color,
                color: "#333",
                padding: "6px 14px",
                borderRadius: "4px 4px 0 0",
                fontSize: "14px",
                fontWeight: 600
              }}
            >
              {folder.id}
            </div>

            {/* Expanded Content */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  padding: "30px",
                  color: "#333"
                }}
              >
                <h2>{folder.id}</h2>
                <p>
                  This is the {folder.id} content section.
                </p>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}