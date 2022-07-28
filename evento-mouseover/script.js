//Evento mouseover
//O mouseover é ativado quando o ponteiro do mouse passa em cima do elemento que criamos o evento
//Temos também o evento mouseout que é quando o ponteiro sai do elemento

//evento de mouseover
//seleciona elemento
var title = document.querySelector("#title");
//adiciona eventlistener e evento
//O evento será que ao passar o mouse no title o backgorund fica amarelo
title.addEventListener("mouseover", function(){

    this.style.backgroundColor = "yellow";

});

//evento mouseout
title.addEventListener("mouseout", function(){
    this.style.backgroundColor = "purple";
});



//exibindo o paragrafo (que esta escondido com display none) quando passa o mouse emcima
//afetando outro elemento(p) colocando o mouse no title
var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){
    var p = document.querySelector("#paragrafo");
    p.classList.remove("hide");
});

