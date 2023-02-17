// @author {Pedro}
let currentItem = 0;

export function isLeft() {
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

// @author {Pedro}
export function isRight() {
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