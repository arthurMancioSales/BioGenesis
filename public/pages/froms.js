import submitForm  from "../modules/submitForm.js";
import { printTable } from "./list.js";
import { editPages } from "../modules/editPages.js";

export default function form(bookPages = 0, bookCape = 0) {
    console.log(bookPages, bookCape)
    const root = document.createElement("div");

    const form = document.createElement("form");
    form.id = "form";
    form.classList.add("ride");
    form.classList.add("ride");
    form.onsubmit = async (e) => {
        e.preventDefault();
        await submitForm();
        await printTable();
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
    textInput1.maxLength = "15"
    textInput1.id = "bookTitle";
    textInput1.name = "bookTitle";
    textInput1.required = true;

   
    const imageUpload1Label = document.createElement("label");
    imageUpload1Label.htmlFor = "coverImage";
    imageUpload1Label.textContent = "Imagem:";

    const imageUpload1 = document.createElement("input");
    imageUpload1.type = "file";
    imageUpload1.id = "coverImage";
    imageUpload1.name = "coverImage";
    imageUpload1.accept = "image/*";
    imageUpload1.required = true;

    const dropdown1Label = document.createElement("label");
    dropdown1Label.htmlFor = "bookshelfName";
    dropdown1Label.textContent = "Dropdown:";

    const dropdown1 = document.createElement("select");
    dropdown1.id = "bookshelfName";
    dropdown1.name = "bookshelfName";
    dropdown1.required = true;

    const btnFormBook = document.createElement("button");
    btnFormBook.id = "btnFormBook";
    btnFormBook.innerText = "adicionar Pagina";
    btnFormBook.setAttribute("type", "button");
    btnFormBook.onclick = () => {
        createIput();
    };

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
            });
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
    textInput.maxLength = "930"
    textInput.id = `textInput2`;
    textInput.name = `textInput2`;
    textInput.required = true;


    const imageUploadLabel = document.createElement("label");
    imageUploadLabel.htmlFor = `imageUpload2`;
    imageUploadLabel.textContent = "Imagem:";

    const imageUpload = document.createElement("input");
    imageUpload.type = "file";
    imageUpload.id = `imageUpload2`;
    imageUpload.name = `imageUpload2`;
    imageUpload.accept = "image/*";
    imageUpload.required = true;


    const dropdownLabel = document.createElement("label");
    dropdownLabel.htmlFor = `dropdown2`;
    dropdownLabel.textContent = "Dropdown:";

    const dropdown = document.createElement("select");
    dropdown.id = `dropdown2`;
    dropdown.name = `dropdown2`;
    dropdown.className = "selectDropdown";
    dropdown.required = true;
    dropdown.onclick = () => {
        validateInputSelect()
    }; 


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

    for (let i = 3; i <= 5; i++) {}

    const submitButton = document.createElement("button");
    submitButton.setAttribute("class", "submit-btn");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Upload";

    form.appendChild(submitButton);
    form.appendChild(btnFormBook);

    root.appendChild(form);

    return form
}

function createIput() {
    const counter = document.querySelectorAll(".input-group").length + 1;
    if (counter <= 5) {
        const form = document.querySelector("#form");

        const group = document.createElement("div");
        group.id = `group-${counter}`;
        group.classList.add("input-group");

        const pages = document.createElement("h2");
        pages.innerHTML = `Pagina ${counter - 1}`;

        const textInputLabel = document.createElement("label");
        textInputLabel.htmlFor = `textInput${counter}`;
        textInputLabel.textContent = "Texto:";

        const textInput = document.createElement("textarea");
        textInput.maxLength = "930"

        textInput.id = `textInput${counter}`;
        textInput.name = `textInput${counter}`;
     
        const imageUploadLabel = document.createElement("label");
        imageUploadLabel.htmlFor = `imageUpload${counter}`;
        imageUploadLabel.textContent = "Imagem:";
    

        const imageUpload = document.createElement("input");
        imageUpload.type = "file";
        imageUpload.id = `imageUpload${counter}`;
        imageUpload.name = `imageUpload${counter}`;
        imageUpload.accept = "image/*";

        const dropdownLabel = document.createElement("label");
        dropdownLabel.htmlFor = `dropdown${counter}`;
        dropdownLabel.textContent = "Dropdown:";

        const dropdown = document.createElement("select");
        dropdown.id = `dropdown${counter}`;
        dropdown.className = "selectDropdown";
        dropdown.name = `dropdown${counter}`;
        dropdown.onclick = () => {
            validateInputSelect()
        }; 

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

        // form.appendChild(group);
        form.insertBefore(group, document.querySelector(".submit-btn"));
    }
}

function validateInputSelect() {
    const mySelects = document.querySelectorAll('.selectDropdown');
    console.log(mySelects.length);
    mySelects.forEach(select => {
        console.log(select.value);
        if (select.value !== "") {
            const selectedId = select.id;
            for (let i = 2; i <= mySelects.length+1; i++) {
                const nextSelect = document.getElementById(`dropdown${i}`);
                if (selectedId !== nextSelect.id) {
                    nextSelect.querySelectorAll('option').forEach(option => {
                        if (option.value == select.value) {
                        option.disabled = true;
                        }
                        //  else {
                        // option.disabled = false;
                        // }
                    });
                };
            };
        };
    });
};

    form.appendChild(btnFormBook);

    root.appendChild(form);

    document.querySelector(".bookWrapper").appendChild(root);
}
