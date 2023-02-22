import SPA from "../modules/spa.js";
const spa = SPA();

import collapsableMenu from "./collapsableMenu.js";

export default function list() {
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

    const inputBookDiv = document.createElement('input');
    inputBookDiv.type = 'text';
    inputBookDiv.id = 'name';
    inputBookDiv.classList.add('input-field');
    inputBookDiv.placeholder = 'Nome do Livro';

    const inputShelfDiv = document.createElement('input');
    inputShelfDiv.type = 'text';
    inputShelfDiv.id = 'bookshelfName';
    inputShelfDiv.classList.add('input-field');
    inputShelfDiv.placeholder = 'Prateleira';

    const buttonDiv = document.createElement('button');
    buttonDiv.type = 'button';
    buttonDiv.id = 'cadastrar';
    buttonDiv.textContent = "Cadastrar";
    buttonDiv.onclick = async () => {
        const bookTitle = document.querySelector("#name").value
        console.log(bookTitle)
        const bookShelfName = document.querySelector("#bookshelfName").value
        console.log(bookShelfName)
    
        await fetch("http://localhost:5000/api/book", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'bookTitle': bookTitle,'bookshelfName': bookShelfName,'userName': 'usuarioTeste','coverImage': '63e56d334e133.png'})
        })
        document.querySelector("#table").innerHTML = ""
        await printTable()
    }
    buttonDiv.classList.add('button');

    inputdivMain.appendChild(inputBookDiv);
    inputdivMain.appendChild(inputShelfDiv);
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

    /* const tdLastEdit = document.createElement('td');
    tdLastEdit.classList.add('lastEdit');
    tdLastEdit.textContent = 'ÚLTIMA EDIÇÃO'; */

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
    /* tr.appendChild(tdLastEdit); */
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
    async function printTable(){
        await fetch("http://localhost:5000/api/books/")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            createTable(data.data);
            console.log(data.data)
        })
    };
    
    function createTable(userList){
        /* table.innerHTML = ""; */
    
        let cont = 1;
        while (userList.length >= cont){
            addRow(userList, cont);
            cont++;
        }
    };
    
    function addRow(userList, cont) {
    
        let line = document.createElement("tr");
    
        let bookID = document.createElement("td");
        let bookTitle = document.createElement("td");
        let bookTheme = document.createElement("td");
        let bookAuthor = document.createElement("td");
        /* let bookLastEdit = document.createElement("td"); */
        let BookEdit = document.createElement("td");
        let bookDelete = document.createElement("td");
        
        line.appendChild(bookID);
        line.appendChild(bookTitle);
        line.appendChild(bookTheme);
        line.appendChild(bookAuthor);
        /* line.appendChild(bookLastEdit); */
        line.appendChild(BookEdit);
        line.appendChild(bookDelete);
    
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

    printTable();

    collapsableMenu();

    return outDiv;
}