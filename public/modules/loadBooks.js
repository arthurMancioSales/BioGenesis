// @author {Thiago}

import collapsableMenu from "./collapsableMenu.js";
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

function renderDivs(response) {
    const data = response.data;
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
    Book.dataset.id = item.book_id;
    Book.dataset.color = color;
    Book.innerText = item.book_name;
    Book.dataset.author = item.username;
    Book.classList.add("Livro");
    Book.alt = "Book";
    Book.onclick = () => {
        loadSingleBook(item.book_id, item.book_name, color, item.username);
    };
    Book.onmouseover = (e) => {
        const subtitle = document.querySelector("#subtitle");
        subtitle.innerText = e.target.outerText;
        subtitle.style.opacity = 1;
    };
    Book.onmouseleave = (e) => {
        const subtitle = document.querySelector("#subtitle");
        subtitle.style.userSelect = "none";
        subtitle.style.opacity = 0;
    };

    bookshelf.appendChild(Book);
}

function randomColor() {
    const hue = Math.random() * 360;
    const saturation = Math.random() * 100;
    const lightness = Math.random() * 100;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
