let contpage = 0;

export function editPages () {  
    const primeiraClasse = document.querySelector(".opacity0");
    const title = document.getElementById("bookTitle").value;
    const imgCapa = document.getElementById("coverImage").value;
    const dropdowndCapa = document.getElementById("bookshelfName").value;
    const dd2 = document.getElementById("dropdown2").value;
    const upl2 = document.getElementById("imageUpload2").value;
    const conteudo2 = document.getElementById("textInput2").value;

    if (contpage == 0) {
        if (title && imgCapa && dropdowndCapa && dd2 && upl2 && conteudo2 !== undefined) {
            primeiraClasse.classList.remove("opacity0");
            contpage+=1;
        }else {
            {alert("preencha as informaçoes da pag da capa e da pag 1 antes de adicionar outra pagina")}

        }
    }
    else if (contpage == 1) {
        const dd3 = document.getElementById("dropdown3").value;
        const upl3 = document.getElementById("imageUpload3").value;
        const conteudo3 = document.getElementById("textInput3").value;

        if (dd3 && upl3 && conteudo3 !== null) {
            primeiraClasse.classList.remove("opacity0");
            contpage+=1;

        }else {alert("preencha as informaçoes da pag 2 primeiro")};
    }
    else if (contpage == 2) {
        const dd4 = document.getElementById("dropdown4").value;
        const upl4 = document.getElementById("imageUpload4").value;
        const conteudo4 = document.getElementById("textInput4").value;

        if (dd4 && upl4 && conteudo4 !== null) {
            primeiraClasse.classList.remove("opacity0");
        }else {alert("preencha as informaçoes da pag 3 primeiro")};
    }
    else if (contpage == 3) {
        const dd5 = document.getElementById("dropdown5").value;
        const upl5 = document.getElementById("imageUpload5").value;
        const conteudo5 = document.getElementById("textInput5").value;

        if (dd5 && upl5 && conteudo5 !== null) {
            primeiraClasse.classList.remove("opacity0");
            contpage+=1;
        }else {alert("preencha as informaçoes da pag 4 primeiro")};
    }   
};





    

    
