/**
 * @author {Thiago}
 */

import Router from "../src/services/Router.js";

const root = document.querySelector("#root");

const router = Router();

root.appendChild(router.getPage(window.location.pathname));

root.addEventListener("onstatechange", (e) => {
  const page = router.getPage(e.detail.url);
  window.history.pushState({}, "", e.detail.url);
  root.innerHTML = "";
  root.appendChild(page);
});

window.onpopstate = () => {
  const page = router.getPage(window.location.pathname);
  root.innerHTML = "";
  root.appendChild(page);
};
