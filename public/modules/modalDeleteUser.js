/* @Autor: Thiago */
export default async function deleteUsersPage() {
  const container = document.createElement("div");
  container.classList.add("modal-background");
  container.style.width = "30vw";

  const title = document.createElement("h1");
  title.innerHTML = "Deletar Conta";
  title.style.textAlign = "center";

  const subTitle = document.createElement("h2");
  subTitle.innerHTML = "Certeza que deseja deletar a conta?";
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
      deleteUser(val);
      document.querySelector("#root").removeChild(wrapper);
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

async function deleteUser() {
  await fetch(`http://localhost:5000/api/deleteUser`, {
    method: "DELETE",
  });
}
