import submitForm from "../modules/submitForm.js";
import { printTable } from "./list.js";
import { editPages } from "../modules/editPages.js";

export default function form(bookPages = 0, bookCape = 0) {
    console.log(bookPages, bookCape)
    const root = document.createElement("div");
    
    const form = document.createElement("form");
    form.id = "my-form";
    form.setAttribute("id", "form");
    form.classList.add("ride");
    form.classList.add("ride");
    form.onsubmit = async (e) => {
        e.preventDefault();
        await submitForm();
        await printTable()
    };

    // Cria o primeiro grupo de campos
    const group1 = document.createElement("div");
    group1.id = "group-1";
    group1.classList = "input-group";

    const page1 = document.createElement("h2");
    page1.innerHTML = "Capa";

    const textInput1Label = document.createElement("label");
    textInput1Label.htmlFor = "bookTitle";
    textInput1Label.textContent = "Titulo:";

    const textInput1 = document.createElement("input");
    textInput1.type = "text";
    textInput1.id = "bookTitle";
    textInput1.name = "bookTitle";
    if(bookCape !== 0){
        textInput1.value = `${bookCape.book_name}`;
    }
    
    const imageUpload1Label = document.createElement("label");
    imageUpload1Label.htmlFor = "coverImage";
    imageUpload1Label.textContent = "Imagem:";

    const imageUpload1 = document.createElement("input");
    imageUpload1.type = "file";
    imageUpload1.id = "coverImage";
    imageUpload1.name = "coverImage";

    const dropdown1Label = document.createElement("label");
    dropdown1Label.htmlFor = "bookshelfName";
    dropdown1Label.textContent = "Dropdown:";

    const dropdown1 = document.createElement("select");
    dropdown1.id = "bookshelfName";
    dropdown1.name = "bookshelfName";

    const btnFormBook = document.createElement("button");
    btnFormBook.id = "btnFormBook";
    btnFormBook.innerText = "adicionar Pagina"
    btnFormBook.setAttribute('type', 'button');
    btnFormBook.onclick = () => editPages();


    const json = fetch(`http://localhost:5000/api/bookshelves`)
    .then((response) => {
        return response.json();
    })
    .then((response) => {    
        console.log(response)    
        response.data.forEach((name, index) => {
            const dropdown1Option = document.createElement("option");
            dropdown1Option.value = `${name.name}`;
            dropdown1Option.textContent = `${name.name}`;

            if(bookCape !== 0 && bookCape.bookshelf_name == dropdown1Option.value){
                dropdown1Option.selected = true;
            }
            dropdown1.appendChild(dropdown1Option);
            
        })
    });

    group1.appendChild(page1);
    group1.appendChild(textInput1Label);
    group1.appendChild(textInput1);
    group1.appendChild(imageUpload1Label);
    group1.appendChild(imageUpload1);
    group1.appendChild(dropdown1Label);
    group1.appendChild(dropdown1);

    form.appendChild(group1);

    // Cria os outros grupos de campos
    const group = document.createElement("div");
    group.id = `group-2`;
    group.classList.add("input-group");

    const pages = document.createElement("h2");
    pages.innerHTML = `Pagina 1`;

    const textInputLabel = document.createElement("label");
    textInputLabel.htmlFor = `textInput2`;
    textInputLabel.textContent = "Texto:";

    const textInput = document.createElement("textarea");
    textInput.id = `textInput2`;
    textInput.name = `textInput2`;

    const imageUploadLabel = document.createElement("label");
    imageUploadLabel.htmlFor = `imageUpload2`;
    imageUploadLabel.textContent = "Imagem:";

    const imageUpload = document.createElement("input");
    imageUpload.type = "file";
    imageUpload.id = `imageUpload2`;
    imageUpload.name = `imageUpload2`;

    const dropdownLabel = document.createElement("label");
    dropdownLabel.htmlFor = `dropdown2`;
    dropdownLabel.textContent = "Dropdown:";

    const dropdown = document.createElement("select");
    dropdown.id = `dropdown2`;
    dropdown.name = `dropdown2`;

    const dropdownOption0 = document.createElement("option");
    dropdownOption0.value = ``;
    dropdownOption0.textContent = "Selecione uma opção"; 

    const dropdownOption1 = document.createElement("option");
    dropdownOption1.value = `alimentação`;
    dropdownOption1.textContent = "alimentação";

    const dropdownOption2 = document.createElement("option");
    dropdownOption2.value = `habitat`;
    dropdownOption2.textContent = "habitat";

    const dropdownOption3 = document.createElement("option");
    dropdownOption3.value = `curiosidades`;
    dropdownOption3.textContent = "curiosidades";

    const dropdownOption4 = document.createElement("option");
    dropdownOption4.value = `comportamento`;
    dropdownOption4.textContent = "comportamento";


    dropdown.appendChild(dropdownOption0);
    dropdown.appendChild(dropdownOption1);
    dropdown.appendChild(dropdownOption2);
    dropdown.appendChild(dropdownOption3);
    dropdown.appendChild(dropdownOption4);

    group.appendChild(pages);
    group.appendChild(dropdownLabel);
    group.appendChild(dropdown);
    group.appendChild(textInputLabel);
    group.appendChild(textInput);
    group.appendChild(imageUploadLabel);
    group.appendChild(imageUpload);

    form.appendChild(group);


    for (let i = 3; i <= 5; i++) {
        const group = document.createElement("div");
        group.id = `group-${i}`;
        group.classList.add("opacity0", "input-group");

        const pages = document.createElement("h2");
        pages.innerHTML = `Pagina ${i - 1}`;

        const textInputLabel = document.createElement("label");
        textInputLabel.htmlFor = `textInput${i}`;
        textInputLabel.textContent = "Texto:";

        const textInput = document.createElement("textarea");
        textInput.id = `textInput${i}`;
        textInput.name = `textInput${i}`;
        if(bookPages !== 0){
            textInput.value = `${bookPages[i-2].content}`;
        }

        const imageUploadLabel = document.createElement("label");
        imageUploadLabel.htmlFor = `imageUpload${i}`;
        imageUploadLabel.textContent = "Imagem:";

        const imageUpload = document.createElement("input");
        imageUpload.type = "file";
        imageUpload.id = `imageUpload${i}`;
        imageUpload.name = `imageUpload${i}`;

        const dropdownLabel = document.createElement("label");
        dropdownLabel.htmlFor = `dropdown${i}`;
        dropdownLabel.textContent = "Dropdown:";

        const dropdown = document.createElement("select");
        dropdown.id = `dropdown${i}`;
        dropdown.name = `dropdown${i}`;

        const dropdownOption0 = document.createElement("option");
        dropdownOption0.value = ``;
        dropdownOption0.textContent = "Selecione uma opção"; 

        const dropdownOption1 = document.createElement("option");
        dropdownOption1.value = `alimentação`;
        dropdownOption1.textContent = "alimentação";

        const dropdownOption2 = document.createElement("option");
        dropdownOption2.value = `habitat`;
        dropdownOption2.textContent = "habitat";

        const dropdownOption3 = document.createElement("option");
        dropdownOption3.value = `curiosidades`;
        dropdownOption3.textContent = "curiosidades";

        const dropdownOption4 = document.createElement("option");
        dropdownOption4.value = `comportamento`;
        dropdownOption4.textContent = "comportamento";

        dropdown.appendChild(dropdownOption0);
        dropdown.appendChild(dropdownOption1);
        dropdown.appendChild(dropdownOption2);
        dropdown.appendChild(dropdownOption3);
        dropdown.appendChild(dropdownOption4);

        if(bookPages !== 0){
            dropdown.value = bookPages[i-2].topic_name
        }

        group.appendChild(pages);
        group.appendChild(textInputLabel);
        group.appendChild(textInput);
        group.appendChild(dropdownLabel);
        group.appendChild(dropdown);
        group.appendChild(imageUploadLabel);
        group.appendChild(imageUpload);

        form.appendChild(group);
    }

    const submitButton = document.createElement('button');
    submitButton.setAttribute('class', 'submit-btn button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Upload';
    submitButton.onclick = () =>{
        submitForm();
    }
    
    form.appendChild(submitButton)
    form.appendChild(btnFormBook);

    root.appendChild(form);

    document.querySelector(".bookWrapper").appendChild(root);
}