// @author {Arthur}
// @coauthor {Thiago}

import collapsableMenu from "../pages/collapsableMenu.js";
import { PageFlip } from "/vendor/page-flip.module.js";

export default async function loadSingleBook(bookID, title, color, author) {
    const json = await fetch(`http://localhost:5000/api/books/${bookID}`);
    const pages = await json.json();
    let pageCount = 1;

    const wrapper = document.createElement("div");
    wrapper.classList.add("bookWrapper");

    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fa-solid", "fa-xmark", "closeIcon");
    closeIcon.onclick = () => {
        document.querySelector("#root").removeChild(wrapper);
        pageFlip.destroy();
        collapsableMenu()
    };
    wrapper.appendChild(closeIcon);

    const book = document.createElement("div");
    wrapper.appendChild(book);

    const pageCover = document.createElement("div");
    pageCover.classList.add("page");
    pageCover.dataset.density = "hard";
    pageCover.style.backgroundColor = color;
    book.appendChild(pageCover);

    const pageCoverContent = document.createElement("div");
    pageCoverContent.classList.add("coverPage");
    pageCoverContent.style.backgroundColor = color;
    pageCover.appendChild(pageCoverContent);

    const bookTitle = document.createElement("h1");
    bookTitle.classList.add("bookTitle");
    bookTitle.innerText = title;
    pageCover.appendChild(bookTitle);
    pageCoverContent.appendChild(bookTitle);

    const bookCoverImage = document.createElement("img");
    bookCoverImage.classList.add("bookCoverImage");
    bookCoverImage.src = `/uploads/${pages[0].cover_image}`;
    bookCoverImage.onerror = (e) => {
        bookCoverImage.onerror = null
        e.target.src = ""
    }
    pageCoverContent.appendChild(bookCoverImage);

    const bookAuthor = document.createElement("h3");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.innerText = `por \n ${author}`;
    pageCoverContent.appendChild(bookAuthor);

    const openCover = document.createElement("div");
    openCover.classList.add("page");
    openCover.dataset.density = "hard";
    book.appendChild(openCover);

    const openCoverContent = document.createElement("div");
    openCoverContent.classList.add("page-content");
    openCoverContent.style.backgroundColor = color;
    openCover.appendChild(openCoverContent);

    const indexDiv = document.createElement("div");
    indexDiv.classList.add("page");
    book.appendChild(indexDiv);

    const indexDivContent = document.createElement("div");
    indexDivContent.classList.add("page-content", "pageRight");
    indexDivContent.style.backgroundColor = "#f3e9d8";
    indexDiv.appendChild(indexDivContent);

    const indexTitle = document.createElement("h2");
    indexTitle.textContent = "Índice";
    indexTitle.classList.add("bookChapter");
    indexDivContent.appendChild(indexTitle);

    const indexList = document.createElement("ol");
    indexList.start = "3";
    indexList.classList.add("indexList");
    indexDivContent.appendChild(indexList);

    const indexListIndex = document.createElement("p");
    indexListIndex.classList.add("pageFooter", "footerRight");
    indexListIndex.textContent = pageCount;
    indexDivContent.appendChild(indexListIndex);
    pageCount++;
    let pageIndex = 2;

    pages.forEach((page, i) => {
        const index = document.createElement("li");
        index.classList.add("bookIndex");
        index.textContent = page.topic_name;
        index.onclick = () => {
            pageFlip.turnToPage(2 * i + 1);
        };
        indexList.appendChild(index);
        pageIndex++;

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("page");

        const imgDivContent = document.createElement("div");
        imgDivContent.classList.add("page-content", "imagePage", "pageLeft");
        imgDivContent.style.backgroundColor = "#f3e9d8";
        imgDiv.appendChild(imgDivContent);

        const img = document.createElement("img");
        img.src = `/uploads/${page.image}`;
        img.onerror = (e) => {
            img.onerror = null
            img.src = ""
        }
        img.classList.add("bookImage");
        imgDivContent.appendChild(img);

        const imgIndex = document.createElement("p");
        imgIndex.classList.add("pageFooter", "footerLeft");
        imgIndex.textContent = pageCount;
        imgDivContent.appendChild(imgIndex);
        pageCount++;

        const textDiv = document.createElement("div");
        textDiv.classList.add("page");

        const textDivContent = document.createElement("div");
        textDivContent.classList.add("page-content", "pageRight");
        textDivContent.style.backgroundColor = "#f3e9d8";
        textDiv.appendChild(textDivContent);

        const title = document.createElement("h2");
        title.classList.add("bookChapter");
        title.textContent = page.topic_name;
        textDivContent.appendChild(title);

        const text = document.createElement("p");
        text.classList.add("bookText");
        text.textContent = page.content;
        textDivContent.appendChild(text);

        const textIndex = document.createElement("p");
        textIndex.classList.add("pageFooter", "footerRight");
        textIndex.textContent = pageCount;
        textDivContent.appendChild(textIndex);
        pageCount++;

        book.appendChild(imgDiv);
        book.appendChild(textDiv);
    });

    const closeCover = document.createElement("div");
    closeCover.classList.add("page");
    closeCover.dataset.density = "hard";
    book.appendChild(closeCover);

    const closeCoverContent = document.createElement("div");
    closeCoverContent.classList.add("coverPage");
    closeCoverContent.style.backgroundColor = color;
    closeCover.appendChild(closeCoverContent);

    document.querySelector("#root").appendChild(wrapper);

    const pageFlip = new PageFlip(book, {
        width: 886 / 2,
        height: 600,
        showCover: true,
    });
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    wrapper.onclick = (e) => {
        if (e.target == wrapper) {
            document.querySelector("#root").removeChild(wrapper);
            pageFlip.destroy();
            collapsableMenu()
        }
    };
}
