/**
 * @author {Thiago}
 */

import SPA from "../src/services/spa.js";

const root = document.querySelector("#root");

const spa = SPA();

root.appendChild(spa.getPage(window.location.pathname));

root.addEventListener("onstatechange", (e) => {
  const page = spa.getPage(e.detail.url);
  window.history.pushState({}, "", e.detail.url);
  root.innerHTML = "";
  root.appendChild(page);
});

window.onpopstate = () => {
  const page = spa.getPage(window.location.pathname);
  root.innerHTML = "";
  root.appendChild(page);
};
