// @author {Davi}
import SPA from "../modules/spa.js";
const spa = SPA();

import collapsableMenu from "../modules/collapsableMenu.js";

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
    main.classList.add('flexRowSpaceAround', 'mainSize');

    const us = [
        { name: "Arthur Mancio", age: "XX", job: "Desenvolvedor Back-End", picture: "logo.png",  instagram:"http://", github:"http://", linkedin:"http://"},
        { name: "Davi Severino", age: 27, job: "Desenvolvedor Front-End", picture: "logo.png",  instagram:"http://", github:"http://", linkedin:"http://"},
        { name: "Pedro Rubens", age: "XX", job: "Desenvolvedor Front-End", picture: "logo.png",  instagram:"http://", github:"http://", linkedin:"http://"},
        { name: "Thiago Silva", age: "XX", job: "Desenvolvedor Back-End", picture: "logo.png",  instagram:"http://", github:"http://", linkedin:"http://"}
    ];

    for (let i = 0; i < 4; i++){
        const creator = document.createElement('div');
        creator.classList.add('flexColumn', "modalForms");
        creator.style.backgroundColor = "#bdebb7"

        const img = document.createElement("img");
        img.setAttribute('src', `/images/${us[i].picture}`); //
        img.classList.add('aboutUsImg');

        const name = document.createElement("p");
        name.textContent = us[i].name
        name.classList.add('aboutUsText');

        const age = document.createElement("p");
        age.textContent = `${us[i].age} anos`
        age.classList.add('aboutUsText');

        const job = document.createElement("p");
        job.textContent = us[i].job
        job.classList.add('aboutUsText');

        const links = document.createElement('div');
        links.classList.add('flexRowSpaceAround');
        links.style.height = "70px"

        const insta = document.createElement("i")
        insta.classList.add('fa-brands', 'fa-instagram', "link", 'socialImg');
        insta.title = "Instagram"
        insta.onclick = () => {
            location.href = us[i].instagram
        }

        const git = document.createElement("i")
        git.classList.add('fa-brands', 'fa-github', "link", 'socialImg');
        git.title = "GitHub"
        git.onclick = () => {
            location.href = us[i].github
        }

        const linkedin = document.createElement("i")
        linkedin.classList.add('fa-brands', 'fa-linkedin', "link", 'socialImg');
        linkedin.title = "LinkedIn"
        linkedin.onclick = () => {
            location.href = us[i].linkedin
        }

        links.appendChild(linkedin)
        links.appendChild(git)
        links.appendChild(insta)
        
        creator.appendChild(img)
        creator.appendChild(name)
        creator.appendChild(age)
        creator.appendChild(job)
        creator.appendChild(links)

        main.appendChild(creator)
    }

    divInitial.appendChild(header);
    divInitial.appendChild(main);

    collapsableMenu();

    return divInitial;
}