import SPA from "../modules/spa.js";
const spa = SPA();

import auth from "../modules/checkAuthentication.js";

export default function collapsableMenu(destroy=false) {
    //menu colapsável

    const colMenuDiv = document.createElement('div');
    colMenuDiv.classList.add('collapsible');
    document.body.appendChild(colMenuDiv);

    const openMenu = document.createElement('img');
    openMenu.classList.add('colImg', 'link');
    openMenu.setAttribute('src', '/images/links.png');
    openMenu.setAttribute('id', 'menu');

    const colMenuIconDiv = document.createElement("div");
    colMenuIconDiv.style.display = "none";
    colMenuIconDiv.style.left = "350px";
    colMenuIconDiv.style.userSelect = "none";

    const homePage = document.createElement("i");
    homePage.classList.add("fa-solid", "fa-house", "link", 'colImg');
    homePage.id = "homePageImg";
    homePage.onclick = () => {
        document.body.removeChild(colMenuDiv)
    spa.redirect("/");
    }

    const bookPage = document.createElement("i");
    bookPage.classList.add("fa-solid", "fa-book", "link", 'colImg');
    bookPage.id = "bookPageImg";
    bookPage.onclick = () => {
        document.body.removeChild(colMenuDiv)
        spa.redirect("/bookshelves");
    }

    const login = document.createElement("i");
    login.classList.add('colImg', 'link', "fa-solid", "fa-user");
    login.id = "loginPageImg";
    login.onclick = () => {
        document.body.removeChild(colMenuDiv);
        spa.redirect("/login");
    }

    const editBook = document.createElement('img');
    editBook.classList.add('colImg', 'link');
    editBook.setAttribute('src', '/images/editBookPage.png');
    editBook.setAttribute('alt', 'Editar/Criar Livros');
    editBook.onclick = () => {
        document.body.removeChild(colMenuDiv)
        spa.redirect("/list");
    }

    const editShelf = document.createElement("i");
    editShelf.classList.add("fa-regular", "fa-calendar-days", "link", 'colImg');
    editShelf.id = "shelfPageImg";
    editShelf.onclick = () => {
        document.body.removeChild(colMenuDiv)
        spa.redirect("/listShelves");
    }

    const addUser = document.createElement('img');
    addUser.classList.add('colImg', 'link');
    addUser.setAttribute('src', '/images/addUserPage.png');
    addUser.setAttribute('alt', 'Adicionar Novo Usuário');
    addUser.onclick = () => {
        document.body.removeChild(colMenuDiv);
        spa.redirect("/register");
    }

    const logOut = document.createElement('img');
    logOut.classList.add('colImg', 'link');
    logOut.setAttribute('src', '/images/logOut.png');
    logOut.setAttribute('alt', 'Sair');
    logOut.onclick = () => {
        //document.body.removeChild(colMenuDiv);
        // Rota para deslogar o usuário
    }

    if(!auth()){
        colMenuIconDiv.appendChild(homePage);
        colMenuIconDiv.appendChild(bookPage);
        colMenuIconDiv.appendChild(login);

    } else{
        colMenuIconDiv.appendChild(homePage);
        colMenuIconDiv.appendChild(editBook);
        colMenuIconDiv.appendChild(addUser);
        colMenuIconDiv.appendChild(logOut);
        colMenuIconDiv.appendChild(editShelf);
    }

    openMenu.onclick = () => {
        if (openMenu.style.transform === "rotate(90deg)"){

            colMenuDiv.style.width= "150px";

            openMenu.style.transform = "rotate(0deg)";

            colMenuIconDiv.style.left = "350px";
            colMenuIconDiv.style.userSelect = "none";
            colMenuIconDiv.style.display = "none";
        } else{

            if(!auth()){
                colMenuDiv.style.width= "350px";
        
            } else{
                colMenuDiv.style.width= "520px";
            }
            
            openMenu.style.transform = "rotate(90deg)";

            colMenuIconDiv.style.left = "0";
            colMenuIconDiv.style.userSelect = "all";
            colMenuIconDiv.style.display = "flex";
        }
    }
    
    colMenuDiv.appendChild(colMenuIconDiv)
    colMenuDiv.appendChild(openMenu);

    return colMenuDiv
}