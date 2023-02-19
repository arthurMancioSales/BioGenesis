import loadSingleBook from "./bookLoader.js";

export default async function loadBooks(id) {
  // console.log(id);

  await fetch(`http://localhost:5000/api/bookshelves/${id}/books`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderDivs(data);
    });
}

function renderDivs(response) {
  const data = response.data
  console.log(data);
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
  Book.dataset.id = item.book_id;
  Book.innerText = item.book_name;
  Book.dataset.author = item.username
  Book.classList.add("Livro");
  Book.alt = "Book";
  Book.onclick = () => {
    loadSingleBook(item.book_id)
  }
  Book.onmouseover = (e) => {
		const subtitle = document.querySelector("#subtitle")
		subtitle.innerText = e.target.outerText
  }
	Book.onmouseleave = (e) => {
		const subtitle = document.querySelector("#subtitle")
		subtitle.innerText = ""
  }

  bookshelf.appendChild(Book);
}
