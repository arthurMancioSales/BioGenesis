/* @Autor: Thiago */

import { printTable } from "../pages/listShelves.js";

export default async function createBookShelvesPage() {
  const container = document.createElement("div");
  container.classList.add("modal-background");

  const title = document.createElement("h1");
  title.innerHTML = "Criação de Estante";
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
  newShelf.classList.add("button");
  newShelf.style.alignSelf = "center";
  newShelf.onclick = async () => {
    const shelfName = document.querySelector("#shelf-name").value;
    const wrapper = document.querySelector(".modalWrapper");
    try {
      await createBookshelf(shelfName);
      document.querySelector("#root").removeChild(wrapper);
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

  return container;
}

async function createBookshelf(name) {
  await fetch("/api/bookshelves", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
    }),
  });
}
