//Podemos trocar elementos no DOM
//Ou seja, substituit uma tag por outra e de mode bem fácil

//criar um elemento
var novoh3 = document.createElement("h3");
novoh3.classList = "testando-classe"
var texto = document.createTextNode("Esse é o texto do h3");
novoh3.appendChild(texto);
//identificar elemento que será trocado, nesse caso sera um h1
var title = document.querySelector("#title");
//Selecionar o pai do elemento a ser trocado (title)
var pai = title.parentNode; // funcao para selecionar pai do elemento title
//trocar elementos
pai.replaceChild(novoh3, title);//o primeiro parametro é o novo elemento a ser colocado
//no lugar do antigo elemento e o segundo parametro é o elemento que foi trocado pelo novo elemento
