//Como deixar a primeira letra das palavra em letra maiuscula usando slice ou toUpperCase
//criar variavel que armazena o nome que o usuario coloca no prompt
var name = prompt("What is your name?");
//deixar a primeira letra do nome em maiuscula
//isolar o primeiro caracter
var firtsChar = name.slice(0,1);
//deixar ele em maiuscula
var upperCaseFirstChar = firtsChar.toUpperCase();
//isolar do resto do nome
var restOfName = name.slice(1,name.lenght);
//deixar o resto do nome em letra minuscula
restOfName.toLowerCase();
//concatenar o primeiro caracter com o resto do nome
var capitaliseName = upperCaseFirstChar + restOfName;
//colocar um alerta dando oi com o nome 
alert("Hello, " + capitaliseName);