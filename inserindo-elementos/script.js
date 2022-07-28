//Podemos inserir um elemento dentro de outro por exemplo um paragrafo em uma div
//Isso é considerado como acrescentar um filho em js

//criar elemento
var elemento =document.createElement("div");
elemento.classList = "div-criada"; // Adicionar classe no elemento criado
var container = document.querySelector("#container")//Acessar div container( que já existe)
container.appendChild(elemento); // colocar elemento criado dentro do container

//insertBefore: outra forma de inserir elemento na página
//Exemplo:
 var elemento2 = document.createElement("div");//criar elemento div
elemento2.classList= "div-before";//dar uma classe ao elemento div criado
//Selecionar outros 2 elementos( div com id container e div com classe div-criada) 
 var elemento3 = document.querySelector("#container .div-criada");
//dentro do container adicionar elemento 2
container.insertBefore(elemento2, elemento3); //esse comando recebe dois parametros: o elemento que vai ser inserido e o elemento que é a referencia(o elemento a ser inserido fica no meio dele, ou seja no meio da div #container e da div .div-criada)
//o container vem antes do .insertBefore pois o elemento criado(div-before) vai ficar dentro dele, entre ela e a div .div-criada
