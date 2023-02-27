export default async function deleteBook (book_id, author) {

    const urlUsuario = "http://localhost:5000/session/";
    await fetch(urlUsuario)
    .then(response => response.json())
    .then(data => {

        if (data.data.username == author) {
            const url = `http://localhost:5000/api/book/${book_id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                alert("Livro deletado");
        
            });
        }
        else {
            alert("Você não é o autor desse libro");

        }
        console.log(data);
    })





}

