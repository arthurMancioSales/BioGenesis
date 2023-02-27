// @author {Davi}
import SPA from "../modules/spa.js";
const spa = SPA();

import collapsableMenu from "../modules/collapsableMenu.js";

export default function aboutUs() {
    const divInitial = document.createElement("div");
    divInitial.classList.add("aboutUsBg", "bodyHome");

    // cria o cabeçalho
    const header = document.createElement('header');
    header.classList.add('flexRowSpace');

    // cria a primeira div do cabeçalho
    const div1 = document.createElement('div');
    div1.classList.add('flexRowSpaceEven', 'boxSize');

    header.appendChild(div1);

    divInitial.appendChild(header); 

    // cria o conteúdo principal
    const main = document.createElement('main');
    main.classList.add('flexRowSpaceEven', 'mainSize');

    // cria a seção principal
    const section = document.createElement('section');
    section.classList.add('sectionBox', "flexColumn");

    // cria o título da seção
    const h1Section = document.createElement('h1');
    h1Section.classList.add('titleText');
    h1Section.textContent = 'SOBRE NÓS';
    section.appendChild(h1Section);

    // cria o parágrafo da seção
    const pSection = document.createElement('p');
    pSection.classList.add('bodyText');
    pSection.textContent = 'Lorem ipsum dolor sit amet consectetur. Aenean eget nulla ac elementum non tellus risus. Ullamcorper volutpat aliquam neque mauris turpis interdum dolor. Nulla turpis porttitor magna tortor etiam nunc sed dis vitae.';
    section.appendChild(pSection);

    // cria o botão da seção
    const buttonSection = document.createElement('button');
    buttonSection.setAttribute('type', 'button');
    buttonSection.setAttribute('class', 'button');
    buttonSection.textContent = 'COMEÇAR';
    buttonSection.onclick = () => spa.redirect("/bookshelves");

    section.appendChild(buttonSection);
    main.appendChild(section);

    // cria o aside
    const aside = document.createElement('aside');
    aside.classList.add('homeAside');

    // cria a imagem do aside
    const imgAside = document.createElement('img');
    imgAside.classList.add('link');
    imgAside.setAttribute('src', '/images/estante.png');
    imgAside.setAttribute('id', 'shelf');
    imgAside.onclick = () => spa.redirect("/bookshelves");

    aside.appendChild(imgAside);
    main.appendChild(aside);

    // adiciona tudo ao body da página
    divInitial.appendChild(header);
    divInitial.appendChild(main);

    collapsableMenu();

    return divInitial;
}