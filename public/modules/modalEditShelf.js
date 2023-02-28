/* @Autor: Thiago */

import { printTable } from "../pages/listShelves.js";

export default async function editBookShelvesPage(val, id) {
  const container = document.createElement("div");
  container.classList.add("modal-background");

  const title = document.createElement("h1");
  title.innerHTML = "Editar Estante";
  title.style.textAlign = "center";

  const divContainer = document.createElement("div");
  divContainer.classList.add("modalForms");

  const form = document.createElement("form");
  form.setAttribute("action", "");
  form.classList.add("form");

  const labelarea = document.createElement("label");
  labelarea.setAttribute("for", "labelarea");
  labelarea.textContent = "Conteudo:";

  const divInputName = document.createElement("input");
  divInputName.id = "shelf-name";
  divInputName.setAttribute("name", "shelf-name");
  divInputName.setAttribute("placeholder", "Nome");
  divInputName.value = val;

  const newShelf = document.createElement("input");
  newShelf.setAttribute("type", "submit");
  newShelf.setAttribute("name", "newShelf");
  newShelf.setAttribute("value", "Atualizar");
  newShelf.classList.add("button");
  newShelf.style.alignSelf = "center";
  newShelf.onclick = async () => {
    const shelfName = document.querySelector("#shelf-name").value;
    const wrapper = document.querySelector(".modalWrapper");
    try {
      await editBookshelf(shelfName, id);
      document.querySelector("#root").removeChild(wrapper);
      document.querySelector("#table").innerHTML = "";
      await printTable();
    } catch (error) {
      console.log("error:", error);
    }
  };

  form.appendChild(divInputName);

  divContainer.appendChild(form);
  container.appendChild(title);

  container.appendChild(divContainer);
  container.appendChild(newShelf);

  return container;
}

async function editBookshelf(name, id) {
  await fetch("http://149.28.100.51:5000/api/bookshelves", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      name,
    }),
  });
}
