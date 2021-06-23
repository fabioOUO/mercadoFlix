// mostrar e ocultar input de pesquisa
const icone_busca = document.querySelector('.container-esquerdo').querySelector('.menu-item');
const input_busca = document.getElementById('input-busca');

icone_busca.addEventListener('mouseout', function() {
    input_busca.setAttribute("class","ocultar");
});

icone_busca.addEventListener('mouseover', function() {
    input_busca.setAttribute("class","mostrar");
});

function sem_notificacoes(){
    alert("Sem Notificaçoes")
}
function sem_dados(){
    alert("Dados indisponíveis no momento.")
}

/* funcao para alterar cor de icone ao passar o mouse */
function setColorIcon(button, className){
    button.querySelector("i").setAttribute("class",className);
}

/* mostrar e esconder cotaçoes */
function cotacoesMostrar(id){
    const ids = ["container-acoes", "container-indices", "container-commodities", "container-forex", "container-criptomoeda"];
    
    for (const c in ids) {
        if(ids[c] == id) document.getElementById(ids[c]).style.display = 'block';
        else document.getElementById(ids[c]).style.display = 'none';
    }
}
cotacoesMostrar("container-acoes");