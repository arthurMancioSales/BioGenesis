/* @Autor: Thiago */

import { printTable } from "../pages/listShelves.js";

export default async function deleteBookShelvesPage(val) {
  const container = document.createElement("div");
  container.classList.add("modal-background");
  container.style.width = "30vw";

  const title = document.createElement("h1");
  title.innerHTML = "Deletar Estante";
  title.style.textAlign = "center";

  const subTitle = document.createElement("h2");
  subTitle.innerHTML = "Certeza que deseja deletar a estante?";
  subTitle.style.textAlign = "center";

  const divContainer = document.createElement("div");
  divContainer.classList.add("modalForms");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const confirmDelete = document.createElement("input");
  confirmDelete.setAttribute("type", "submit");
  confirmDelete.setAttribute("name", "confirmDelete");
  confirmDelete.setAttribute("value", "Deletar");
  confirmDelete.classList.add("confirmDeleteButton");
  confirmDelete.style.backgroundColor = "red";
  confirmDelete.style.color = "white";
  confirmDelete.onclick = async () => {
    const wrapper = document.querySelector(".modalWrapper");
    try {
      const response = await deleteBookshelf(val);
      const resolved = await response.json();
      if (resolved.data === false) {
        alert(resolved.message);
        document.querySelector("#root").removeChild(wrapper);
        throw { error: resolved.message };
      }
      document.querySelector("#root").removeChild(wrapper);
      document.querySelector("#table").innerHTML = "";
      await printTable();
    } catch (error) {
      console.log("error:", error);
    }
  };

  const cancelDelete = document.createElement("input");
  cancelDelete.setAttribute("type", "submit");
  cancelDelete.setAttribute("name", "cancelDelete");
  cancelDelete.setAttribute("value", "Cancelar");
  cancelDelete.style.textAlign = "center";
  cancelDelete.classList.add("confirmDeleteButton");
  cancelDelete.onclick = async () => {
    const wrapper = document.querySelector(".modalWrapper");
    document.querySelector("#root").removeChild(wrapper);
  };

  container.appendChild(title);

  divContainer.appendChild(subTitle);
  buttonContainer.appendChild(confirmDelete);
  buttonContainer.appendChild(cancelDelete);
  divContainer.appendChild(buttonContainer);

  container.appendChild(divContainer);
  return container;
}

async function deleteBookshelf(id) {
  await fetch(`/api/bookshelves/${id}`, {
    method: "DELETE",
  });
  return res;
}
