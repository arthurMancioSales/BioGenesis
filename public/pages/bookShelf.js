// @author {Pedro}
import { isLeft, isRight } from "../modules/carrossel.js";

export default function bookshelf() {
    const container = document.createElement("div");
    container.classList.add('container')

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

    const firstBookShelf = document.createElement("img");
    firstBookShelf.classList.add("item", "current-item");
    firstBookShelf.alt = "firstBookShelf";

    const secondBookShelf = document.createElement("img");
    secondBookShelf.classList.add("item", "current-item");
    secondBookShelf.alt = "secondBookShelf";

    const thirdBookShelf = document.createElement("img");
    thirdBookShelf.classList.add("item", "current-item");
    thirdBookShelf.alt = "thirdBookShelf";

    gallery.appendChild(firstBookShelf);
    gallery.appendChild(secondBookShelf);
    gallery.appendChild(thirdBookShelf);

    galleryWrapper.appendChild(gallery);

    container.appendChild(title);
    container.appendChild(previousImage);
    container.appendChild(nextImage);
    container.appendChild(galleryWrapper);

    return container;
}
