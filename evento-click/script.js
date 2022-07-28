//Evento click
//O click é ativado quando o usuário clica em um elemento que atrelamos o evento
//Após a ação podemos fazer as modificações e alterações no HTML/CSS que quisermos

//1 - selecionar elemento que recebera evento de clique
var btn = document.querySelector("#btn");
console.log(btn);
//2- adicionar um eventlistener para o botao que recebe como parametro
//o tipo de evento(click) e oq acontece quando o evento ocorre(function que ordena que quando o botao é clicado, aparece no console "clicou"))
//alem disso a funcao como parametro ordena que o botao mude de cor para vermelho a ser clicado.( o this se refere a ele mesmo).
btn.addEventListener("click", function () {
  console.log("clicou");

  this.style.backgroundColor = "red";
});

//outro exemplo:
//colocando evento de click em um h1
//ao clicar no h1 ele some e o subtitulo fica com underlina
//ou seja o evento de click pode afetar outros elementos além do que possui o eventlistener
var title = document.querySelector("#title");

title.addEventListener("click", function () {
  this.style.display = "none";
  var subtitle = document.querySelector(".subtitle");
  subtitle.style.textDecoration = "underline";
});

//double click
//acontece algo ao dar click duplo em um elemento
var btn2 = document.querySelector("#doubleclick");
btn2.addEventListener("dblclick", function () {
  console.log("click duplo");
});
