//Alterando css com js
//É comum alterar css com js, as regras de css ficam de forma inline
//substituindo a maioria das outras regras criadas

//adicionando css non titulo principal
//seleciona elemento
var title = document.querySelector("#title");

//adicionar css em uma propriedade do elemento
title.style.color = "red";
//ao observar no console.log o estiloc cai ficar inline no h1(title)

//adicionar background color
title.style.backgroundColor = "yellow";

//adicionar sublinhado
title.style.textDecoration = "overline";

//logo, para adicionar estilo é só escrever elemento.style.propriedadecss = "valor propriedade css"
//se a propriedade css for um nome composto que usa - (background-color por exemplo), use camelCase ao inves do - ou seja
//backgroundColor por exemplo


//adicionando varios estilos de uma vez só
//selecionar elemento
var subtitle = document.querySelector(".subtitle");
//adicionar varios estilos
subtitle.style.cssText = "color:blue; background-color:pink; font-size:50px;";
//ou seja para adicionar mais de um estilo se usa cssText e aí basicamente escreve o estilo css desejado separado com ponto e virgula e entre "" 




