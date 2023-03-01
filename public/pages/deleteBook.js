export default async function deleteBook(book_id, author) {
    const urlUsuario = "/session/";
    await fetch(urlUsuario)
        .then((response) => response.json())
        .then((data) => {
            if (data.data.username == author) {
                const url = `/api/book/${book_id}`;
                fetch(url, {
                    method: "DELETE",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        alert("Livro deletado");
                    });
            } else {
                alert("Você não tem permissão para apagar esse livro");
            }
        });
}
