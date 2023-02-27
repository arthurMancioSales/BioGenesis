import SPA from "../modules/spa.js";
import newUser from "../modules/submitNewUser.js";
const spa = SPA();

import collapsableMenu from "../modules/collapsableMenu.js";

export default function passwordRecover() {
    const outDiv = document.createElement("div")
    outDiv.classList.add("cadastroBg", "bodyHome");

    // Crie um elemento <h1> com o texto "Cadastrar Novo Usuário"
    const h1Main = document.createElement("h1");
    h1Main.classList.add("titleText");
    h1Main.textContent = "Recuperar Senha";

    // Crie um elemento <form> com vários elementos <input> e seus atributos
    const formMain = document.createElement("form");
    formMain.classList.add("flexColumn");
    /* formMain.onsubmit = async (e) => {
        e.preventDefault()
        const createUser = await newUser()
        if (createUser.status == 200) {
            document.querySelector("#loginResult").innerText = "Senha atualizada com sucesso!"
            setTimeout(()=>{spa.redirect("/login")}, 2500);
            
        } else {
            document.querySelector("#loginResult").innerText = createUser.error
        }
    } */

    const identityP = document.createElement("p");
    identityP.id = "identityP";
    identityP.innerText = "Confirme sua identidade:"
    identityP.classList.add("bodyText");

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

    const passwordP = document.createElement("p");
    passwordP.id = "passwordP";
    passwordP.innerText = "Insira e confirme sua nova senha:"
    passwordP.classList.add("bodyText");

    const inputUserPass = document.createElement("input");
    inputUserPass.id = "userPass";
    inputUserPass.type = "password"
    inputUserPass.required = true
    inputUserPass.placeholder = "Nova Senha";
    inputUserPass.classList.add("userInput");

    const inputUserPassConf = document.createElement("input");
    inputUserPassConf.id = "userPassConf";
    inputUserPassConf.type = "password"
    inputUserPassConf.required = true
    inputUserPassConf.placeholder = "Confirme sua Nova Senha";

    inputUserPassConf.classList.add("userInput");

    // Crie um elemento <button> com o ID "createUser" e o texto "Cadastrar"
    const buttonMain = document.createElement("button");
    buttonMain.classList.add("button");
    buttonMain.type = "submit";
    buttonMain.id = "updatePassword";
    buttonMain.textContent = "Atualizar Senha";

    formMain.appendChild(identityP);
    formMain.appendChild(inputUserName);
    formMain.appendChild(inputUserMail);
    formMain.appendChild(passwordP);
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


