import Home from "../pages/home.js";
import Page1 from "../pages/page1.js";
import Page2 from "../pages/page2.js";
import Page3 from "../pages/page3.js";

export default function Router() {
  return {
    "/": Home,
    "/page1": Page1,
    "/page2": Page2,
    "/page3": Page3,

    getPage: function (url) {
      if (url == "/index.html") {
        url = "/";
      }

      return this[url]();
    },
  };
}
