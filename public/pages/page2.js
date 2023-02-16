/**
 * @author {Thiago}
 */

import SPA from "../modules/spa.js";

const spa = SPA();

export default function Page2() {
  const section = document.createElement("section");

  const paragraph = document.createElement("p");

  paragraph.textContent = "Page 2";

  const buttonHome = document.createElement("button");
  buttonHome.type = "button";
  buttonHome.textContent = "Home";
  buttonHome.onclick = () => spa.redirect("/");

  section.id = "page";
  section.appendChild(paragraph);
  section.appendChild(buttonHome);

  return section;
}
