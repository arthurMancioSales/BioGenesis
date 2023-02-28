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
    title.textContent = 'SOBRE NÓS - Grupo Aranduka';

    header.appendChild(title);
 
    const main = document.createElement('main');
    main.classList.add('flexRowSpaceAround', 'mainSize');//flexColumn

    const us = [
        { name: "Arthur Mancio", age: "XX", job: "Desenvolvedor Back-End", picture: "logo.png",  link:"http://" },
        { name: "Davi Severino", age: 27, job: "Desenvolvedor Front-End", picture: "logo.png", link:"http://" },
        { name: "Pedro Rubens", age: "XX", job: "Desenvolvedor Front-End", picture: "logo.png", link:"http://" },
        { name: "Thiago Silva", age: "XX", job: "Desenvolvedor Back-End", picture: "logo.png", link:"http://" }
    ];

    for (let i = 0; i < 4; i++){
        const creator = document.createElement('div');
        creator.classList.add('flexColumn', "modalForms");
        creator.style.backgroundColor = "#bdebb7"

        const img = document.createElement("img");
        img.setAttribute('src', `/images/${us[i].picture}`); //
        img.classList.add('aboutUsImg');

        const pName = document.createElement("p");
        pName.textContent = us[i].name
        pName.classList.add('aboutUsText');

        const pAge = document.createElement("p");
        pAge.textContent = `${us[i].age} anos`
        pAge.classList.add('aboutUsText');

        const pFunction = document.createElement("p");
        pFunction.textContent = us[i].job
        pFunction.classList.add('aboutUsText');

        /* if(i > 1){
            pName.style.color = "black";
            pAge.style.color = "black";
            pFunction.style.color = "black";
        } */

        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'aboutUsButton');
        button.textContent = 'Contato';
        button.onclick = () => {
            location.href = us[i].link
        }

        creator.appendChild(img)
        creator.appendChild(pName)
        creator.appendChild(pAge)
        creator.appendChild(pFunction)
        creator.appendChild(button)

        main.appendChild(creator)
    }

    divInitial.appendChild(header);
    divInitial.appendChild(main);

    collapsableMenu();

    return divInitial;
}