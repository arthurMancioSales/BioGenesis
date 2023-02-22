import SPA from "../modules/spa.js";
const spa = SPA();

export default function collapsableMenu(destroy=false) {
    //menu colapsável
    if (destroy) {
        document.body.removeChild(document.querySelector(".collapsible"))
        return
    }

    const colMenuDiv = document.createElement('div');
    colMenuDiv.classList.add('collapsible');

    document.body.appendChild(colMenuDiv)

    const homePage = document.createElement("i");
    homePage.classList.add("fa-solid", "fa-house", "link", 'colImg'); //'colImg', 'link'
    homePage.id = "homePageImg";
    homePage.style.left = "310px";
    homePage.style.opacity = "0";
    homePage.style.userSelect = "none";
    homePage.onclick = () => {
        document.body.removeChild(colMenuDiv)
        spa.redirect("/");
    };

    const editBook = document.createElement('img');
    editBook.classList.add('colImg', 'link');
    editBook.setAttribute('src', '/images/editBookPage.png');
    editBook.setAttribute('alt', 'Editar/Criar Livros');
    editBook.style.left = "250px";
    editBook.style.opacity = "0";
    editBook.style.userSelect = "none";
    editBook.onclick = () => {
        document.body.removeChild(colMenuDiv)
        spa.redirect("/list");
    }

    const addUser = document.createElement('img');
    addUser.classList.add('colImg', 'link');
    addUser.setAttribute('src', '/images/addUserPage.png');
    addUser.setAttribute('alt', 'Adicionar Novo Usuário');
    addUser.style.left = "200px";
    addUser.style.opacity = "0";
    addUser.style.userSelect = "none";
    addUser.onclick = () => {
        document.body.removeChild(colMenuDiv);
        spa.redirect("/register");
    }

    const userProfile = document.createElement('img');
    userProfile.classList.add('colImg', 'link');
    userProfile.setAttribute('src', '/images/userProfile.png');
    userProfile.setAttribute('alt', 'Perfil');
    userProfile.style.left = "120px";
    userProfile.style.opacity = "0";
    userProfile.style.userSelect = "none";
    userProfile.onclick = () => {
        document.body.removeChild(colMenuDiv);
        spa.redirect("/login");
    }

    const logOut = document.createElement('img');
    logOut.classList.add('colImg', 'link');
    logOut.setAttribute('src', '/images/logOut.png');
    logOut.setAttribute('alt', 'Sair');
    logOut.style.left = "80px";
    logOut.style.opacity = "0";
    logOut.style.userSelect = "none";

    const openMenu = document.createElement('img');
    openMenu.classList.add('colImg', 'link');
    openMenu.setAttribute('src', '/images/links.png');
    openMenu.setAttribute('id', 'menu');

    openMenu.onclick = () => {
        if (openMenu.style.transform === "rotate(90deg)"){

            colMenuDiv.style.width= "150px";

            openMenu.style.transform = "rotate(0deg)";

            homePage.style.left = "310px";
            homePage.style.opacity = "0";
            homePage.style.userSelect = "none";

            editBook.style.left = "250px";
            editBook.style.opacity = "0";
            editBook.style.userSelect = "none";

            addUser.style.left = "200px";
            addUser.style.opacity = "0";
            addUser.style.userSelect = "none";

            userProfile.style.left = "120px";
            userProfile.style.opacity = "0";
            userProfile.style.userSelect = "none";

            logOut.style.left = "80px";
            logOut.style.opacity = "0";
            logOut.style.userSelect = "none";

        } else{
            colMenuDiv.style.width= "520px";

            openMenu.style.transform = "rotate(90deg)";

            homePage.style.left = "0";
            homePage.style.opacity = "100";
            homePage.style.userSelect = "all";

            editBook.style.left = "0";
            editBook.style.opacity = "100";
            editBook.style.userSelect = "all";

            addUser.style.left = "0";
            addUser.style.opacity = "100";
            addUser.style.userSelect = "all";
            
            userProfile.style.left = "0";
            userProfile.style.opacity = "100";
            userProfile.style.userSelect = "all";

            logOut.style.left = "0";
            logOut.style.opacity = "100";
            logOut.style.userSelect = "all";
        }
    }

    colMenuDiv.appendChild(homePage);
    colMenuDiv.appendChild(editBook);
    colMenuDiv.appendChild(addUser);
    colMenuDiv.appendChild(userProfile);
    colMenuDiv.appendChild(logOut);
    colMenuDiv.appendChild(openMenu);

    return colMenuDiv
}