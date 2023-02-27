import SPA from "../modules/spa.js";
import newUser from "../modules/submitNewUser.js";
const spa = SPA();

import collapsableMenu from "./collapsableMenu.js";

export default function editProfile() {

    const outDiv = document.createElement("div")
    outDiv.classList.add("cadastroBg", "bodyHome");

    const h1Main = document.createElement("h1");
    h1Main.classList.add("titleText");
    h1Main.textContent = "Atualizar Cadastro";

    const formMain = document.createElement("form");
    formMain.classList.add("flexColumn");
/*     formMain.onsubmit = async (e) => {
        e.preventDefault()
        const createUser = await newUser()
        if (createUser.status == 200) {
            document.querySelector("#loginResult").innerText = "Usuário criado com sucesso"
            spa.redirect("/")
        } else {
            document.querySelector("#loginResult").innerText = createUser.error
        }
    } */

    const inputUserName = document.createElement("input");
    inputUserName.id = "userName";
    inputUserName.type = "name"
    inputUserName.required = true
    inputUserName.placeholder = "Usuário";
    inputUserName.classList.add("userInput");
    //inputUserName.value = ""

    const inputUserMail = document.createElement("input");
    inputUserMail.id = "userEmail";
    inputUserMail.type = "email"
    inputUserMail.required = true
    inputUserMail.placeholder = "E-mail";
    inputUserMail.classList.add("userInput");
    //inputUserMail.value = ""

    const inputUserMailConfirm = document.createElement("input");
    inputUserMailConfirm.id = "userEmailConfirm";
    inputUserMailConfirm.type = "email"
    inputUserMailConfirm.required = true
    inputUserMailConfirm.placeholder = "Confirme seu e-mail";
    inputUserMailConfirm.classList.add("userInput");
    //inputUserMailConfirm.value = ""

    const inputUserPass = document.createElement("input");
    inputUserPass.id = "userPass";
    inputUserPass.type = "password"
    inputUserPass.required = true
    inputUserPass.placeholder = "Senha";
    inputUserPass.classList.add("userInput");
    //inputUserPass.value = ""

    const inputUserPassConf = document.createElement("input");
    inputUserPassConf.id = "userPassConf";
    inputUserPassConf.type = "password"
    inputUserPassConf.required = true
    inputUserPassConf.placeholder = "Confirme sua Senha";
    inputUserPassConf.classList.add("userInput");
    //inputUserPassConf.value = ""

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const editBtn = document.createElement("input");
    editBtn.setAttribute("type", "submit");
    editBtn.setAttribute("name", "cancelDelete");
    editBtn.setAttribute("value", "Atualizar");
    editBtn.classList.add("confirmDeleteButton");
    //editBtn.style.backgroundColor = "rgba(50, 170, 62, 1)";
    editBtn.onclick = async () => {

    };
  
    const cancelBtn = document.createElement("input");
    cancelBtn.setAttribute("type", "submit");
    cancelBtn.setAttribute("name", "confirmDelete");
    cancelBtn.setAttribute("value", "Cancelar");
    cancelBtn.classList.add("confirmDeleteButton");
    cancelBtn.style.backgroundColor = "red";
    cancelBtn.onclick = async () => {
        document.querySelector(".collapsible").remove();
        spa.redirect("/profile");
    };
  
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(cancelBtn);
    
    formMain.appendChild(inputUserName);
    formMain.appendChild(inputUserMail);
    formMain.appendChild(inputUserMailConfirm);
    formMain.appendChild(inputUserPass);
    formMain.appendChild(inputUserPassConf);
    formMain.appendChild(buttonContainer);

    const result = document.createElement("p")
    result.innerText = ""
    result.id = "loginResult"
    result.classList.add("bodyText");
    result.style.color = "black"

    const main = document.createElement("main");
    main.classList.add("mainSize", "flexColumn");

    main.appendChild(h1Main);
    main.appendChild(formMain);
    main.appendChild(result);

    outDiv.appendChild(main);

    collapsableMenu();

    return outDiv;
}


