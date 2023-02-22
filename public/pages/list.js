import SPA from "../modules/spa.js";
import form from "./froms.js";
const spa = SPA();

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
    main.classList.add("mainList")

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
        form()
        // const bookTitle = document.querySelector("#name").value
        // console.log(bookTitle)
        // const bookShelfName = document.querySelector("#bookshelfName").value
        // console.log(bookShelfName)
    
        // await fetch("http://localhost:5000/api/book", {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({'bookTitle': bookTitle,'bookshelfName': bookShelfName,'userName': 'usuarioTeste','coverImage': '63e56d334e133.png'})
        // })
        // document.querySelector("#table").innerHTML = ""
        // await printTable()
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

    const tdEdit = document.createElement('td');
    tdEdit.classList.add('edit');
    tdEdit.textContent = 'EDITAR';

    const tdDelete = document.createElement('td');
    tdDelete.classList.add('delete');
    tdDelete.textContent = 'EXCLUIR';

    tr.appendChild(tdID);
    tr.appendChild(tdTitle);
    tr.appendChild(tdTheme);
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

    async function printTable(){

        await fetch("http://localhost:5000/api/books/")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            createTable(data.data);
            console.log(data.data)
        })
    };

    function createTable(userList){
        console.log(userList);

        /* table.innerHTML = ""; */
    
        let cont = 1;
        while (userList.length >= cont){
            addRow(userList, cont);
            cont++;
        }
    };
    
    function addRow(userList, cont) {
    
        let line = document.createElement("tr");
    
        let col1 = document.createElement("td");
        let col2 = document.createElement("td");
        let col3 = document.createElement("td");
        let col4 = document.createElement("td");
        let col5 = document.createElement("td");
        
        line.appendChild(col1);
        line.appendChild(col2);
        line.appendChild(col3);
        line.appendChild(col4);
        line.appendChild(col5);
    
        tbody.appendChild(line);
    
        let i = cont - 1;
      
        col1.innerHTML = `<span>${userList[i].book_id}</span>`;
        col2.innerHTML = `<span>${userList[i].book_name}</span>`;
        col3.innerHTML = `<span>${userList[i].bookshelf_name}<span>`;
        col4.innerHTML = `<img src="../images/lapis.png" alt="edit">`;
        col5.innerHTML = `<img src="../images/excluir.png" alt="del">`;
    
        /* col4.addEventListener("click", () => editFunction(userList[i].id, userList[i].name, userList[i].email));
        col5.addEventListener("click", () => del(userList[i].id)); */
    };

    printTable();
    return outDiv;
}