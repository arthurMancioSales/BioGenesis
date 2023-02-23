import SPA from "../modules/spa.js";
import submitLogin from "../modules/submitLogin.js";
const spa = SPA();

import collapsableMenu from "./collapsableMenu.js";

export default function login() {
    const outDiv = document.createElement("div")
    outDiv.classList.add("loginBg", "bodyHome");
    
    // Crie um elemento <h1> com o texto "Login"
    const h1Main = document.createElement("h1");
    h1Main.classList.add("titleText");
    h1Main.textContent = "Login";
    
    // Crie um elemento <form> com vários elementos <input> e seus atributos
    const formMain = document.createElement("form");
    formMain.classList.add("flexColumn");
    formMain.onsubmit = async (e) => {
        e.preventDefault()
        const login = await submitLogin()
        if (login.status == 200) {
            document.querySelector("#loginStatus").innerText = "Usuário logado com sucesso"
            spa.redirect('/')
        } else {
            document.querySelector("#loginStatus").innerText = "Usuário ou senha incorreto"
        }
    }

    const inputLogin = document.createElement("input");
    inputLogin.id = "login";
    inputLogin.placeholder = "E-mail";
    
    const inputPassword = document.createElement("input");
    inputPassword.id = "password";
    inputPassword.placeholder = "Senha";
    inputPassword.type = "password";
    
    formMain.appendChild(inputLogin);
    formMain.appendChild(inputPassword);
    
    // Crie um elemento <p> com a classe "link" e o texto "Esqueci minha senha"
    const pMain = document.createElement("p");
    pMain.classList.add("link", "pPosition", "bodyText");
    pMain.textContent = "Esqueci minha senha";
    
    // Crie um elemento <button> com o ID "login" e o texto "Entrar"
    const buttonMain = document.createElement("button");
    buttonMain.classList.add("button");
    buttonMain.type = "submit";
    buttonMain.id = "login";
    buttonMain.textContent = "Entrar";

    // Crie um elemento <p> para mostrar o status do login -> @author {Arthur}
    const loginStatus = document.createElement("p");
    loginStatus.classList.add("bodyText");
    loginStatus.textContent = "";
    loginStatus.id = "loginStatus"

    // Crie um elemento <main> e adicione todos os elementos criados a ele
    const main = document.createElement("main");
    main.classList.add("mainSize", "flexColumn", "loginPage");
    main.appendChild(h1Main);
    main.appendChild(formMain);
    main.appendChild(loginStatus);
    formMain.appendChild(pMain);
    formMain.appendChild(buttonMain);
    
    // Adicione o elemento <main> ao corpo do documento
    outDiv.appendChild(main);
    
    collapsableMenu();

    return outDiv;
}

