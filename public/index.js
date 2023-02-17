/**
 * @author {Thiago}
 */

import SPA from "./modules/spa.js";

const root = document.querySelector("#root");

const spa = SPA();

root.appendChild(spa.getPage(window.location.pathname));
