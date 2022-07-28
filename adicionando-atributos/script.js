//Podemos alterar os atrubutos via JS e DOM
//Por exemplo: alterar o atributo alt de imagem;
//ou até um src de uma imagem
//todos os atributos podem ser alterados via js
//atributos são aqueles parametros para alterar em uma tag do html 
//ex: o alt de uma imagem o src de uma imagem, etc
//selecionar elemento que quer adicionar atributo
var title = document.querySelector("#title");
//adicionar atributo nele
title.setAttribute("class","testando-atributo");// no caso foi adicionado uma classe igual a testando-atributo
console.log(title);
//agora vamos alterar o atributo de um botao
//selecione o botao
var button = document.querySelector("#btn");
button.setAttribute("disabled", "disabled");//colocou atributo que desabilita botao
console.log(button);

//agora vamos adicionar um id a um elemento
//selecinar elemento
var subtitle = document.querySelector(".subtitle"); 
subtitle.setAttribute("id","titulo-2");
console.log(subtitle);

//removendo atributos
//seleciono o elemento
var lista = document.querySelector("#lista");
//remover atributo que deseja, no caso será o id da lista
lista.removeAttribute("id"); 