// @author {Thiago}

import loadSingleBook from "./bookLoader.js";

export default async function loadBooks(id) {
  await fetch(`http://localhost:5000/api/bookshelves/${id}/books`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderDivs(data);
    });
}

function renderDivs(data) {
  data.forEach((element) => {
    createBookSpine(element);
  });
}

function createBookSpine(item) {
  const bookshelf = document.querySelector(".current-item div");

  const color = randomColor();

  const Book = document.createElement("div");

  Book.style.backgroundColor = color;
  Book.classList.add("bookSpine");
  Book.dataset.id = item.id;
  Book.dataset.color = color;
  Book.innerText = item.nome;
  Book.classList.add("Livro");
  Book.alt = "Book";
  Book.onclick = () => {
    loadSingleBook(item.id, item.nome, color);
  };

  bookshelf.appendChild(Book);
}

function randomColor() {
  const hue = Math.random() * 360;
  const saturation = Math.random() * 100;
  const lightness = Math.random() * 100;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
