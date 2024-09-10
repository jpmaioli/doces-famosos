function buscar(){
    let section = document.getElementById("resultados")
    let campoPesquisa = document.getElementById("searchInput"). value

    if(campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    }

    let resultados = ""

    let nome = ""; 
    let imagem = "";
    let descricao = "";
    let link = "";

    for (let dado of doces) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        link = dado.link.toLowerCase()
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || link.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <img src=${dado.imagem} alt="">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
}