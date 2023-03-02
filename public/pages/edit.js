// @author {Pedro}
// @coauthor {Thiago}
import { createPage } from "../modules/createPage.js";

export default function edit() {
    const container = document.createElement("div");
    container.classList.add("containerPages");
    container.id = "containerPages";

    const divbtn = document.createElement("div");
    divbtn.classList.add("divbtn");

    const divInputConteudo = document.createElement("div");
    divInputConteudo.classList.add("input-container");

    const divInputImg = document.createElement("div");
    divInputImg.classList.add("input-container");

    const divInputTopic = document.createElement("div");
    divInputTopic.classList.add("input-container");

    const title = document.createElement("h1");
    title.id = "titleCreateBook";
    title.innerHTML = "Edição de livro";

    const divContainer = document.createElement("div");
    divContainer.classList.add("containerForms");
    divContainer.id = "containerForms";

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
    labelarea.setAttribute("for", "labelarea");
    labelarea.textContent = "Conteudo:";

    const labelTopic = document.createElement("label");
    labelTopic.setAttribute("for", "labelTopic");
    labelTopic.textContent = "Topico:";

    const labelImg = document.createElement("label");
    labelImg.setAttribute("for", "labelImg");
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
}
