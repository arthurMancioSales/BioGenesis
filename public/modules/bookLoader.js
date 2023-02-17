// @author {Arthur}
import { PageFlip } from "/vendor/page-flip.module.js"

export default async function loadSingleBook(bookID) {
    const json = await fetch(`http://localhost:5000/api/books/${bookID}`)
    const pages = await json.json()

    let pageCount = 1

    const wrapper = document.createElement('div')
    wrapper.classList.add('bookWrapper')

    const closeIcon = document.createElement('i')
    closeIcon.classList.add('fa-solid', 'fa-xmark', 'closeIcon')
    closeIcon.onclick = () => {
        document.querySelector("#root").removeChild(wrapper)
        pageFlip.destroy()
    }
    wrapper.appendChild(closeIcon)

    const book = document.createElement('div')
    wrapper.appendChild(book)

    const pageCover = document.createElement('div')
    pageCover.classList.add('coverPage', "page")
    pageCover.dataset.density = "hard"
    book.appendChild(pageCover)

    const pageCoverContent = document.createElement('div')
    pageCoverContent.classList.add("page-content")
    pageCover.appendChild(pageCoverContent)

    const bookTitle = document.createElement('h1')
    bookTitle.classList.add('bookTitle')
    bookTitle.innerText = bookID
    pageCover.appendChild(bookTitle)
    pageCoverContent.appendChild(bookTitle)

    const openCover = document.createElement('div')
    openCover.classList.add('coverPage', "page")
    openCover.dataset.density = "hard"
    book.appendChild(openCover)

    const indexDiv = document.createElement('div')
    indexDiv.classList.add("page")
    book.appendChild(indexDiv)
    
    const indexDivContent = document.createElement('div')
    indexDivContent.classList.add("page-content", 'pageRight')
    indexDiv.appendChild(indexDivContent)

    const indexTitle = document.createElement('h2')
    indexTitle.textContent = "Índice"
    indexTitle.classList.add("bookChapter")
    indexDivContent.appendChild(indexTitle)

    const indexList = document.createElement('ol')
    indexList.start = '3'
    indexList.classList.add('indexList')
    indexDivContent.appendChild(indexList)
    
    const indexListIndex = document.createElement('p')
    indexListIndex.classList.add('pageFooter', 'footerRight')
    indexListIndex.textContent = pageCount
    indexDivContent.appendChild(indexListIndex)
    pageCount++
    let pageIndex = 2

    pages.forEach((page, i) => {
        const index = document.createElement('li')
        index.classList.add('bookIndex')
        index.textContent = page.topico
        index.onclick = () => {
            pageFlip.turnToPage(2 * i + 1)
        }
        indexList.appendChild(index)
        pageIndex++

        const imgDiv = document.createElement('div')
        imgDiv.classList.add("page")

        const imgDivContent = document.createElement('div')
        imgDivContent.classList.add("page-content", 'imagePage', 'pageLeft')
        imgDiv.appendChild(imgDivContent)

        const img = document.createElement('img')
        img.src = '/images/prateleira.png'
        img.classList.add("bookImage")
        imgDivContent.appendChild(img)

        const imgIndex = document.createElement('p')
        imgIndex.classList.add('pageFooter', 'footerLeft')
        imgIndex.textContent = pageCount
        imgDivContent.appendChild(imgIndex)
        pageCount++

        const textDiv = document.createElement('div')
        textDiv.classList.add("page")
        
        const textDivContent = document.createElement('div')
        textDivContent.classList.add("page-content", 'pageRight')
        textDiv.appendChild(textDivContent)
        
        const title = document.createElement('h2')
        title.classList.add('bookChapter')
        title.textContent = page.topico
        textDivContent.appendChild(title)

        const text = document.createElement('p')
        text.classList.add('bookText')
        text.textContent = page.conteudo
        textDivContent.appendChild(text)

        const textIndex = document.createElement('p')
        textIndex.classList.add('pageFooter', 'footerRight')
        textIndex.textContent = pageCount
        textDivContent.appendChild(textIndex)
        pageCount++

        book.appendChild(imgDiv)
        book.appendChild(textDiv)
    });

    const closeCover = document.createElement('div')
    closeCover.classList.add('coverPage', "page")
    closeCover.dataset.density = "hard"
    book.appendChild(closeCover)

    document.querySelector("#root").appendChild(wrapper)

    const pageFlip = new PageFlip(book, {
        width: 886/2,
        height: 600,
        showCover: true
    })
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    pageFlip.on('changeState', (e) => {
        console.log(e)
    })

    wrapper.onclick = (e) => {
        if (e.target == wrapper) {
            document.querySelector("#root").removeChild(wrapper)
            pageFlip.destroy()
        }
    }
}


