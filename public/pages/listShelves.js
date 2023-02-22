// @author {Thiago}

export default function listShelves() {
  const outDiv = document.createElement("div");
  outDiv.classList.add("flexColumNoncenter", "listBg");

  // cria o header
  const header = document.createElement("header");
  header.id = "headerList";

  const h1Header = document.createElement("h1");
  h1Header.classList.add("h1List");
  h1Header.textContent = "ESTANTES CADASTRADAS";
  header.appendChild(h1Header);

  // cria o main
  const main = document.createElement("main");
  main.classList.add("mainList");

  const divMain = document.createElement("div");
  divMain.classList.add("containerList");

  const h2Div = document.createElement("h2");
  h2Div.classList.add("h2List");
  h2Div.textContent = "CADASTRAR NOVA ESTANTE";

  divMain.appendChild(h2Div);

  main.appendChild(divMain);

  const headerdivMain = document.createElement("div");
  headerdivMain.classList.add("input-box");
  headerdivMain.style.justifyContent = "space-between";

  const h2Section = document.createElement("h2");
  h2Section.textContent = "LISTA DE ESTANTES CADASTRADAS";
  h2Section.style.alignSelf = "flex-end";

  headerdivMain.appendChild(h2Section);

  const buttonDiv = document.createElement("button");
  buttonDiv.type = "button";
  buttonDiv.id = "cadastrar";
  buttonDiv.textContent = "Criar Nova";
  buttonDiv.style.alignSelf = "flex-end";
  buttonDiv.onclick = () => {
    createBookShelvesPage();
  };
  buttonDiv.classList.add("button");

  headerdivMain.appendChild(buttonDiv);

  main.appendChild(headerdivMain);

  const sectionMain = document.createElement("section");
  sectionMain.id = "section-lista";

  const divSection = document.createElement("div");
  divSection.classList.add("containerList");

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

  // adiciona o main ao body
  outDiv.appendChild(header);
  outDiv.appendChild(main);

  async function printTable() {
    await fetch("http://localhost:5000/api/bookshelves")
      .then((response) => {
        return response.json();
      })
      .then((resolved) => {
        createTable(resolved.data);
      });
  }

  function createTable(userList) {
    let cont = 1;
    while (userList.length >= cont) {
      addRow(userList, cont);
      cont++;
    }
  }

  function addRow(userList, cont) {
    let line = document.createElement("tr");

    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");

    line.appendChild(col1);
    line.appendChild(col2);
    line.appendChild(col3);
    line.appendChild(col4);

    tbody.appendChild(line);

    let i = cont - 1;

    col1.innerHTML = `<span>${userList[i].id}</span>`;
    col2.innerHTML = `<span>${userList[i].name}</span>`;
    col3.innerHTML = `<i class="fa-solid fa-pencil listIcon link"></i>`;
    col4.innerHTML = `<i class="fa-solid fa-trash listIcon link"></i>`;
  }

  function createBookShelvesPage() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("modalWrapper");

    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fa-solid", "fa-xmark", "closeIcon");
    closeIcon.onclick = () => {
      document.querySelector("body").removeChild(wrapper);
    };

    wrapper.appendChild(closeIcon);

    const container = document.createElement("div");
    container.classList.add("modal-background");

    const title = document.createElement("h1");
    title.innerHTML = "Criação de estante";
    title.style.textAlign = "center";

    const divContainer = document.createElement("div");
    divContainer.classList.add("modalForms");

    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.classList.add("form");

    const labelarea = document.createElement("label");
    labelarea.setAttribute("for", "labelarea");
    labelarea.textContent = "Conteudo:";

    const newShelf = document.createElement("input");
    newShelf.setAttribute("type", "submit");
    newShelf.setAttribute("name", "newShelf");
    newShelf.setAttribute("value", "Nova Estante");
    newShelf.style.alignSelf = "center";
    newShelf.onclick = async () => {
      const shelfName = document.querySelector("#shelf-name").value;
      try {
        createBookshelf(shelfName);
        document.querySelector("body").removeChild(wrapper);
        document.querySelector("#table").innerHTML = "";
        await printTable();
      } catch (error) {
        console.log("error:", error);
      }
    };

    const divInputName = document.createElement("input");
    divInputName.id = "shelf-name";
    divInputName.setAttribute("name", "shelf-name");
    divInputName.setAttribute("placeholder", "Nome");

    form.appendChild(divInputName);

    divContainer.appendChild(form);
    container.appendChild(title);

    container.appendChild(divContainer);
    container.appendChild(newShelf);

    wrapper.appendChild(container);

    document.querySelector("body").appendChild(wrapper);

    wrapper.onclick = (e) => {
      if (e.target == wrapper) {
        document.querySelector("body").removeChild(wrapper);
        pageFlip.destroy();
      }
    };
  }

  async function createBookshelf(name) {
    await fetch("http://localhost:5000/api/bookshelves", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    });
  }

  printTable();
  return outDiv;
}
