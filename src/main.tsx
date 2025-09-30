import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("principal")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
