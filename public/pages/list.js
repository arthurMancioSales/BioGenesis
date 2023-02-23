import SPA from "../modules/spa.js";
import form from "./froms.js";

const spa = SPA();

import collapsableMenu from "./collapsableMenu.js";

export default function list() {

    const body = document.querySelector("body");



    const wrapper = document.createElement("div");
    wrapper.classList.add("bookWrapper");
    wrapper.style.overflowY = "scroll";


    wrapper.onclick = (e) => {
        if (e.target == wrapper) {
            body.removeChild(wrapper);
        }
    };


    const outDiv = document.createElement("div")
    outDiv.classList.add("flexColumNoncenter", "listBg");

   // cria o header
    const header = document.createElement('header');
    header.id= "headerList"

    const h1Header = document.createElement('h1');
    h1Header.classList.add("h1List")
    h1Header.textContent = 'LIVROS CADASTRADOS';
    header.appendChild(h1Header);

    // cria o main
    const main = document.createElement('main');
    main.classList.add("mainSectionList")

    const divMain = document.createElement('div');
    divMain.classList.add('containerList');

    const h2Div = document.createElement('h2');
    h2Div.classList.add("h2List")
    h2Div.textContent = 'CADASTRAR NOVO LIVRO';

    const pDiv = document.createElement('p');
    pDiv.classList.add("pList")
    pDiv.textContent = 'Para inserir um novo livro, preencha os dados abaixo:';

    divMain.appendChild(h2Div);
    divMain.appendChild(pDiv);

    main.appendChild(divMain);

    const inputdivMain = document.createElement('div');
    inputdivMain.classList.add('input-box');

    const buttonDiv = document.createElement('button');
    buttonDiv.type = 'button';
    buttonDiv.id = 'cadastrar';
    buttonDiv.textContent = "Cadastrar";
    buttonDiv.onclick = async () => {
        body.appendChild(wrapper);
        console.log("a");

        form()
    }
    buttonDiv.classList.add('button');

    inputdivMain.appendChild(buttonDiv);

    main.appendChild(inputdivMain);

    const sectionMain = document.createElement('section');
    sectionMain.id = 'section-lista';

    const divSection = document.createElement('div');
    divSection.classList.add('containerList');

    const h2Section = document.createElement('h2');
    h2Section.textContent = 'LISTA DE LIVROS CADASTRADOS';

    divSection.appendChild(h2Section);

    sectionMain.appendChild(divSection);

    const table = document.createElement('table');
    const thead = document.createElement('thead');

    const tr = document.createElement('tr');
    tr.id = 'table-heading';

    const tdID = document.createElement('td');
    tdID.classList.add('id-number');
    tdID.textContent = '#ID';

    const tdTitle = document.createElement('td');
    tdTitle.classList.add('title');
    tdTitle.textContent = 'TITULO DO LIVRO';

    const tdTheme = document.createElement('td');
    tdTheme.classList.add('theme');
    tdTheme.textContent = 'TEMA';

    const tdAuthor = document.createElement('td');
    tdAuthor.classList.add('authorTable');
    tdAuthor.textContent = 'AUTOR';


    const tdEdit = document.createElement('td');
    tdEdit.classList.add('edit');
    tdEdit.textContent = 'EDITAR';

    const tdDelete = document.createElement('td');
    tdDelete.classList.add('delete');
    tdDelete.textContent = 'EXCLUIR';

    tr.appendChild(tdID);
    tr.appendChild(tdTitle);
    tr.appendChild(tdTheme);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdEdit);
    tr.appendChild(tdDelete);

    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    tbody.id = 'table';
    table.appendChild(tbody);

    sectionMain.appendChild(table);
    main.appendChild(sectionMain);



    // adiciona o main ao body
    outDiv.appendChild(header);
    outDiv.appendChild(main);



    //Criação da tabela, todas as tres funções abaixo são necessarias para a criação da mesma.
    

    printTable();

    collapsableMenu();

    return outDiv;
}

export async function printTable(){
    await fetch("http://localhost:5000/api/books/")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        createTable(data.data);
    })
};

function createTable(userList){
    const table = document.querySelector("#table")
    table.innerHTML = "";

    let cont = 1;
    while (userList.length >= cont){
        addRow(userList, cont);
        cont++;
    }
};

function addRow(userList, cont) {

    const line = document.createElement("tr");

    const bookID = document.createElement("td");
    const bookTitle = document.createElement("td");
    const bookTheme = document.createElement("td");
    const bookAuthor = document.createElement("td");
    /* let bookLastEdit = document.createElement("td"); */
    const BookEdit = document.createElement("td");
    const bookDelete = document.createElement("td");
    
    line.appendChild(bookID);
    line.appendChild(bookTitle);
    line.appendChild(bookTheme);
    line.appendChild(bookAuthor);
    /* line.appendChild(bookLastEdit); */
    line.appendChild(BookEdit);
    line.appendChild(bookDelete);

    const tbody = document.querySelector("#table")
    tbody.appendChild(line);

    let i = cont - 1;
  
    bookID.innerHTML = `<span>${userList[i].book_id}</span>`;
    bookTitle.innerHTML = `<span>${userList[i].book_name}</span>`;
    bookTheme.innerHTML = `<span>${userList[i].bookshelf_name}<span>`;
    bookAuthor.innerHTML = `<span>${userList[i].author}<span>`;
    /* bookLastEdit.innerHTML = `<span>${userList[i].bookshelf_name}<span>`; */
    BookEdit.innerHTML = `<img src="../images/lapis.png" class="link tableImg" alt="edit">`;
    bookDelete.innerHTML = `<img src="../images/excluir.png" class="link" alt="del">`;
};