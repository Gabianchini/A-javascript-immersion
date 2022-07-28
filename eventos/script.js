//Eventos
//Podemos mapear algumas ações dos usuários, que chamamos de eventos
//Como:movimento de mouse, click,mouse entrando ou saindo de um elemento
//carregamento da página, etc
//E então criar comportamentos interessantes como : animação de menu abrindo e fechando

//Evento onload
//ativado quando carregar a página
//podemos depois desse ventos realizar alguma ação no nosso projeto

window.onload = function(){
    console.log("carregou o DOM");

    var title2 = document.querySelector("#title");
    console.log(title2);
}

console.log("carregou o js");