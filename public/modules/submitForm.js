// @author {Arthur}
export default async function submitForm(update=false) {

    const inputs = document.querySelectorAll(".input-group").length
    const bookID = document.querySelector("#modalTitle").dataset.book_id
    
    const bookTitle = document.getElementById("bookTitle");
    const bookshelfName = document.querySelector(`#bookshelfName`);
    let coverImage = document.querySelector(`#coverImage`);
    
    const formData = new FormData();

    if (!coverImage.value) {
        const coverImagePreview = document.querySelector("#coverImagePreview").src
        coverImage = coverImagePreview.split("/uploads/")[1]
        formData.append("coverImage", coverImage);
    } else {
        formData.append("coverImage", coverImage.files[0]);
    }

    const textInput2 = document.querySelector(`#textInput2`);
    const dropdown2 = document.querySelector(`#dropdown2`);
    let firstImageInput = document.querySelector(`#imageUpload2`);

    if (!firstImageInput.value) {
        const imagePreview2 = document.querySelector("#imagePreview2").src
        firstImageInput = imagePreview2.split("/uploads/")[1]
        formData.append("imageUpload2", firstImageInput);
    } else {
        formData.append("imageUpload2", firstImageInput.files[0]);
    }

    const userInfoResponse = await fetch("/session")
    const userInfo = await userInfoResponse.json()


    formData.append("bookID", bookID);
    formData.append("pageCount", inputs);
    formData.append("bookTitle", bookTitle.value);
    formData.append("bookshelfName", bookshelfName.value);

    formData.append("userName", userInfo.data.username);

    formData.append("textInput2", textInput2.value);
    formData.append("page_id2", textInput2.dataset.page_id);
    formData.append("dropdown2", dropdown2.value);

    for (let i = 3; i <= inputs; i++) {
        const textInput = document.querySelector(`#textInput${i}`);
        const dropdown = document.querySelector(`#dropdown${i}`);
        let ImageInput = document.querySelector(`#imageUpload${i}`);   
        
        if (!ImageInput.value) {
            const imagePreview = document.querySelector(`#imagePreview${i}`).src
            ImageInput = imagePreview.split("/uploads/")[1]
            formData.append(`imageUpload${i}`, ImageInput);
        } else {
            formData.append(`imageUpload${i}`, ImageInput.files[0]);
        }

        formData.append(`textInput${i}`, textInput.value);
        formData.append(`page_id${i}`, textInput.dataset.page_id);
        formData.append(`dropdown${i}`, dropdown.value);
    }

    let result
    

    if (!update) {
        result = await fetch("api/upload",{
            method: "POST",
            body: formData,
        });
    } else {
        result = await fetch("api/updateBook",{
            method: "PUT",
            body: formData,
        });
    }

    return result
}


