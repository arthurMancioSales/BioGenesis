export default function bookshelf() {
    const container = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "Estantes";
    title.className = "title_shiefbook";

    const galleryWrapper = document.createElement("div");
    galleryWrapper.className = "gallery-wrapper";

    const gallery = document.createElement("div");
    gallery.className = "gallery"

    const previousImage = document.createElement("button");
    previousImage.type = "button";
    previousImage.textContent = "◀";
    previousImage.className = "arrow-left";
    previousImage.className = "control";
    previousImage.onclick = () => isLeft();


    const nextImage = document.createElement("button");
    nextImage.type = "button";
    nextImage.textContent = "▶";
    nextImage.className = "arrow-right";
    nextImage.className = "control";
    nextImage.onclick = () => isRight();

    const firstBookShelf = document.createElement("img");
    firstBookShelf.className = "item";
    firstBookShelf.className = "current-item";
    firstBookShelf.alt = "firstBookShelf";

    const secondBookShelf = document.createElement("img");
    secondBookShelf.className = "item";
    secondBookShelf.className = "current-item";
    secondBookShelf.alt = "secondBookShelf";

    const thirdBookShelf = document.createElement("img");
    thirdBookShelf.className = "item";
    thirdBookShelf.className = "current-item";
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


function isLeft() {
    let currentItem = 0;
    const items = document.querySelectorAll(".item");
    const maxItems = items.length;
    const title = document.querySelector(".title_shiefbook");
    currentItem -= 1;
    title.innerHTML = `Estante ${currentItem + 1}`
    if (currentItem >= maxItems) {
        currentItem = 0;
        title.innerHTML = `Estante ${currentItem + 1}`
    }

    if (currentItem < 0) {
        currentItem = maxItems - 1;
        title.innerHTML = `Estante ${currentItem + 1}`
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center"
    });

    items[currentItem].classList.add("current-item");
}

function isRight() {
    let currentItem = 0;
    const items = document.querySelectorAll(".item");
    const maxItems = items.length;
    const title = document.querySelector(".title_shiefbook");
    currentItem += 1;
    title.innerHTML = `Estante ${currentItem + 1}`
    if (currentItem >= maxItems) {
        currentItem = 0;
        title.innerHTML = `Estante ${currentItem + 1}`
    }

    if (currentItem < 0) {
        currentItem = maxItems - 1;
        title.innerHTML = `Estante ${currentItem + 1}`
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center"
    });

    items[currentItem].classList.add("current-item");
}