//Criando elementos
//Outra possibilidade do js e o dom é criar elementos
//o texto de um elemento é considerado um nó na arvore do DOM
//Ou seja, vamos ter que criar o texto do elemento também

//1- acessar documento com document e colocar createElement e dentro dos parenteses 
//o elemento que quer criar, que nesse caso será um paragrafo(p):
var novoParagrafo = document.createElement("p");
//2-Criar texto que ficara no parágrafo
var texto = document.createTextNode("Esse é o conteudo do parágrafo");
//3- Dar instrução que o texto é filho do paragrafo( o texto vai ficar dentro do paragrafo)
novoParagrafo.appendChild(texto);
console.log(novoParagrafo);
//4-inserir novo elemento no html ( até agr ele nao vai aparecer na tela mesmo, só dps desse passo)
//Seleciona o body do html 
var body = document.querySelector("body");
//Instruir colocar o paragrafo com texto dentro do body:
body.appendChild(novoParagrafo);

//Outro exemplo:
//Inserir span com texto em um container
//1- Acessar elemento 
var container = document.getElementById("container");
//2- criar elemento span
var elemento = document.createElement("span");
//3- Colocar elemento dentro do span texto e criar texto 
elemento.appendChild(document.createTextNode("Texto do span"));
//4- Colocar span com texto dentro do container
container.appendChild(elemento);
//5- Colocar no body da página
body.appendChild(container);

