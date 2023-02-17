import { PageFlip } from "/vendor/page-flip.module.js"

export default async function loadBook(bookID) {
    const json = await fetch(`http://localhost:8080/api/books/${bookID}`)
    const pages = await json.json()
    console.log(pages)
   
    const wrapper = document.createElement('div')
    wrapper.classList.add('bookWrapper')

    const book = document.createElement('div')
    book.classList.add('book')
    wrapper.appendChild(book)

    const pageCover = document.createElement('div')
    pageCover.classList.add('coverPage', "page")
    pageCover.dataset.density = "hard"
    book.appendChild(pageCover)

    const bookTitle = document.createElement('h1')
    bookTitle.classList.add('bookTitle')
    bookTitle.innerText = bookID
    pageCover.appendChild(bookTitle)

    const openCover = document.createElement('div')
    openCover.classList.add('coverPage', "page")
    openCover.dataset.density = "hard"
    book.appendChild(openCover)

    const indexDiv = document.createElement('div')
    indexDiv.classList.add("page")
    book.appendChild(indexDiv)

    const indexTitle = document.createElement('h2')
    indexTitle.textContent = "Índice"
    indexTitle.classList.add("bookChapter")
    indexDiv.appendChild(indexTitle)
    
    const indexList = document.createElement('ol')
    indexDiv.appendChild(indexList)
    
    pages.forEach(page => {
        console.log(page)
        const index = document.createElement('li')
        index.textContent = page.topico
        indexList.appendChild(index)

        const imgDiv = document.createElement('div')
        imgDiv.classList.add("page")
        imgDiv.style.display = "flex    "
        const img = document.createElement('img')
        img.src = '/images/prateleira.png'
        img.classList.add("bookImage")
        imgDiv.appendChild(img)

        const textDiv = document.createElement('div')
        textDiv.classList.add("page")
        const text = document.createElement('p')
        text.textContent = page.conteudo
        textDiv.appendChild(text)

        book.appendChild(imgDiv)
        book.appendChild(textDiv)
    });

    const closeCover = document.createElement('div')
    closeCover.classList.add('coverPage', "page")
    closeCover.dataset.density = "hard"
    book.appendChild(closeCover)

    document.querySelector("#root").appendChild(wrapper)

    const pageFlip = new PageFlip(book, {
        width: 886/2, // required parameter - base page width
        height: 600, // required parameter - base page height
        showCover: true
    })
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    wrapper.onclick = (e) => {
        if (e.target == wrapper) {
            document.querySelector("#root").removeChild(wrapper)
            pageFlip.destroy()
        }
    }
}


