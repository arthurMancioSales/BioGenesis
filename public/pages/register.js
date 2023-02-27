import SPA from "../modules/spa.js";
import newUser from "../modules/submitUser.js";
const spa = SPA();

import collapsableMenu from "./collapsableMenu.js";

export default function register() {
    const outDiv = document.createElement("div")
    outDiv.classList.add("cadastroBg", "bodyHome");

    // Crie um elemento <h1> com o texto "Cadastrar Novo Usuário"
    const h1Main = document.createElement("h1");
    h1Main.classList.add("titleText");
    h1Main.textContent = "Cadastrar Novo Usuário";

    // Crie um elemento <form> com vários elementos <input> e seus atributos
    const formMain = document.createElement("form");
    formMain.classList.add("flexColumn");
    formMain.onsubmit = async (e) => {
        e.preventDefault()
        const createUser = await newUser()
        if (createUser.status == 200) {
            document.querySelector("#loginResult").innerText = "Usuário criado com sucesso"
            spa.redirect("/")
        } else {
            document.querySelector("#loginResult").innerText = createUser.error
        }
    }

    const inputUserName = document.createElement("input");
    inputUserName.id = "userName";
    inputUserName.type = "name"
    inputUserName.required = true
    inputUserName.placeholder = "Usuário";

    inputUserName.classList.add("userInput");

    const inputUserMail = document.createElement("input");
    inputUserMail.id = "userEmail";
    inputUserMail.type = "email"
    inputUserMail.required = true
    inputUserMail.placeholder = "E-mail";
    inputUserMail.classList.add("userInput");

    const inputUserMailConfirm = document.createElement("input");
    inputUserMailConfirm.id = "userEmailConfirm";
    inputUserMailConfirm.type = "email"
    inputUserMailConfirm.required = true
    inputUserMailConfirm.placeholder = "Confirme seu e-mail";

    inputUserMailConfirm.classList.add("userInput");

    const inputUserPass = document.createElement("input");
    inputUserPass.id = "userPass";
    inputUserPass.type = "password"
    inputUserPass.required = true
    inputUserPass.placeholder = "Senha";
    inputUserPass.classList.add("userInput");

    const inputUserPassConf = document.createElement("input");
    inputUserPassConf.id = "userPassConf";
    inputUserPassConf.type = "password"
    inputUserPassConf.required = true
    inputUserPassConf.placeholder = "Confirme sua Senha";

    inputUserPassConf.classList.add("userInput");

    // Crie um elemento <button> com o ID "createUser" e o texto "Cadastrar"
    const buttonMain = document.createElement("button");
    buttonMain.classList.add("button");
    buttonMain.type = "submit";
    buttonMain.id = "createUser";
    buttonMain.textContent = "Cadastrar";
 
    formMain.appendChild(inputUserName);
    formMain.appendChild(inputUserMail);
    formMain.appendChild(inputUserMailConfirm);
    formMain.appendChild(inputUserPass);
    formMain.appendChild(inputUserPassConf);
    formMain.appendChild(buttonMain);

    const result = document.createElement("p")
    result.innerText = ""
    result.id = "loginResult"

    // Crie um elemento <main> e adicione todos os elementos criados a ele
    const main = document.createElement("main");
    main.classList.add("mainSize", "flexColumn");
    main.appendChild(h1Main);
    main.appendChild(formMain);
    main.appendChild(result);

    // Adicione o elemento <main> ao corpo do documento
    outDiv.appendChild(main);

    collapsableMenu();

    return outDiv;
}


