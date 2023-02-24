// @author {Thiago}

import modal from "../modules/modal.js";
import createBookShelvesPage from "../modules/modalCreateShelf.js";
import deleteBookShelvesPage from "../modules/modalDeleteShelf.js";
import editBookShelvesPage from "../modules/modalEditShelf.js";
import collapsableMenu from "./collapsableMenu.js";

export default function listShelves() {
  const outDiv = document.createElement("div");
  outDiv.classList.add("flexColumNoncenter", "listBg");

  // cria o main
  const main = document.createElement("main");
  main.classList.add("mainSectionList");

  const divMain = document.createElement("div");

  const inputdivMain = document.createElement("div");
  inputdivMain.classList.add("input-box");

  main.appendChild(divMain);

  main.appendChild(inputdivMain);

  const sectionMain = document.createElement("section");
  sectionMain.id = "section-lista";

  const divSection = document.createElement("div");
  divSection.classList.add("containerList");

  const h2Section = document.createElement("h2");
  h2Section.classList.add("listTitle");
  h2Section.textContent = "ESTANTES CADASTRADAS";

  const buttonDiv = document.createElement("input");
  buttonDiv.setAttribute("type", "button");
  buttonDiv.classList.add("listBtn", "beginBtn");
  buttonDiv.value = "Cadastrar";
  buttonDiv.onclick = async () => {
    modal(createBookShelvesPage);
  };

  inputdivMain.appendChild(h2Section);
  inputdivMain.appendChild(buttonDiv);

  sectionMain.appendChild(divSection);

  const table = document.createElement("table");
  const thead = document.createElement("thead");

  const tr = document.createElement("tr");
  tr.id = "table-heading";

  const tdID = document.createElement("td");
  tdID.classList.add("id-number");
  tdID.textContent = "#ID";

  const tdTitle = document.createElement("td");
  tdTitle.classList.add("title");
  tdTitle.textContent = "TEMA DA ESTANTE";

  const tdEdit = document.createElement("td");
  tdEdit.classList.add("edit");
  tdEdit.textContent = "EDITAR";

  const tdDelete = document.createElement("td");
  tdDelete.classList.add("delete");
  tdDelete.textContent = "EXCLUIR";

  tr.appendChild(tdID);
  tr.appendChild(tdTitle);
  tr.appendChild(tdEdit);
  tr.appendChild(tdDelete);

  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  tbody.id = "table";
  table.appendChild(tbody);

  sectionMain.appendChild(table);
  main.appendChild(sectionMain);

  outDiv.appendChild(main);

  printTable();

  collapsableMenu();

  return outDiv;
}

export async function printTable() {
  await fetch("http://localhost:5000/api/bookshelves")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createTable(data.data);
    });
}

function createTable(userList) {
  const table = document.querySelector("#table");
  table.innerHTML = "";

  let cont = 1;
  while (userList.length >= cont) {
    addRow(userList, cont);
    cont++;
  }
}

function addRow(userList, cont) {
  let line = document.createElement("tr");
  let i = cont - 1;

  let col1 = document.createElement("td");
  let col2 = document.createElement("td");
  let col3 = document.createElement("td");
  col3.onclick = async () => {
    modal(editBookShelvesPage, userList[i].name, userList[i].id);
  };
  let col4 = document.createElement("td");
  col4.onclick = async () => {
    modal(deleteBookShelvesPage, userList[i].id);
  };

  line.appendChild(col1);
  line.appendChild(col2);
  line.appendChild(col3);
  line.appendChild(col4);

  const tbody = document.querySelector("#table");
  tbody.appendChild(line);

  col1.innerHTML = `<span>${userList[i].id}</span>`;
  col2.innerHTML = `<span>${userList[i].name}</span>`;
  col3.innerHTML = `<i class="fa-solid fa-pencil listIcon link"></i>`;
  col4.innerHTML = `<i class="fa-solid fa-trash listIcon link"></i>`;
}