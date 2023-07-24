import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>
);
