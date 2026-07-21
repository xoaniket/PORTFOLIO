import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./index.css";
import { Cursor, CursorProvider } from "@phazr/custom-cursor";

createRoot(document.getElementById("root")).render(
  <CursorProvider>
    <App />
    <Cursor />
  </CursorProvider>,
);
