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

//Como criar um evento
//Devemos atrelar o evento a um elemento, por exemplo um botao
//Depois inserir um listener e o tipo de evento como argumento
//aí o elemento responderá por este evento e obviamente, outros da oágina nao
//ex:
let btn = document.querySelector("#btn");
function msg(){
    console.log("clicou");
}
btn.addEventListener("click",msg);
//Removendo eventos
//Da mesma forma que adicionamos eventos podemos remove-los
//para isso utilizamos o metodo removeEventListener onde passamoso evento e funcao que o evento esta escutando
//ex:
setTimeout(function(){
    btn.removeEventListener("click",msg);
},3000);
//removerá o evento depois de 3 segundos

//Objeto do evento
//Quando criamos eventos, temos a opção de utilizar um argumento opcional que é chamado de objeto do evento
//Ele contém propriedades que podem ser utilizadas a nosso favor
//O objeto é criado pelo Javascript automaticamente
//ex:
function msg(e){
    console.log(e);
}

btn.addEventListener("click", msg);

//Propagação
//Quando nao definimos um elemento muito bem ou um elemento que está dentro de outro tem um evento
//Pode acontecer a propagação, ou seja, o outro elemento ativar um evento também, aí teremos uma duplicação
//por isso temos um método que para esta propagação e resolve esse problema o stopPropagations
//para saber mais: https://www.w3schools.com/jsrEF/event_stoppropagation.asp

//Prevent Default
//Muitos elementos/teclas já tem ações pré definidas como clicar num link nos leva a outr página
//podemos parar este evento default, e criar uma lógica diferente para o elemento em questao
//ex:
let a = document.querySelector("a");
a.addEventListener("click", function(e){
    e.preventDefault();
    console.log("clicou mas nao mudou de link");
})