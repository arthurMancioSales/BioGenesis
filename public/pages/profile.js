import modal from "../modules/modal.js";
import deleteUsersPage from "../modules/modalDeleteUser.js";
import SPA from "../modules/spa.js";
const spa = SPA();

import collapsableMenu from "./collapsableMenu.js";

export default function editProfile() {
  const outDiv = document.createElement("div");
  outDiv.classList.add("cadastroBg", "bodyHome");

  const profilePic = document.createElement("i");
  profilePic.classList.add("fa-solid", "fa-user-tie");
  profilePic.style.fontSize = "150px";
  profilePic.style.marginBottom = "15px";

  const name = document.createElement("p");
  name.classList.add("bodyText", "profileText");
  name.textContent = "NOME";

  const email = document.createElement("p");
  email.classList.add("bodyText", "profileText");
  email.textContent = "EMAIL";

  const date = document.createElement("p");
  date.classList.add("bodyText", "profileText");
  date.textContent = `Autor à XX dias`;

  const quant = document.createElement("p");
  quant.classList.add("bodyText", "profileText");
  quant.textContent = `Autor de XX livros`;

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("flexColumn");

  infoDiv.appendChild(name);
  infoDiv.appendChild(email);
  infoDiv.appendChild(date);
  infoDiv.appendChild(quant);

  const editProfile = document.createElement("input");
  editProfile.setAttribute("type", "submit");
  editProfile.setAttribute("name", "cancelDelete");
  editProfile.setAttribute("value", "Atualizar Conta");
  editProfile.classList.add("confirmDeleteButton");
  editProfile.style.backgroundColor = "rgba(50, 170, 62, 1)";
  editProfile.style.width = "250px";
  editProfile.onclick = async () => {
    document.querySelector(".collapsible").remove();
    spa.redirect("/editProfile");
  };

  const deleteProfile = document.createElement("input");
  deleteProfile.setAttribute("type", "submit");
  deleteProfile.setAttribute("name", "confirmDelete");
  deleteProfile.setAttribute("value", "Deletar Conta");
  deleteProfile.classList.add("confirmDeleteButton");
  deleteProfile.style.backgroundColor = "red";
  deleteProfile.style.width = "250px";
  deleteProfile.onclick = async () => {
    modal(deleteUsersPage);
  };

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("flexColumn");

  buttonDiv.appendChild(editProfile);
  buttonDiv.appendChild(deleteProfile);

  const main = document.createElement("main");
  main.classList.add("mainSize", "flexColumn");

  main.appendChild(profilePic);
  main.appendChild(infoDiv);
  main.appendChild(buttonDiv);

  outDiv.appendChild(main);

  collapsableMenu();

  return outDiv;
}
