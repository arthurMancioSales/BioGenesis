document.body.innerHTML=" ";
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
</aside>`

const about = document.getElementById("about");
const anotherLink = document.getElementById("anotherLink");
const menu = document.getElementById("menu");
const beginBtn = document.getElementById("beginBtn");
const shelf = document.getElementById("shelf");

about.addEventListener("click", async () => {
    try{
        const response = await fetch(`http://localhost:5000/usuarios`, {
            
        });

        if(response.status === 200){
            const json = await response.json();
            printTable()
            return Promise.resolve(json);
        } else {
            return Promise.reject(response.statusText);
        };
    }
    catch (error){
        alert(error);
    };
})

anotherLink.addEventListener("click", () => {
    console.log("123")
})

menu.addEventListener("click", () => {
    console.log("123")
})

beginBtn.addEventListener("click", () => {
    console.log("123")
})

shelf.addEventListener("click", () => {
    console.log("123")
})