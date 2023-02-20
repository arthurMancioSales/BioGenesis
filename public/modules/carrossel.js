import loadBooks from "./loadBooks.js";

// @author {Pedro}
let currentItem = 0;

export function isLeft() {
  const items = document.querySelectorAll(".item");
  const maxItems = items.length;
  const title = document.querySelector(".title_shiefbook");

  items[currentItem].firstChild.innerHTML = "";

  currentItem -= 1;

  if (currentItem >= maxItems) {
    currentItem = 0;
  }
  if (currentItem < 0) {
    currentItem = maxItems - 1;
  }

  items.forEach((item) => item.classList.remove("current-item"));

  items[currentItem].scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });

  items[currentItem].classList.add("current-item");

  const titleNew = document.querySelector(".current-item");

  console.log(titleNew);

  loadBooks(titleNew.dataset.id);

  title.innerHTML = titleNew.dataset.name;
}

// @author {Pedro}
export function isRight() {
  const items = document.querySelectorAll(".item");
  const maxItems = items.length;
  const title = document.querySelector(".title_shiefbook");

  items[currentItem].firstChild.innerHTML = "";

  currentItem += 1;

  if (currentItem >= maxItems) {
    currentItem = 0;
  }

  if (currentItem < 0) {
    currentItem = maxItems - 1;
  }

  items.forEach((item) => item.classList.remove("current-item"));

  items[currentItem].scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });

  items[currentItem].classList.add("current-item");

  const titleNew = document.querySelector(".current-item");

  loadBooks(titleNew.dataset.id);

  title.innerHTML = titleNew.dataset.name;
}
