import React from "react";
import { createRoot } from "react-dom/client";

import MacContainer from "./components/MacContainer.jsx";
import "./assets/css/index.css";
import "./assets/css/style.css";

function Embed() {
  return (
    <div style={{ width:"100vw", height:"100vh", background:"#000" }}>
      <MacContainer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Embed />);
