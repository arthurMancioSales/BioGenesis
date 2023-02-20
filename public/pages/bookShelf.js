// @author {Pedro}
// @coauthor {Thiago}

import { isLeft, isRight } from "../modules/carrossel.js";
import loadBooks from "../modules/loadBooks.js";

export default function bookshelf() {
  const container = document.createElement("div");
  container.classList.add("container", "backgrondShilf");

    const title = document.createElement("h1");
    title.className = "title_shiefbook";

  const subtitle = document.createElement("h2");
  subtitle.id = "subtitle"
  subtitle.innerText = 'a'
  subtitle.style.opacity = 0

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
      response.data.forEach((shelf, index) => {
        const Shelf = document.createElement("div");
        Shelf.classList.add("shelf");
        Shelf.dataset.id = shelf.id;

        const BookShelf = document.createElement("div");
        BookShelf.classList.add("item", "prateleira");
        BookShelf.alt = shelf.id;
        if (index === 0) {
          BookShelf.classList.add("current-item");
          title.textContent = shelf.name;
          loadBooks(shelf.id);
        }
        BookShelf.dataset.name = shelf.name;
        BookShelf.dataset.id = shelf.id;

        BookShelf.appendChild(Shelf);
        gallery.appendChild(BookShelf);
      });
    });

  const header = document.createElement("div");
  header.classList.add("headerShelf");
  header.appendChild(previousImage);
  header.appendChild(title);
  header.appendChild(subtitle);
  header.appendChild(nextImage);

  galleryWrapper.appendChild(gallery);
  container.appendChild(header);
  container.appendChild(galleryWrapper);

  return container;
}
