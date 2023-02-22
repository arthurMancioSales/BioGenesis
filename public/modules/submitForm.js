// @author {Arthur}
export default async function submitForm() {
    const bookTitle = document.getElementById("bookTitle");
    const coverImage = document.querySelector("#coverImage");
    const bookshelfName = document.querySelector("#bookshelfName");

    const textInput2 = document.querySelector("#textInput2");
    const dropdown2 = document.querySelector("#dropdown2");
    const firstImageInput = document.querySelector("#imageUpload2");

    const textInput3 = document.querySelector("#textInput3");
    const dropdown3 = document.querySelector("#dropdown3");
    const secondImageInput = document.querySelector("#imageUpload3");

    const textInput4 = document.querySelector("#textInput4");
    const dropdown4 = document.querySelector("#dropdown4");
    const thirdImageInput = document.querySelector("#imageUpload4");

    const textInput5 = document.querySelector("#textInput5");
    const dropdown5 = document.querySelector("#dropdown5");
    const fourthImageInput = document.querySelector("#imageUpload5");

    const formData = new FormData();
    formData.append("bookTitle", bookTitle.value);
    formData.append("bookshelfName", bookshelfName.value);
    formData.append("coverImage", coverImage.files[0]);
    formData.append("userName", 'usuarioTeste');

    formData.append("textInput2", textInput2.value);
    formData.append("dropdown2", dropdown2.value);
    formData.append("imageUpload2", firstImageInput.files[0]);

    formData.append("textInput3", textInput3.value);
    formData.append("dropdown3", dropdown3.value);
    formData.append("imageUpload3", secondImageInput.files[0]);

    formData.append("textInput4", textInput4.value);
    formData.append("dropdown4", dropdown4.value);
    formData.append("imageUpload4", thirdImageInput.files[0]);

    formData.append("textInput5", textInput5.value);
    formData.append("dropdown5", dropdown5.value);
    formData.append("imageUpload5", fourthImageInput.files[0]);

    await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
    })
}
