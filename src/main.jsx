import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//we are adding it above the index.css file because we can override the bootstrap styles with our application styles...
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
