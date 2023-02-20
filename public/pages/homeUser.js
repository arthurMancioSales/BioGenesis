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
    imgAside.setAttribute('id', 'shelf');
    imgAside.onclick = () => spa.redirect("/bookshelves");

    aside.appendChild(imgAside);
    main.appendChild(aside);

    // adiciona tudo ao body da página
    divInitial.appendChild(header);
    divInitial.appendChild(main);

    return divInitial;
}





/* document.body.innerHTML=" ";
document.body.className = "homeBg bodyHome";

document.body.innerHTML=`<header class="flexRowSpace">
<div class="flexRowSpaceAround boxSize">
    <p class="link headerText" id="about">SOBRE NÓS</p>
    <p class="link headerText" id="anotherLink">OUTRO LINK</p>
</div>
<div>
    <img class="link" src="../imagens/links.png" id="menu"">
</div>
</header>
<main class="flexRowSpaceEven mainSize">
<section class="sectionBox">
    <h1 class="titleText">Bem vindo ao BioGenesis</h1>
    <p class="bodyText">Lorem ipsum dolor sit amet consectetur. Aenean eget nulla ac elementum non tellus risus. Ullamcorper volutpat aliquam neque mauris turpis interdum dolor. Nulla turpis porttitor magna tortor etiam nunc sed dis vitae.</p>
    <button type="button" id="beginBtn">COMEÇAR</button>
</section>
<aside>
    <img class="link" src="../imagens/prateleira.png" id="shelf">
</aside>` */
/* 
const about = document.getElementById("about");
const anotherLink = document.getElementById("anotherLink");
const menu = document.getElementById("menu");
const beginBtn = document.getElementById("beginBtn");
const shelf = document.getElementById("shelf");

about.addEventListener("click", async () => {
    
})

anotherLink.addEventListener("click", () => {
    
})

menu.addEventListener("click", () => {
   
})

beginBtn.addEventListener("click", () => {
    
})

shelf.addEventListener("click", () => {
    
}) */