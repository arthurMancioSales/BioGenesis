import submitForm from "../modules/submitForm.js";
import { printTable } from "./list.js";

const pagesToDelete = [];

export default async function formEdit(user, cont, editEvent) {
  pagesToDelete.splice(0, pagesToDelete.length);

  const userInfoRequest = await fetch("/session");
  const userInfo = await userInfoRequest.json();
  const owner = editEvent.target.dataset.owner;
    const bookshelfName = editEvent.target.dataset.bookshelfName

  if (userInfo.data.username != owner) {
    alert("Você não tem permissão para editar esse livro");
    const wrapper = document.querySelector(".bookWrapper");
    document.body.removeChild(wrapper);
    return;
  }

  const root = document.createElement("div");

  const form = document.createElement("form");
  form.id = "form";
  form.classList.add("ride");
  form.onsubmit = async (e) => {
    const submitButton = document.querySelector("#updateButton");
    submitButton.classList.add("modalButtonDisabled");
    e.preventDefault();
    const editResult = await submitForm(true);
    if (editResult.status == 200) {
      await printTable();
      submitButton.classList.remove("modalButtonDisabled");
      alert("Livro atualizado com sucesso");
      document.querySelector(".bookWrapper").remove();
    } else {
      submitButton.classList.remove("modalButtonDisabled");
      const error = await editResult.json();
      alert(error.error);
    }

    pagesToDelete.forEach((item) => {
      if (item !== undefined) {
        deletePage(item);
      }
    });
  };

  const modalTitle = document.createElement("h2");
  modalTitle.innerHTML = "Editar livro";
  modalTitle.id = "modalTitle";
  modalTitle.dataset.book_id = editEvent.target.dataset.book_id;
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
  textInput1.value = editEvent.target.dataset.bookTitle;

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
  imageUpload1Label.htmlFor = "coverImage";
  imageUpload1Label.textContent = "Capa:";

  const imageUpload1 = document.createElement("input");
  imageUpload1.type = "file";
  imageUpload1.id = "coverImage";
  imageUpload1.name = "coverImage";
  imageUpload1.accept = "image/*";
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

    fetch(`/api/bookshelves`)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            response.data.forEach((name) => {
                const dropdown1Option = document.createElement("option");
                dropdown1Option.value = `${name.name}`;
                dropdown1Option.textContent = `${name.name}`;
                if (name.name == bookshelfName) {
                    dropdown1Option.selected = true;
                }
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
  imageUploadLabel.htmlFor = `imageUpload2`;
  imageUploadLabel.textContent = "Imagem da página:";

  const imageUpload = document.createElement("input");
  imageUpload.type = "file";
  imageUpload.id = `imageUpload2`;
  imageUpload.name = `imageUpload2`;
  imageUpload.accept = "image/*";
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

  showPages(user, cont);

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

  const btnFormBook = document.createElement("button");
  btnFormBook.classList.add("modalButton");
  btnFormBook.id = "addPageButton";
  btnFormBook.innerText = "adicionar Pagina";
  btnFormBook.setAttribute("type", "button");
  btnFormBook.onclick = () => {
    btnFormBook.classList.add("modalButtonDisabled");
    createIput();
  };

  const submitButton = document.createElement("button");
  submitButton.classList.add("modalButton");
  submitButton.id = "updateButton";
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Salvar";

  buttonDiv.appendChild(submitButton);
  buttonDiv.appendChild(btnFormBook);
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

    const group = document.createElement("div");
    group.id = `group-${counter}`;
    group.classList.add("input-group");

    const pageHeader = document.createElement("div");
    pageHeader.classList.add("pageHeader");

    const btnX = document.createElement("i");
    btnX.classList.add(
      "fa-regular",
      "fa-circle-xmark",
      "link",
      "pageRemove",
      "btnX"
    );
    btnX.onclick = () => {
      const page = document.querySelector(`#group-${counter} > textArea`)
        .dataset.page_id;

      if (page != undefined) {
        pagesToDelete.push(page);
      }
      removePage(counter);
    };

    const pages = document.createElement("h2");
    pages.innerText = `Pagina ${counter - 1}`;

    pageHeader.appendChild(btnX);
    pageHeader.appendChild(pages);

    const textInputLabel = document.createElement("label");
    textInputLabel.classList.add("required");
    textInputLabel.htmlFor = `textInput${counter}`;
    textInputLabel.textContent = "Conteúdo da página:";

    const textInput = document.createElement("textarea");
    textInput.maxLength = "930";

    textInput.id = `textInput${counter}`;
    textInput.name = `textInput${counter}`;

    const ImageDiv = document.createElement("div");
    ImageDiv.classList.add("imagePreviewDiv");

    const imageUploadLabel = document.createElement("label");
    imageUploadLabel.htmlFor = `imageUpload${counter}`;
    imageUploadLabel.textContent = "Imagem da página:";

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
    dropdown.appendChild(dropdownOption0);

    ["alimentação", "habitat", "curiosidades", "comportamento"].forEach(
      (opt) => {
        const optElement = document.createElement("option");
        optElement.value = opt;
        optElement.textContent = opt;
        optElement.classList = "optTopico";
        dropdown.appendChild(optElement);
      }
    );

    ImageDiv.appendChild(imageUpload);
    ImageDiv.appendChild(ImageFigure);

    group.appendChild(pageHeader);
    group.appendChild(dropdownLabel);
    group.appendChild(dropdown);
    group.appendChild(textInputLabel);
    group.appendChild(textInput);
    group.appendChild(imageUploadLabel);
    group.appendChild(ImageDiv);

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
  document.querySelectorAll(".optTopico").forEach((opt) => {
    opt.disabled = false;
  });

  const selectedValues = [];
  document.querySelectorAll(".selectDropdown").forEach((select) => {
    selectedValues.push(select.value);
  });

  document.querySelectorAll(".optTopico").forEach((opt) => {
    if (selectedValues.includes(opt.value)) opt.disabled = true;
  });
}

async function showPages(user, cont) {
  const jsonBook = await fetch(`/api/books/${user[cont - 1].book_id}`);
  const jsonpage = await jsonBook.json();
  jsonpage.forEach((pages, index) => {
    if (index > 0) {
      createIput();
    }
    if (index == 0) {
      const coverImagePreview = document.querySelector("#coverImagePreview");
      coverImagePreview.src = `/uploads/${pages.cover_image}`;
    }

    document.querySelector(`#textInput${index + 2}`).innerText = pages.content;
    document.querySelector(`#textInput${index + 2}`).dataset.page_id =
      pages.page_id;
    document.querySelector(
      `#imagePreview${index + 2}`
    ).src = `/uploads/${pages.image}`;

    const select = document.querySelector(`#dropdown${index + 2}`);
    const option = select.querySelector(`option[value=${pages.topic_name}]`);
    option.selected = true;
  });
}

// let correcao = 0;

function removePage(pageGroup) {
  const addPageButton = document.querySelector("#addPageButton");
  addPageButton.classList.remove("modalButtonDisabled");
  addPageButton.disabled = false;
  const group = document.querySelector(`#group-${pageGroup}`);
  group.remove();

  const groups = document.querySelectorAll(".input-group");
  groups.forEach((group, index) => {
    if (index > 1) {
      group.id = `group-${index + 1}`;
      const titlePage = group.querySelector("h2");
      titlePage.innerText = `Pagina ${index}`;

      const btnX = group.querySelector(`.btnX`);
      btnX.id = `#btnX-${index + 1}`;

      btnX.onclick = () => {
        const page = document.querySelector(`#group-${index + 1} > textArea`)
          .dataset.page_id;

        if (page != undefined) {
          pagesToDelete.push(page);
        }

        removePage(index + 1);
      };
    }
  });

  validateInputSelect();
}

async function deletePage(id) {
  const res = await fetch(`/api/book/page/${id}`, {
    method: "DELETE",
  });
  return res;
}
