// @author {Thiago}
// @coauthor {Arthur}

import bookshelf from "../pages/bookShelf.js";
import homeUser from "../pages/homeUser.js";
import login from "../pages/login.js";
import register from "../pages/register.js";
import list from "../pages/list.js";
import listShelves from "../pages/listShelves.js";
import edit from "../pages/edit.js";
import aboutUs from "../pages/aboutUs.js";
import editProfile from "../pages/editProfile.js";
import profile from "../pages/profile.js";

export default function SPA() {
  return {
    "/": homeUser,
    "/bookshelves": bookshelf,
    "/login": login,
    "/register": register,
    "/list": list,
    "/listShelves": listShelves,
    "/edit": edit,
    "/aboutUs": aboutUs,
    "/editProfile": editProfile,
    "/profile": profile,

        getPage: function (url) {
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
