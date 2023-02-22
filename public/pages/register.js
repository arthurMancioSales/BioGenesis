import SPA from "../modules/spa.js";
const spa = SPA();

import collapsableMenu from "./collapsableMenu.js";

export default function register() {
    const outDiv = document.createElement("div")
    outDiv.classList.add("cadastroBg", "bodyHome");

    // Crie um elemento <img> com a classe "backImg" e o atributo src definido como "./Vector.png"
    const imgMain = document.createElement("img");
    imgMain.classList.add("backImg", "link");
    imgMain.src = "../images/Vector.png";

    // Crie um elemento <h1> com o texto "Cadastrar Novo Usuário"
    const h1Main = document.createElement("h1");
    h1Main.classList.add("titleText");
    h1Main.textContent = "Cadastrar Novo Usuário";

    // Crie um elemento <form> com vários elementos <input> e seus atributos
    const formMain = document.createElement("form");
    const inputUserName = document.createElement("input");
    inputUserName.id = "userName";
    inputUserName.placeholder = "Nome Completo";

    const inputUserMail = document.createElement("input");
    inputUserMail.id = "userMail";
    inputUserMail.placeholder = "E-mail";

    const inputUserNick = document.createElement("input");
    inputUserNick.id = "userNick";
    inputUserNick.placeholder = "Nome de Usuário";

    const inputUserPass = document.createElement("input");
    inputUserPass.id = "userPass";
    inputUserPass.placeholder = "Senha";

    const inputUserPassConf = document.createElement("input");
    inputUserPassConf.id = "userPassConf";
    inputUserPassConf.placeholder = "Confirme sua Senha";

    formMain.appendChild(inputUserName);
    formMain.appendChild(inputUserMail);
    formMain.appendChild(inputUserNick);
    formMain.appendChild(inputUserPass);
    formMain.appendChild(inputUserPassConf);

    // Crie um elemento <button> com o ID "createUser" e o texto "Cadastrar"
    const buttonMain = document.createElement("button");
    buttonMain.classList.add("button");
    buttonMain.type = "button";
    buttonMain.id = "createUser";
    buttonMain.textContent = "Cadastrar";

    // Crie um elemento <main> e adicione todos os elementos criados a ele
    const main = document.createElement("main");
    main.classList.add("mainSize", "flexColumn");
    main.appendChild(imgMain);
    main.appendChild(h1Main);
    main.appendChild(formMain);
    main.appendChild(buttonMain);

    // Adicione o elemento <main> ao corpo do documento
    outDiv.appendChild(main);

    collapsableMenu();

    return outDiv;
}


