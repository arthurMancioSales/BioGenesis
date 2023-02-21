// @author {Arthur}
import multer from "multer";
import { v4 as uuid } from "uuid";
import path from "path";

// define o objeto de configuração do multer
const storage = multer.diskStorage({
    //pasta de destino para salvar os arquivos
    destination: "./public/uploads",

    //função que personaliza o nome dos arquivos
    filename: function (req, file, cb) {
        const fileExtension = path.extname(file.originalname);

        const filename = `${uuid()}${fileExtension}`;
        cb(null, filename);
    },
});

//instancia o multer
const files = multer({ storage: storage }).fields([
    { name: "coverImage", maxCount: 1 },
    { name: "imageUpload2", maxCount: 1 },
    { name: "imageUpload3", maxCount: 1 },
    { name: "imageUpload4", maxCount: 1 },
    { name: "imageUpload5", maxCount: 1 },
]);

export default files;
