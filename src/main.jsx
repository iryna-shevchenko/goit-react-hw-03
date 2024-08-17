import React from "react";
import ReactDOM from "react-dom/client";
// Import modern-normalize
import "modern-normalize";
import App from "./components/App/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
