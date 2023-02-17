// @author {Pedro}

import { isLeft, isRight } from "../modules/carrossel.js";
import loadBook from "../modules/bookLoader.js";

export default function bookshelf() {
    const container = document.createElement("div");
    container.classList.add('container', "backgrondShilf");

    const title = document.createElement("h1");
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

    const json = fetch(`http://localhost:5000/api/bookshelves`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            response.forEach((shelf, index) => {
                console.log(shelf);
                const BookShelf = document.createElement("img");
                BookShelf.src = "/images/prateleira.png";
                BookShelf.classList.add("item");
                BookShelf.alt = shelf.id;
                BookShelf.onclick = async (e) => {
                    console.log('teste')
                    await loadBook(shelf.id)
                }
                if (index === 0) {
                    BookShelf.classList.add("current-item");
                    title.textContent = shelf.name

                }
                BookShelf.dataset.name = shelf.name;

                gallery.appendChild(BookShelf);
            });
        });

    const header = document.createElement("div");
    header.classList.add("headerShelf");
    header.appendChild(previousImage);
    header.appendChild(title);
    header.appendChild(nextImage);

    galleryWrapper.appendChild(gallery);
    container.appendChild(header);
    container.appendChild(galleryWrapper);
    return container;
}
