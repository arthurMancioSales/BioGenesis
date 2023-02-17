
// @author {Thiago}
// @coauthor {Arthur}


import Home from "../pages/home.js";
import Page1 from "../pages/page1.js";
import Page2 from "../pages/page2.js";
import Page3 from "../pages/page3.js";
import bookshelf from "../pages/bookShelf.js";

export default function SPA() {
  return {
    "/": Home,
    "/bookshelves": bookshelf,
    "/page2": Page2,
    "/page3": Page3,

    getPage: function (url) {
      console.log(url);
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
