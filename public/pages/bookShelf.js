// @author {Pedro}

import { isLeft, isRight } from "../modules/carrossel.js";
import { createPage } from "../modules/createPage.js";


import loadBook from "../modules/bookLoader.js";
// import { response } from "express";

export default function bookshelf() {
    const container = document.createElement("div");
    container.classList.add('containerPages');
    container.id = "containerPages";

    const divbtn = document.createElement("div");
    divbtn.classList.add('divbtn');

    const divInputConteudo = document.createElement("div");
    divInputConteudo.classList.add("input-container");

    const divInputImg = document.createElement("div");
    divInputImg.classList.add("input-container");

    const divInputTopic = document.createElement("div");
    divInputTopic.classList.add("input-container");

    const title = document.createElement("h1");
    title.innerHTML = "Formulario de adição de livro";

    const divContainer = document.createElement("div");
    divContainer.classList.add('containerForms');

    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.classList.add("form");


    const inputConteudo = document.createElement("textarea");
    inputConteudo.setAttribute("name", "Conteudo");
    inputConteudo.classList.add("inputConteudo");


    const inputImg = document.createElement("input");
    inputImg.setAttribute("type", "file");
    inputImg.setAttribute("name", "Imagem");
    inputImg.classList.add("inputImg");

    const selectTopic = document.createElement("select");
    selectTopic.setAttribute("name", "topicos");
    selectTopic.classList.add("selectTopic");

    const optionHabitat = document.createElement("option");
    optionHabitat.value = "opcao1";
    optionHabitat.text = "Habitat";

    const optionAlimentacao = document.createElement("option");
    optionAlimentacao.value = "opcao2";
    optionAlimentacao.text = "Alimentaçao";

    const optionCuriosidades = document.createElement("option");
    optionCuriosidades.value = "opcao3";
    optionCuriosidades.text = "Curiosidades";

    const labelarea = document.createElement("label");
    labelarea.setAttribute("for", "nome-do-campo");
    labelarea.textContent = "Conteudo:";

    const labelTopic = document.createElement("label");
    labelTopic.setAttribute("for", "nome-do-campo");
    labelTopic.textContent = "Topico:";

    const labelImg = document.createElement("label");
    labelImg.setAttribute("for", "nome-do-campo");
    labelImg.textContent = "Upload de Imagem:   ";

    const inputBtn = document.createElement("input");
    inputBtn.setAttribute("type", "submit");
    inputBtn.setAttribute("name", "btn_enviar");
    inputBtn.setAttribute("value", "Enviar");

    const newPage = document.createElement("input");
    newPage.setAttribute("type", "submit");
    newPage.setAttribute("name", "newPager");
    newPage.setAttribute("value", "Nova pagina");
    newPage.onclick = () => createPage();

    selectTopic.appendChild(optionHabitat);
    selectTopic.appendChild(optionAlimentacao);
    selectTopic.appendChild(optionCuriosidades);


    labelTopic.appendChild(selectTopic);
    labelarea.appendChild(inputConteudo);
    labelImg.appendChild(inputImg);

    divInputConteudo.appendChild(labelarea);
    divInputImg.appendChild(labelImg);
    divInputTopic.appendChild(labelTopic);

    form.appendChild(divInputTopic);
    form.appendChild(divInputConteudo);
    form.appendChild(divInputImg);




    divContainer.appendChild(form);
    container.appendChild(title);

    divbtn.appendChild(newPage);
    divbtn.appendChild(inputBtn);

    container.appendChild(divbtn);


    container.appendChild(divContainer);


    return container;
};


// export default function bookshelf() {
//     const container = document.createElement("div");
//     container.classList.add('container', "backgrondShilf");

//     const title = document.createElement("h1");
//     title.className = "title_shiefbook";

//     const galleryWrapper = document.createElement("div");
//     galleryWrapper.className = "gallery-wrapper";

//     const gallery = document.createElement("div");
//     gallery.className = "gallery";

//     const previousImage = document.createElement("button");
//     previousImage.type = "button";
//     previousImage.textContent = "◀";
//     previousImage.classList.add("arrow-left", "control");
//     previousImage.onclick = () => isLeft();

//     const nextImage = document.createElement("button");
//     nextImage.type = "button";
//     nextImage.textContent = "▶";
//     nextImage.classList.add("arrow-right", "control");
//     nextImage.onclick = () => isRight();

//     const json = fetch(`http://localhost:3000/api/bookshelves`)
//         .then((response) => {
//             return response.json();
//         })
//         .then((response) => {
//             response.forEach((shelf, index) => {
//                 console.log(shelf);
//                 const BookShelf = document.createElement("img");
//                 BookShelf.src = "http://localhost:3000/images/prateleira.png";
//                 BookShelf.classList.add("item");
//                 BookShelf.alt = shelf.id;
//                 BookShelf.onclick = async (e) => {
//                     console.log('teste')
//                     await loadBook(shelf.id)
//                 }
//                 if (index === 0) {
//                     BookShelf.classList.add("current-item");
//                     title.textContent = shelf.name

//                 }
//                 BookShelf.dataset.name = shelf.name;
//                 BookShelf.dataset.id = shelf.id;

//                 gallery.appendChild(BookShelf);
//             });
//         });

//     const header = document.createElement("div");
//     header.classList.add("headerShelf");
//     header.appendChild(previousImage);
//     header.appendChild(title);
//     header.appendChild(nextImage);

//     galleryWrapper.appendChild(gallery);
//     container.appendChild(header);
//     container.appendChild(galleryWrapper);
//     return container;
// }
