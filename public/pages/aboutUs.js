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
        { name: "Arthur Mancio", age: 19, job: "Desenvolvedor Back-End", picture: "arthur.jpg",  instagram:"https://www.instagram.com/mancioarthur/", github:"https://github.com/arthurMancioSales", linkedin:"https://www.linkedin.com/in/arthur-mancio-sales-5446301b8/"},
        { name: "Davi Severino", age: 27, job: "Desenvolvedor Front-End", picture: "davi.jpeg",  instagram:"https://www.instagram.com/araujoseverino96/", github:"https://github.com/Severo-96", linkedin:"https://www.linkedin.com/in/davi-severino-738146268/"},
        { name: "Pedro Rubens", age: 22, job: "Desenvolvedor Front-End", picture: "pedro.jpeg",  instagram:"https://www.instagram.com/pp_rubens_/", github:"https://github.com/PedroRubens", linkedin:"https://www.linkedin.com/in/pedro-rubens-166332202/"},
        { name: "Thiago Silva", age: 29, job: "Desenvolvedor Back-End", picture: "thiago.jpg",  instagram:"", github:"https://github.com/ThiagoOitaven", linkedin:"https://www.linkedin.com/in/thiago-oitaven/"}
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
        if (us[i].instagram == "") {
            insta.style.cursor = "not-allowed"
        } else {
            insta.onclick = () => {
                window.open(us[i].instagram)
            }
        }

        const git = document.createElement("i")
        git.classList.add('fa-brands', 'fa-github', "link", 'socialImg');
        git.title = "GitHub"
        if (us[i].github == "") {
            git.style.cursor = "not-allowed"
        } else {
            git.onclick = () => {
                window.open(us[i].github)
            }
        }

        const linkedin = document.createElement("i")
        linkedin.classList.add('fa-brands', 'fa-linkedin', "link", 'socialImg');
        linkedin.title = "LinkedIn"
        if (us[i].linkedin == "") {
            linkedin.style.cursor = "not-allowed"
        } else {
            linkedin.onclick = () => {
                window.open(us[i].linkedin)
            }
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