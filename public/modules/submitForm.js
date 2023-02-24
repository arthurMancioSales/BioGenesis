// @author {Arthur}
export default async function submitForm() {

    validateInput()

    const inputs = document.querySelectorAll(".input-group").length
    
    const bookTitle = document.getElementById("bookTitle");
    const coverImage = document.querySelector(`#coverImage`);
    const bookshelfName = document.querySelector(`#bookshelfName`);

    const textInput2 = document.querySelector(`#textInput2`);
    const dropdown2 = document.querySelector(`#dropdown2`);
    const firstImageInput = document.querySelector(`#imageUpload2`);

    const formData = new FormData();

    formData.append("bookTitle", bookTitle.value);
    formData.append("bookshelfName", bookshelfName.value);
    formData.append("coverImage", coverImage.files[0]);

    formData.append("userName", 'usuarioTeste');

    formData.append("textInput2", textInput2.value);
    formData.append("dropdown2", dropdown2.value);
    formData.append("imageUpload2", firstImageInput.files[0]);

    console.log(inputs);

    for (let i = 3; i <= inputs; i++) {
        const textInput = document.querySelector(`#textInput${i}`);
        const dropdown = document.querySelector(`#dropdown${i}`);
        const ImageInput = document.querySelector(`#imageUpload${i}`);   
        
        formData.append(`textInput${i}`, textInput.value);
        formData.append(`dropdown${i}`, dropdown.value);
        formData.append(`imageUpload${i}`, ImageInput.files[0]);
    }
    
    console.log(formData);

    await fetch("http://localhost:5000/upload",{
        method: "POST",
        body: formData,
    });
}

function validateInput() {
    
}