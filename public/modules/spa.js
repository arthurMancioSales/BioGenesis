
// @author {Thiago}
// @coauthor {Arthur}
// @coauthor {Davi}

import Page2 from "../pages/page2.js";
import Page3 from "../pages/page3.js";
import bookshelf from "../pages/bookShelf.js";
import homeUser from "../pages/homeUser.js";

export default function SPA() {
  return {
    "/": homeUser,
    "/bookshelves": bookshelf,
    "/page2": Page2,
    "/page3": Page3,

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
