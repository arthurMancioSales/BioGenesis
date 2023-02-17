export default async function loadBooks(id) {
  // console.log(id);

  await fetch(`http://localhost:8080/api/bookshelves/${id}/books`)
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

  // console.log(bookshelf);

  const color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);

  const Book = document.createElement("div");

  Book.style.backgroundColor = color;
  Book.classList.add("bookSpine");
  Book.dataset.id = item.id;
  Book.innerText = item.nome;
  Book.classList.add("Livro");
  Book.alt = "Book";

  bookshelf.appendChild(Book);
}
