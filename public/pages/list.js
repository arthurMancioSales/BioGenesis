import SPA from "../modules/spa.js";
const spa = SPA();

export default function list() {
    const outDiv = document.createElement("div")
    outDiv.classList.add("flexColumn");

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
    divMain.classList.add('container');

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
    inputShelfDiv.id = 'email';
    inputShelfDiv.classList.add('input-field');
    inputShelfDiv.placeholder = 'Prateleira';

    const buttonDiv = document.createElement('button');
    buttonDiv.type = 'button';
    buttonDiv.id = 'cadastrar';
    buttonDiv.textContent = "Cadastrar";
    buttonDiv.classList.add('button');

    inputdivMain.appendChild(inputBookDiv);
    inputdivMain.appendChild(inputShelfDiv);
    inputdivMain.appendChild(buttonDiv);

    main.appendChild(inputdivMain);

    const sectionMain = document.createElement('section');
    sectionMain.id = 'section-lista';

    const divSection = document.createElement('div');
    divSection.classList.add('container');

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

    return outDiv;
}