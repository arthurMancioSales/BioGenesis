/**
 * @author {Thiago}
 */

import Home from "../pages/home.js";
import Page1 from "../pages/page1.js";
import Page2 from "../pages/page2.js";
import Page3 from "../pages/page3.js";
import homeUser from "../pages/homeUser.js";

export default function SPA() {
  return {
    "/": homeUser,
    "/page1": Page1,
    "/page2": Page2,
    "/page3": Page3,
    /* "/home": homeUser, */

    getPage: function (url) {
      if (url == "/index.html") {
        url = "/";
      }

      return this[url]();
    },

    redirect(url) {
      const page = this.getPage(url);
      window.history.pushState({}, "", url);
      root.innerHTML = "";
      root.appendChild(page);
    },
  };
}
