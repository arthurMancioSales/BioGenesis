// @author {Davi}
import SPA from "../modules/spa.js";
const spa = SPA();

import collapsableMenu from "./collapsableMenu.js";

export default function aboutUs() {
    const divInitial = document.createElement("div");
    divInitial.classList.add("aboutUsBg", "bodyHome");

    const header = document.createElement('header');
    header.classList.add('flexColumn', "mainSectionList");

    const title = document.createElement('h1');
    title.classList.add('listTitle');
    title.textContent = 'SOBRE NÓS';

    header.appendChild(title);
 
    const main = document.createElement('main');
    main.classList.add('flexColumn', 'mainSize');

    const section = document.createElement('section');
    section.classList.add('sectionBox', "flexRowSpaceAround");

    const creator1 = document.createElement('div');
    creator1.classList.add('flexColumn');

    const img = document.createElement("img");
    img.setAttribute('src', '/images/logo.png');
    img.style.width = "150px"

    const pName = document.createElement("p");
    pName.textContent = "NOME"
    pName.classList.add('bodyText');

    const pAge = document.createElement("p");
    pAge.textContent = "XX anos"
    pAge.classList.add('bodyText');

    const pFunction = document.createElement("p");
    pFunction.textContent = "Desenvolvedor Back-End"
    pFunction.classList.add('bodyText');

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'confirmDeleteButton');
    button.textContent = 'Contato';
    button.style.width = "150px"
    button.style.height = "50px"
    //button.onclick = () => spa.redirect("/bookshelves");

    creator1.appendChild(img)
    creator1.appendChild(pName)
    creator1.appendChild(pAge)
    creator1.appendChild(pFunction)
    creator1.appendChild(button)
    /* const creator2 = document.createElement('div');

    const creator3 = document.createElement('div');

    const creator4 = document.createElement('div'); */

    section.appendChild(creator1);
    /* section.appendChild(creator2);
    section.appendChild(creator3);
    section.appendChild(creator4); */

   // main.appendChild(title);
    main.appendChild(section);

    // adiciona tudo ao body da página
    divInitial.appendChild(header);
    divInitial.appendChild(main);

    collapsableMenu();

    return divInitial;
}