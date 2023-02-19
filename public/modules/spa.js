// @author {Thiago}
// @coauthor {Arthur}

// import Home from "../pages/homeUser.js";
import bookshelf from "../pages/bookShelf.js";
import homeUser from "../pages/homeUser.js";
import login from "../pages/login.js";
import register from "../pages/register.js";

export default function SPA() {
  return {
    "/": homeUser,
    "/bookshelves": bookshelf,
    "/login": login,
    "/register": register,

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
