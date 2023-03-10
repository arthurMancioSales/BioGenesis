import SPA from "./spa.js";
const spa = SPA();

import auth from "./checkAuthentication.js";

export default function collapsableMenu() {
  //menu colapsável
  const menu = document.querySelector(".collapsible");
  if (menu) {
    menu.remove();
  }

  const colMenuDiv = document.createElement("div");
  colMenuDiv.classList.add("collapsible");
  document.body.appendChild(colMenuDiv);

  const openMenu = document.createElement("img");
  openMenu.classList.add("colImg", "link");
  openMenu.setAttribute("src", "/images/links.png");
  openMenu.setAttribute("id", "menu");

  const colMenuIconDiv = document.createElement("div");
  colMenuIconDiv.style.display = "none";
  colMenuIconDiv.style.left = "350px";
  colMenuIconDiv.style.userSelect = "none";

    const homePage = document.createElement("i");
    homePage.classList.add("fa-solid", "fa-house", "link", 'colImg');
    homePage.id = "homePageImg";
    homePage.title = "Página Inicial"
    homePage.onclick = () => {
        document.body.removeChild(colMenuDiv)
        spa.redirect("/");
    }
    

    const bookPage = document.createElement("i");
    bookPage.classList.add("fa-solid", "fa-book", "link", 'colImg');
    bookPage.id = "bookPageImg";
    bookPage.title = "Nosso Acervo"
    bookPage.onclick = () => {
        document.body.removeChild(colMenuDiv)
        spa.redirect("/bookshelves");
    }

  const login = document.createElement("i");
  login.classList.add("colImg", "link", "fa-solid", "fa-user");
  login.id = "loginPageImg";
  login.onclick = () => {
    document.body.removeChild(colMenuDiv);

    if (!auth()) {
      spa.redirect("/login");
    } else {
      spa.redirect("/profile");
    }
  };

    const editBook = document.createElement('i');
    editBook.classList.add("link", 'colImg', "fa-file-signature", "fa-solid");
    editBook.setAttribute('alt', 'Editar/Criar Livros');
    editBook.title = "Criar/Editar Livros"
    editBook.onclick = () => {
        document.body.removeChild(colMenuDiv)
        spa.redirect("/list");
    }


    const editShelf = document.createElement("i");
    editShelf.classList.add("fa-solid", "fa-list", "link", 'colImg');
    editShelf.id = "shelfPageImg";
    editShelf.title = "Criar/Editar Prateleiras"
    editShelf.onclick = () => {
        document.body.removeChild(colMenuDiv)
        spa.redirect("/listShelves");
    }

    const addUser = document.createElement('i');
    addUser.classList.add("fa-solid", "fa-user-plus", "link", 'colImg');
    addUser.setAttribute('alt', 'Adicionar Novo Usuário');
    addUser.title = "Adicionar Usuário"
    addUser.onclick = () => {
        spa.redirect("/register");
    }

    const logOut = document.createElement('i');

    logOut.classList.add("colImg", "fa-solid", "fa-arrow-right-from-bracket", "link");
    logOut.setAttribute('alt', 'Sair');
    logOut.title = "Sair"
    logOut.onclick = async () => {
        await fetch("/session/", {
            method: "DELETE"
        })
        spa.redirect("/")
    }

    if(!auth()){
        login.title = "Login"

        colMenuIconDiv.appendChild(homePage);
        colMenuIconDiv.appendChild(bookPage);
        colMenuIconDiv.appendChild(login);

    } else{
        login.title = "Conta"

        colMenuIconDiv.appendChild(homePage);
        colMenuIconDiv.appendChild(editBook);
        colMenuIconDiv.appendChild(editShelf);
        colMenuIconDiv.appendChild(addUser);
        colMenuIconDiv.appendChild(login);
        colMenuIconDiv.appendChild(logOut);
    }

  openMenu.onclick = () => {
    if (openMenu.style.transform === "rotate(90deg)") {
      colMenuDiv.style.width = "150px";
      openMenu.style.transform = "rotate(0deg)";
      colMenuIconDiv.style.left = "350px";
      colMenuIconDiv.style.display = "none";
    } else {
      if (!auth()) {
        colMenuDiv.style.width = "350px";
      } else {
        colMenuDiv.style.width = "600px";
      }

      openMenu.style.transform = "rotate(90deg)";
      colMenuIconDiv.style.left = "0";
      colMenuIconDiv.style.display = "flex";
    }
  };

  colMenuDiv.appendChild(colMenuIconDiv);
  colMenuDiv.appendChild(openMenu);

  return colMenuDiv;
}
