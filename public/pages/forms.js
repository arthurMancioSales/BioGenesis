import submitForm from "../modules/submitForm.js";
import { printTable } from "./list.js";

export default function form() {
    const root = document.createElement("div");

    const form = document.createElement("form");
    form.id = "form";
    form.classList.add("ride");
    form.onsubmit = async (e) => {
        const uploadButton = document.querySelector("#uploadButton");
        uploadButton.classList.add("modalButtonDisabled");
        e.preventDefault();
        const submitResult = await submitForm();
        if (submitResult.status == 200) {
            await printTable();
            uploadButton.classList.remove("modalButtonDisabled");
            alert("Livro criado com sucesso");
            document.querySelector(".bookWrapper").remove();
        } else {
            uploadButton.classList.remove("modalButtonDisabled");
            const error = await submitResult.json();
            alert(error.error);
        }
    };

    const modalTitle = document.createElement("h2");
    modalTitle.innerHTML = "CRIAR LIVRO";
    modalTitle.classList.add("headerText");
    modalTitle.style.fontSize = "24px";

    form.appendChild(modalTitle);

    // Cria o primeiro grupo de campos
    const group1 = document.createElement("div");
    group1.id = "group-1";
    group1.classList = "input-group";

    const page1 = document.createElement("h2");
    page1.innerHTML = "Capa";

    const textInput1Label = document.createElement("label");
    textInput1Label.classList.add("required");
    textInput1Label.htmlFor = "bookTitle";
    textInput1Label.textContent = "Título do livro:";

    const textInput1 = document.createElement("input");
    textInput1.type = "text";
    textInput1.maxLength = "15";
    textInput1.id = "bookTitle";
    textInput1.name = "bookTitle";
    textInput1.required = true;

    const coverImageDiv = document.createElement("div");
    coverImageDiv.classList.add("imagePreviewDiv");

    const coverImageFigure = document.createElement("figure");

    const coverImagePreview = document.createElement("img");
    coverImagePreview.classList.add("imagePreview");
    coverImagePreview.id = "coverImagePreview";

    coverImageFigure.appendChild(coverImagePreview);

    const coverImageCaption = document.createElement("figcaption");
    coverImageCaption.textContent = "Imagem selecionada";
    coverImageFigure.appendChild(coverImageCaption);

    const imageUpload1Label = document.createElement("label");
    imageUpload1Label.classList.add("required");
    imageUpload1Label.htmlFor = "coverImage";
    imageUpload1Label.textContent = "Capa:";

    const imageUpload1 = document.createElement("input");
    imageUpload1.type = "file";
    imageUpload1.id = "coverImage";
    imageUpload1.name = "coverImage";
    imageUpload1.accept = "image/*";
    imageUpload1.required = true;
    imageUpload1.onchange = (e) => {
        const file = e.target.files[0];

        const url = URL.createObjectURL(file);

        coverImagePreview.src = url;
    };

    const dropdown1Label = document.createElement("label");
    dropdown1Label.classList.add("required");
    dropdown1Label.htmlFor = "bookshelfName";
    dropdown1Label.textContent = "Estante:";

    const dropdown1 = document.createElement("select");
    dropdown1.id = "bookshelfName";
    dropdown1.name = "bookshelfName";
    dropdown1.required = true;

    const json = fetch(`/api/bookshelves`)
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

    coverImageDiv.appendChild(imageUpload1);
    coverImageDiv.appendChild(coverImageFigure);

    group1.appendChild(page1);
    group1.appendChild(textInput1Label);
    group1.appendChild(textInput1);
    group1.appendChild(imageUpload1Label);
    group1.appendChild(coverImageDiv);
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
    textInputLabel.classList.add("required");
    textInputLabel.htmlFor = `textInput2`;
    textInputLabel.textContent = "Conteúdo da página:";

    const textInput = document.createElement("textarea");
    textInput.maxLength = "930";
    textInput.id = `textInput2`;
    textInput.name = `textInput2`;
    textInput.required = true;

    const firstImageDiv = document.createElement("div");
    firstImageDiv.classList.add("imagePreviewDiv");

    const firstImageFigure = document.createElement("figure");

    const firstImagePreview = document.createElement("img");
    firstImagePreview.classList.add("imagePreview");
    firstImagePreview.id = "imagePreview2";
    firstImageFigure.appendChild(firstImagePreview);

    const firstImageCaption = document.createElement("figcaption");
    firstImageCaption.textContent = "Imagem selecionada";
    firstImageFigure.appendChild(firstImageCaption);

    const imageUploadLabel = document.createElement("label");
    imageUploadLabel.classList.add("required");
    imageUploadLabel.htmlFor = `imageUpload2`;
    imageUploadLabel.textContent = "Imagem da página:";

    const imageUpload = document.createElement("input");
    imageUpload.type = "file";
    imageUpload.id = `imageUpload2`;
    imageUpload.name = `imageUpload2`;
    imageUpload.accept = "image/*";
    imageUpload.required = true;
    imageUpload.onchange = (e) => {
        const file = e.target.files[0];

        const url = URL.createObjectURL(file);

        firstImagePreview.src = url;
    };

    const dropdownLabel = document.createElement("label");
    dropdownLabel.classList.add("required");
    dropdownLabel.htmlFor = `dropdown2`;
    dropdownLabel.textContent = "Tópico da página:";

    const dropdown = document.createElement("select");
    dropdown.id = `dropdown2`;
    dropdown.name = `dropdown2`;
    dropdown.className = "selectDropdown";
    dropdown.required = true;
    dropdown.onclick = () => {
        validateInputSelect();
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

    firstImageDiv.appendChild(imageUpload);
    firstImageDiv.appendChild(firstImageFigure);

    group.appendChild(pages);
    group.appendChild(dropdownLabel);
    group.appendChild(dropdown);
    group.appendChild(textInputLabel);
    group.appendChild(textInput);
    group.appendChild(imageUploadLabel);
    group.appendChild(firstImageDiv);

    form.appendChild(group);

    const buttonDiv = document.createElement("div");
    buttonDiv.style.display = "flex";
    buttonDiv.style.margin = "15px 0 0 0";
    buttonDiv.style.width = "80%";
    buttonDiv.style.justifyContent = "space-around";
    buttonDiv.id = "buttonDiv";

    const submitButton = document.createElement("button");
    submitButton.classList.add("modalButton");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Upload";
    submitButton.id = "uploadButton";

    const newPageButton = document.createElement("button");
    newPageButton.classList.add("modalButton");
    newPageButton.id = "addPageButton";
    newPageButton.innerText = "Adicionar Página";
    newPageButton.setAttribute("type", "button");
    newPageButton.onclick = (e) => {
        e.target.classList.add("modalButtonDisabled");
        createIput();
    };

    buttonDiv.appendChild(submitButton);
    buttonDiv.appendChild(newPageButton);
    form.appendChild(buttonDiv);

    const requiredExplanation = document.createElement("p");
    requiredExplanation.style.color = "red";
    requiredExplanation.style.paddingTop = "10px";
    requiredExplanation.style.fontWeight = "500";
    requiredExplanation.innerText = "* obrigatório";

    form.appendChild(requiredExplanation);

    root.appendChild(form);

    return form;
}

function createIput() {
    const counter = document.querySelectorAll(".input-group").length + 1;
    if (counter <= 5) {
        const form = document.querySelector("#form");
        const btnX = document.createElement("div");
        btnX.classList = "btnX";
        btnX.onclick = () => {
            removePage(counter);
        };

        const group = document.createElement("div");
        group.id = `group-${counter}`;
        group.classList.add("input-group");

        const pages = document.createElement("h2");
        pages.innerHTML = `Pagina ${counter - 1}`;

        const textInputLabel = document.createElement("label");
        textInputLabel.classList.add("required");
        textInputLabel.htmlFor = `textInput${counter}`;
        textInputLabel.textContent = "Conteúdo da página:";

        const textInput = document.createElement("textarea");
        textInput.maxLength = "930";

        textInput.id = `textInput${counter}`;
        textInput.name = `textInput${counter}`;

        const imageUploadLabel = document.createElement("label");
        imageUploadLabel.classList.add("required");
        imageUploadLabel.htmlFor = `imageUpload${counter}`;
        imageUploadLabel.textContent = "Imagem da página:";

        const ImageDiv = document.createElement("div");
        ImageDiv.classList.add("imagePreviewDiv");

        const ImageFigure = document.createElement("figure");

        const ImagePreview = document.createElement("img");
        ImagePreview.classList.add("imagePreview");
        ImagePreview.id = `imagePreview${counter}`;

        ImageFigure.appendChild(ImagePreview);

        const ImageCaption = document.createElement("figcaption");
        ImageCaption.textContent = "Imagem selecionada";
        ImageFigure.appendChild(ImageCaption);

        const imageUpload = document.createElement("input");
        imageUpload.type = "file";
        imageUpload.id = `imageUpload${counter}`;
        imageUpload.name = `imageUpload${counter}`;
        imageUpload.accept = "image/*";
        imageUpload.onchange = (e) => {
            const file = e.target.files[0];

            const url = URL.createObjectURL(file);

            ImagePreview.src = url;
        };

        const dropdownLabel = document.createElement("label");
        dropdownLabel.classList.add("required");
        dropdownLabel.htmlFor = `dropdown${counter}`;
        dropdownLabel.textContent = "Tópico da página:";

        const dropdown = document.createElement("select");
        dropdown.id = `dropdown${counter}`;
        dropdown.className = "selectDropdown";
        dropdown.name = `dropdown${counter}`;
        dropdown.onclick = () => {
            validateInputSelect();
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

        ImageDiv.appendChild(imageUpload);
        ImageDiv.appendChild(ImageFigure);

        group.appendChild(btnX);
        group.appendChild(pages);
        group.appendChild(dropdownLabel);
        group.appendChild(dropdown);
        group.appendChild(textInputLabel);
        group.appendChild(textInput);
        group.appendChild(imageUploadLabel);
        group.appendChild(ImageDiv);

        // form.appendChild(group);
        form.insertBefore(group, document.querySelector("#buttonDiv"));

        const addPageButton = document.querySelector("#addPageButton");
        addPageButton.classList.remove("modalButtonDisabled");

        if (counter === 5) {
            addPageButton.classList.add("modalButtonDisabled");
            addPageButton.disabled = true;
        }
    }
}

function validateInputSelect() {
    const mySelects = document.querySelectorAll(".selectDropdown");
    mySelects.forEach((select) => {
        if (select.value !== "") {
            const selectedId = select.id;
            for (let i = 2; i <= mySelects.length + 1; i++) {
                const nextSelect = document.getElementById(`dropdown${i}`);
                if (selectedId !== nextSelect.id) {
                    nextSelect.querySelectorAll("option").forEach((option) => {
                        if (option.value == select.value) {
                            option.disabled = true;
                        }
                        //  else {
                        // option.disabled = false;
                        // }
                    });
                }
            }
        }
    });
}

function removePage(pageGroup) {
    const group = document.querySelector(`#group-${pageGroup}`);
    group.remove();

    const groups = document.querySelectorAll(".input-group");
    groups.forEach((group, index) => {
        if (index > 0) {
            group.id = `group-${index + 1}`;
            const titlePage = group.querySelector("h2");

            titlePage.innerText = `Pagina ${index}`;
        }
    });
}
