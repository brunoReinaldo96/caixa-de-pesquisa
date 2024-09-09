function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Voce precisa digitar o nome de um personagem.</p>"
        return;
    }

    campoPesquisa=campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let raca = "";
    let tags = "";
    
    for(let dado of dados){

        titulo = dado.titulo.toLocaleLowerCase();
        raca = dado.titulo.toLocaleLowerCase();
        tags = dado.tags.toLocaleLowerCase();
        
        if(titulo.includes(campoPesquisa) || raca.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            console.log(dado.titulo.includes(campoPesquisa)) 
            resultados += `
                <div class="item-resultado">
                    <h2>
                    <a href="#" target="_blank">
                    ${dado.titulo}
                    </a>
                    </h2>
                    <p class="descricao-meta">
                    ${dado.descricao}
                    </p>
                    <a href="${dado.link}" target="_blank">
                    Mais informaçoes
                    </a> 
                </div>`
        }   
    };

    if(!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }
    section.innerHTML = resultados
}



