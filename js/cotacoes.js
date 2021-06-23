/* mostrar e esconder cotaçoes */
function cotacoesMostrar(id){
    const ids = ["container-acoes", "container-indices", "container-commodities", "container-forex", "container-criptomoeda"];
    
    for (const c in ids) {
        if(ids[c] == id) document.getElementById(ids[c]).style.display = 'block';
        else document.getElementById(ids[c]).style.display = 'none';
    }
}
cotacoesMostrar("container-acoes");