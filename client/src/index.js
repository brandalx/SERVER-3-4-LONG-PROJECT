import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/index.css";
import "./css/tools/burger.css";
import "./css/tools/tools.css";

// import { burger } from "./js/tools/burger";

// import "./js/tools/loadingLine";
// import { burger } from "./js/tools/burger";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
// burger();
