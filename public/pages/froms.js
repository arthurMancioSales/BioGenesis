import submitForm from "../modules/submitForm.js";
import { printTable } from "./list.js";

export default function form() {
    const root = document.createElement("div");

    const form = document.createElement("form");
    form.id = "my-form";
    form.setAttribute("id", "form");
    form.classList.add("ride");
    form.onsubmit = async (e) => {
        e.preventDefault();
        await submitForm();
        await printTable()
    };

    // Cria o primeiro grupo de campos
    const group1 = document.createElement("div");
    group1.id = "group-1";
    group1.className = "input-group";

    const page1 = document.createElement("h2");
    page1.innerHTML = "Capa";

    const textInput1Label = document.createElement("label");
    textInput1Label.htmlFor = "bookTitle";
    textInput1Label.textContent = "Titulo:";

    const textInput1 = document.createElement("input");
    textInput1.type = "text";
    textInput1.id = "bookTitle";
    textInput1.name = "bookTitle";

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

    const json = fetch(`http://localhost:5000/api/bookshelves`)
    .then((response) => {
        return response.json();
    })
    .then((response) => {        
        response.data.forEach((name, index) => {
            const dropdown1Option = document.createElement("option");
            dropdown1Option.value = `${name.name}`;
            dropdown1Option.textContent = `${name.name}`;
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

    form.appendChild(group1)

    // Cria os outros grupos de campos
    for (let i = 2; i <= 5; i++) {
        const group = document.createElement("div");
        group.id = `group-${i}`;
        group.className = "input-group";

        const pages = document.createElement("h2");
        pages.innerHTML = `Pagina ${i-1}`;

        const textInputLabel = document.createElement("label");
        textInputLabel.htmlFor = `textInput${i}`;
        textInputLabel.textContent = "Texto:";

        const textInput = document.createElement("textarea");
        textInput.id = `textInput${i}`;
        textInput.name = `textInput${i}`;

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
    }

    const submitButton = document.createElement('button');
    submitButton.setAttribute('class', 'submit-btn');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Upload';
    form.appendChild(submitButton)

    root.appendChild(form);


    /* document.querySelector(".bookWrapper").appendChild(root); */
    document.body.appendChild(root);
}