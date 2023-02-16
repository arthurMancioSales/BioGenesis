/**
 * @author {Thiago}
 */

import SPA from "../modules/spa.js";

const spa = SPA();

export default function Home() {
  const section = document.createElement("section");

  const buttonPage1 = document.createElement("button");
  buttonPage1.type = "button";
  buttonPage1.textContent = "Page 1";
  buttonPage1.onclick = () => spa.redirect("/page1");

  const buttonPage2 = document.createElement("button");
  buttonPage2.type = "button";
  buttonPage2.textContent = "Page 2";
  buttonPage2.onclick = () => spa.redirect("/page2");

  const buttonPage3 = document.createElement("button");
  buttonPage3.type = "button";
  buttonPage3.textContent = "Page 3";
  buttonPage3.onclick = () => spa.redirect("/page3");

  section.appendChild(buttonPage1);
  section.appendChild(buttonPage2);
  section.appendChild(buttonPage3);

  return section;
}
