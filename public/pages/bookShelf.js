// @author {Pedro}
import { isLeft, isRight } from "../modules/carrossel.js";

export default function bookshelf() {
    const container = document.createElement("div");
    container.classList.add('container',"backgrondShilf");

    const title = document.createElement("h1");
    title.textContent = "Estantes";
    title.className = "title_shiefbook";

    const galleryWrapper = document.createElement("div");
    galleryWrapper.className = "gallery-wrapper";

    const gallery = document.createElement("div");
    gallery.className = "gallery";

    const previousImage = document.createElement("button");
    previousImage.type = "button";
    previousImage.textContent = "◀";
    previousImage.classList.add("arrow-left", "control");
    previousImage.onclick = () => isLeft();

    const nextImage = document.createElement("button");
    nextImage.type = "button";
    nextImage.textContent = "▶";
    nextImage.classList.add("arrow-right", "control");
    nextImage.onclick = () => isRight();

    // const numberShelf = fetch()


    const firstBookShelf = document.createElement("img");
    firstBookShelf.src = "http://localhost:3000/images/prateleira.png";
    firstBookShelf.classList.add("item", "current-item");
    firstBookShelf.alt = "firstBookShelf";

    const secondBookShelf = document.createElement("img");
    secondBookShelf.src = "http://localhost:3000/images/prateleira.png";
    secondBookShelf.classList.add("item");
    secondBookShelf.alt = "secondBookShelf";

    const thirdBookShelf = document.createElement("img");
    thirdBookShelf.src = "http://localhost:3000/images/prateleira.png";
    thirdBookShelf.classList.add("item");
    thirdBookShelf.alt = "thirdBookShelf";

    const ExBookShelf = document.createElement("img");
    ExBookShelf.src = "http://localhost:3000/images/prateleira.png";
    ExBookShelf.classList.add("item");
    ExBookShelf.alt = "ExBookShelf";

    const header =  document.createElement("div");
    header.classList.add("headerShelf");
    header.appendChild(previousImage);
    header.appendChild(title);
    header.appendChild(nextImage);

    gallery.appendChild(firstBookShelf);
    gallery.appendChild(secondBookShelf);
    gallery.appendChild(thirdBookShelf);
    gallery.appendChild(ExBookShelf);



    galleryWrapper.appendChild(gallery);

    container.appendChild(header);
    container.appendChild(galleryWrapper);

    return container;
}
