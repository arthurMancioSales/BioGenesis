// @author {Pedro}
import { isLeft, isRight } from "../modules/carrossel.js";
import loadBooks from "../modules/loadBooks.js";

export default function bookshelf() {
  const container = document.createElement("div");
  container.classList.add("container");

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

  const firstBookShelf = document.createElement("div");
  firstBookShelf.classList.add("item", "prateleira");
  firstBookShelf.alt = "firstBookShelf";

  const secondBookShelf = document.createElement("div");
  secondBookShelf.classList.add("item", "current-item", "prateleira");
  secondBookShelf.alt = "secondBookShelf";

  const thirdBookShelf = document.createElement("div");
  thirdBookShelf.classList.add("item", "prateleira");
  thirdBookShelf.alt = "thirdBookShelf";

  const Shelf = document.createElement("div");
  Shelf.classList.add("shelf");

  secondBookShelf.appendChild(Shelf);

  gallery.appendChild(firstBookShelf);
  gallery.appendChild(secondBookShelf);
  gallery.appendChild(thirdBookShelf);

  galleryWrapper.appendChild(gallery);

  container.appendChild(title);
  container.appendChild(previousImage);
  container.appendChild(nextImage);
  container.appendChild(galleryWrapper);

  loadBooks(1);

  return container;
}
