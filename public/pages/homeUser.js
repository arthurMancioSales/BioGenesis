// @author {Davi}
import SPA from "../modules/spa.js";
const spa = SPA();

import collapsableMenu from "../modules/collapsableMenu.js";

export default function homeUser() {
    const divInitial = document.createElement("div");
    divInitial.classList.add("homeBg", "bodyHome");

    // cria o cabeçalho
    const header = document.createElement('header');
    header.classList.add('flexRowSpace');

    // cria a primeira div do cabeçalho
    const div1 = document.createElement('div');
    div1.classList.add('flexRowSpaceEven', 'boxSize');

    // cria o primeiro link do cabeçalho
    const p1Div1 = document.createElement('p');
    p1Div1.classList.add('link', 'headerText');
    p1Div1.setAttribute('id', 'about');
    p1Div1.textContent = 'SOBRE NÓS';
    p1Div1.onclick = () => spa.redirect("/aboutUs");
    div1.appendChild(p1Div1);

    // cria o segundo link do cabeçalho
    const p2Div1 = document.createElement('a');
    p2Div1.classList.add('link', 'headerText');
    p2Div1.setAttribute('id', 'anotherLink');
    p2Div1.textContent = 'CÓDIGO FONTE';
    p2Div1.href = "https://linktr.ee/arandukahopper"
    p2Div1.target = "_blank"
    div1.appendChild(p2Div1);

    header.appendChild(div1);

    divInitial.appendChild(header); 

    const main = document.createElement('main');
    main.classList.add('flexRowSpaceEven', 'mainSize');

    const section = document.createElement('section');
    section.classList.add('sectionBox', "flexColumn");

    const h1Section = document.createElement('h1');
    h1Section.classList.add('titleText');
    h1Section.textContent = 'Bem vindo ao BioGenesis!';
    
    const pSection = document.createElement('p');
    pSection.classList.add('bodyText');
    pSection.textContent = 'Aqui, no nosso acervo, você encontrará informações diversas sobre as mais diferentes criaturas. Informações trazidas por pesquisadores oficializados de forma resumida e de facil entendimento!';
    
    const pSection2 = document.createElement('p');
    pSection2.classList.add('bodyText');
    pSection2.textContent = 'Você, pesquisador, tambem pode fazer parte do nosso grupo, entre em ';
    pSection2.style.marginTop = "15px"

    const link = document.createElement('a');
    link.textContent = "contato conosco!"
    link.classList.add('bodyText', "link");
    link.onclick = () => spa.redirect("/aboutUs");

    pSection2.appendChild(link)

    const buttonSection = document.createElement('button');
    buttonSection.setAttribute('type', 'button');
    buttonSection.setAttribute('class', 'button');
    buttonSection.textContent = 'COMEÇAR';
    buttonSection.onclick = () => spa.redirect("/bookshelves");

    section.appendChild(h1Section);
    section.appendChild(pSection);
    section.appendChild(pSection2);

    section.appendChild(buttonSection);
    main.appendChild(section);

    const aside = document.createElement('aside');
    aside.classList.add('homeAside');

    const imgAside = document.createElement('img');
    imgAside.classList.add('link');
    imgAside.setAttribute('src', '/images/estante.png');
    imgAside.setAttribute('id', 'shelf');
    imgAside.onclick = () => spa.redirect("/bookshelves");

    aside.appendChild(imgAside);
    main.appendChild(aside);

    divInitial.appendChild(header);
    divInitial.appendChild(main);

    collapsableMenu();

    return divInitial;
}