import { burger } from "./tools/burger.js";
import { loadingLine } from "./tools/loadingLine.js";
const init = () => {
  burger();
  AOS.init();
  loadingLine();
};

init();
