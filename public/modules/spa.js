// @author {Thiago}
// @coauthor {Arthur}

import bookshelf from "../pages/bookShelf.js";
import form from "../pages/froms.js";
import homeUser from "../pages/homeUser.js";

export default function SPA() {
    return {
        "/": homeUser,
        "/bookshelves": bookshelf,
        "/forms": form,

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
