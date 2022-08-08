//Eventos de mouse
//No mouse temos também eventos como mousedown e mouseup semelhante aos das teclas
//Dblclick para ativar os dois cliques
//ex:
btn = document.querySelector("#btn1");
btn = addEventListener("dblclick", function(e){
    console.log("clicou duas vezes");
});

//Mousemove
//podemos ativar eventos com a movimentacao do mouse também
//o nome dele é mousemove
//atraves desse evento podemos detectar a posicao do ponteiro do mouse na tela

window.addEventListener('mousemove', function(e){
    console.log(e.x);
    console.log(e.y);
});
//ao dar cliques o console vai mostrar as posicoes x e y do ponteiro do mouse na tela

//Eventos de scroll
//Podemos atrelar evento ao scroll da tela também, pelo evento sroll
//por exemplo: podemos criar um elemento assim que o scroll atingir uma posiçÃo x
//ex:
window.addEventListener('scroll', function(e){
    if(window.pageYOffset > 500){
        console.log("chegou na posição");
    }
});

//Evento por foco
//Quando focamos em um elemento ou saímos dele, podemos também atrelar um evento a essa ação. ex: entra e depois sai de um input
//Focus para quando um elemento recebe foco e blur quando ele perde
//ex:
let input = document.querySelector("input");
input.addEventListener("focus", function(e){
    console.log("foco no input")
});

input.addEventListener("blur", function(e){
    console.log("perdeu foco");
});

//Evento de carregamento
//Podemos atrelas um evento quando a página carrega, pelo evento load
//E antes do usuario fechar a página pelo evento beforeunloaded
//load: assim qu a pagina carrega
window.addEventListener("load", function(){
 this.alert("Assine os nosos termos de uso");
});
//before unload: assim ususario tenta sair da pagina
window.addEventListener("beforeunload", function(e){
    e.returnValue = null;
});

//Debounce
//Um evento que dispara multiplas vezes pode ser um problema para o computador do cliente
//por isso podemos fazer um debounce, que é um suavizador de evento, para nao chamar o mesmo tantas vezes
//ex:
let timeout;

window.addEventListener("mousemove", function(e){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        console.log(e.x);
    },500)
});
