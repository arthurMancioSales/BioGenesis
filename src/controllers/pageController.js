//  @author {Arthur}
import * as pageService from "../services/pageService.js"
const TAG = "Page Controller"

// Cria uma página nova para um livro -> @author {Arthur}
export async function createPage(req, res) {
    console.log(TAG);
    console.time("createPage()")

    const {bookID, topicName, content, image, authorName} = req.body

    const response = {
        message: "",
        data: null,
        error: null,
    };

    if (isNaN(bookID) || bookID < 0) {
        response.message = "Insira um BookId válido"
        response.error = "Book id não é um número válido"

        res.status(400).json(response)
        return
    }
    if (typeof(topicName) != "string" || topicName.length < 0) {
        response.message = "Insira um nome de tópico válido"
        response.error = "Nome de tópico inválido"

        res.status(400).json(response)
        return
    }
    if (typeof(content) != "string" || content.length < 0) {
        response.message = "Insira um conteúdo válido"
        response.error = "O conteúdo informado inválido"

        res.status(400).json(response)
        return
    }
    if (typeof(image) != "string" || image.length < 0) {
        response.message = "Insira um caminho de imagem válido"
        response.error = "O caminho de imagem inválido"

        res.status(400).json(response)
        return
    }
    if (typeof(authorName) != "string" || authorName.length < 0) {
        response.message = "Insira um nome de usuário válido"
        response.error = "Nome de usuário não inválido"

        res.status(400).json(response)
        return
    }

    try {
        const serviceResponse = await pageService.createPage(bookID, topicName, content, image, authorName)

        response.message = "Página criada com sucesso"
        response.data = serviceResponse

        res.status(200).json(response)
        console.timeEnd("createPage()")
    } catch (error) {
        console.log(TAG, error);

        response.message = "Não foi possível criar a página";
        response.error = error;

        res.status(500).json(response)
        console.timeEnd("createPage()")
    }

}