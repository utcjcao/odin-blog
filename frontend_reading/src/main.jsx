import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// since this is for reading and commenting, the only page i need is individual blog pages and a home page.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
