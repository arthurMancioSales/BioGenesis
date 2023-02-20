// @author {Pedro}

import { createPage } from "../modules/createPage.js";

export default function formsPage() {

    const container = document.createElement("div");
    container.classList.add('containerPages');

    const divInputConteudo = document.createElement("div");
    divInputConteudo.classList.add("input-container");

    const divInputImg =  document.createElement("div");
    divInputImg.classList.add("input-container");

    const divInputTopic =  document.createElement("div");
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
    labelImg.textContent = "Upload de Imagem:";

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

    form.appendChild(divInputConteudo);
    form.appendChild(divInputImg);
    form.appendChild(divInputTopic);

    form.appendChild(inputBtn);

    divContainer.appendChild(form);
    divContainer.appendChild(newPage);

    container.appendChild(title);
    container.appendChild(divContainer);

    return container;
};