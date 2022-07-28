// InnerHTML e textContent
//Podemos alterar o texto de qualquer elemento de forma fácil com java script
//Posteriormente poderemos atrelar esta ação com algum evento

//1 - selecionar o elemento
var title = document.querySelector('#title');
//2-Alterar texto usando  innerHTML
//innerHTML 
title.innerHTML = "Testando o texto alterado";

//Agora alterar texto usando textContent
//textContent -> mais utilizado

//1-selecionar elemento
var title2 = document.querySelector('#title2');
//2- Alterar texto usando textContent
title2.textContent = "Testando o segundo título alterado";
