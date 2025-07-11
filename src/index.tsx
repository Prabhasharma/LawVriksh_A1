import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContentCreatorS } from "./screens/ContentCreatorS";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ContentCreatorS />
  </StrictMode>,
);
