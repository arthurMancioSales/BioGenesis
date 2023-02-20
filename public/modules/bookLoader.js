// @author {Arthur}
// @coauthor {Thiago}

import { PageFlip } from "/vendor/page-flip.module.js";

export default async function loadSingleBook(bookID, title, color) {
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
  };
  wrapper.appendChild(closeIcon);

  const book = document.createElement("div");
  wrapper.appendChild(book);

  const pageCover = document.createElement("div");
  pageCover.classList.add("coverPage", "page");
  pageCover.dataset.density = "hard";
  book.appendChild(pageCover);

  const pageCoverContent = document.createElement("div");
  pageCoverContent.classList.add("page-content");
  pageCoverContent.style.backgroundColor = color;
  pageCover.appendChild(pageCoverContent);

  const bookTitle = document.createElement("h1");
  bookTitle.classList.add("bookTitle");
  bookTitle.innerText = title;
  pageCover.appendChild(bookTitle);
  pageCoverContent.appendChild(bookTitle);

  const openCover = document.createElement("div");
  openCover.classList.add("coverPage", "page");
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
        console.log(page)
        const index = document.createElement('li')
        index.classList.add('bookIndex')
        index.textContent = page.topic_name
        index.onclick = () => {
            pageFlip.turnToPage(2 * i + 1)
        }
        indexList.appendChild(index)
        pageIndex++

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("page");

    const imgDivContent = document.createElement("div");
    imgDivContent.classList.add("page-content", "imagePage", "pageLeft");
    imgDivContent.style.backgroundColor = "#f3e9d8";
    imgDiv.appendChild(imgDivContent);

        const img = document.createElement('img')
        img.src = `/uploads/${page.image}`
        img.classList.add("bookImage")
        imgDivContent.appendChild(img)

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

        const text = document.createElement('p')
        text.classList.add('bookText')
        text.textContent = page.content
        textDivContent.appendChild(text)

    const textIndex = document.createElement("p");
    textIndex.classList.add("pageFooter", "footerRight");
    textIndex.textContent = pageCount;
    textDivContent.appendChild(textIndex);
    pageCount++;

    book.appendChild(imgDiv);
    book.appendChild(textDiv);
  });

  const closeCover = document.createElement("div");
  closeCover.classList.add("coverPage", "page");
  closeCover.dataset.density = "hard";
  book.appendChild(closeCover);

  const closeCoverContent = document.createElement("div");
  closeCoverContent.classList.add("page-content");
  closeCoverContent.style.backgroundColor = color;
  closeCover.appendChild(closeCoverContent);

  document.querySelector("#root").appendChild(wrapper);

    const pageFlip = new PageFlip(book, {
        width: 886/2,
        height: 600,
        showCover: true
    })
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

  wrapper.onclick = (e) => {
    if (e.target == wrapper) {
      document.querySelector("#root").removeChild(wrapper);
      pageFlip.destroy();
    }
  };
}
