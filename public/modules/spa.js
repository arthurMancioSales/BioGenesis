// @author {Thiago}
// @coauthor {Arthur}

import bookshelf from "../pages/bookShelf.js";
import homeUser from "../pages/homeUser.js";
import login from "../pages/login.js";
import register from "../pages/register.js";
import list from "../pages/list.js";
import listShelves from "../pages/listShelves.js";
import edit from "../pages/edit.js";

export default function SPA() {
  return {
    "/": homeUser,
    "/bookshelves": bookshelf,
    "/login": login,
    "/register": register,
    "/list": list,
    "/listShelves": listShelves,
    "/edit": edit,

    getPage: function (url) {
      console.log(url);
      if (url == "/index.html") {
        url = "/";
      }
      return this[url]();
    },

    redirect: function (url) {
      const page = this.getPage(url);
      window.history.pushState({}, "", url);
      root.innerHTML = "";
      root.appendChild(page);
    },
  };
}
