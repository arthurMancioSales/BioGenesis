// @author {Davi}
import SPA from "../modules/spa.js";
const spa = SPA();

export default function homeUser() {
    const divInitial = document.createElement("div");
    divInitial.classList.add("bodyHome", "homeBg");

    // cria o cabeçalho
    const header = document.createElement('header');
    header.classList.add('flexRowSpace');

    // cria a primeira div do cabeçalho
    const div1 = document.createElement('div');
    div1.classList.add('flexRowSpaceEven', 'boxSize');

    // cria o primeiro link do cabeçalho
    const p1Div1 = document.createElement('p');
    p1Div1.classList.add('link', 'headerText');
    p1Div1.setAttribute('id', 'about');
    p1Div1.textContent = 'SOBRE NÓS';
    div1.appendChild(p1Div1);

    // cria o segundo link do cabeçalho
    const p2Div1 = document.createElement('p');
    p2Div1.classList.add('link', 'headerText');
    p2Div1.setAttribute('id', 'anotherLink');
    p2Div1.textContent = 'OUTRO LINK';
    div1.appendChild(p2Div1);

    header.appendChild(div1);

    // cria a segunda div do cabeçalho
    const div2 = document.createElement('div');

    // cria a imagem do cabeçalho
    const imgDiv2 = document.createElement('img');
    imgDiv2.classList.add('link');
    imgDiv2.setAttribute('src', '/images/links.png');
    imgDiv2.setAttribute('id', 'menu');
    
    const nav = document.createElement("nav");
    nav.classList.add('collapsible');

    const divNav = document.createElement("div");
    nav.classList.add('flexColumn');

    const h2Nav = document.createElement("h2");
    h2Nav.classList.add('h2coll');
    h2Nav.textContent = "NOSSO ACERVO:"

    nav.appendChild(h2Nav);

    //Criação dos itens do menu colapsavel
    for(let i = 0; i < 9; i++){
        const btnNav = document.createElement("button");
        btnNav.classList.add('colBtn');
        btnNav.setAttribute('type', 'button');
        btnNav.textContent = 'TEMA 1' + i;
        nav.appendChild(btnNav)
        

        const colDivnav = document.createElement("div");
        colDivnav.classList.add('colDivnav');

        nav.appendChild(colDivnav)

        btnNav.onclick = () => {
            if(colDivnav.style.display == "block"){
                colDivnav.style.display = "none"
            }
            else {
                colDivnav.style.display = "block";
            }
        }

        for(var j = 0; j < 9; j++){
            const A = document.createElement("a");
            A.classList.add('aNav', "link", "flexColumn");
            A.textContent = `Livro 1 + ${j}`;
            colDivnav.appendChild(A)
    
            A.onclick = () => {
                console.log(A.textContent, btnNav.textContent)
            }
        }
    }

    nav.appendChild(divNav);
    divInitial.appendChild(nav)

    //Criação de dinamissidade para o simbolo do menu
    imgDiv2.onclick = () => {

        if(nav.style.display == "flex"){
            imgDiv2.style.transform = "rotate(0deg)";
            imgDiv2.style.right = "0";

            nav.style.display = "none"
            nav.style.width = "0"
        }
        else {
            imgDiv2.style.transform = "rotate(90deg)";
            imgDiv2.style.position = "relative";
            imgDiv2.style.right = "400%";

            nav.style.display = "flex";
            nav.style.width = "30%"

        }
    };

    div2.appendChild(imgDiv2);

    header.appendChild(div2);
    divInitial.appendChild(header); 

    // cria o conteúdo principal
    const main = document.createElement('main');
    main.classList.add('flexRowSpaceEven', 'mainSize');

    // cria a seção principal
    const section = document.createElement('section');
    section.classList.add('sectionBox', "flexColumn");

    // cria o título da seção
    const h1Section = document.createElement('h1');
    h1Section.classList.add('titleText');
    h1Section.textContent = 'Bem vindo ao BioGenesis';
    section.appendChild(h1Section);

    // cria o parágrafo da seção
    const pSection = document.createElement('p');
    pSection.classList.add('bodyText');
    pSection.textContent = 'Lorem ipsum dolor sit amet consectetur. Aenean eget nulla ac elementum non tellus risus. Ullamcorper volutpat aliquam neque mauris turpis interdum dolor. Nulla turpis porttitor magna tortor etiam nunc sed dis vitae.';
    section.appendChild(pSection);

    // cria o botão da seção
    const buttonSection = document.createElement('button');
    buttonSection.setAttribute('type', 'button');
    buttonSection.setAttribute('id', 'beginBtn');
    buttonSection.textContent = 'COMEÇAR';
    buttonSection.onclick = () => spa.redirect("/bookshelves");

    section.appendChild(buttonSection);
    main.appendChild(section);

    // cria o aside
    const aside = document.createElement('aside');

    // cria a imagem do aside
    const imgAside = document.createElement('img');
    imgAside.classList.add('link');
    imgAside.setAttribute('src', '/images/estante.png');
    imgAside.classList.add('link', "imgScale");
    imgAside.setAttribute('src', '/images/prateleira.png');
    imgAside.setAttribute('id', 'shelf');
    imgAside.onclick = () => spa.redirect("/bookshelves");

    aside.appendChild(imgAside);
    main.appendChild(aside);

    // adiciona tudo ao body da página
    divInitial.appendChild(header);
    divInitial.appendChild(main);

    return divInitial;
}