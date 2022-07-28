//Evento keydown e keyup
//O evento keydown é ativado quando uma tecla é pressionada
//podemos  também atrelar o evento keyup para quando uma tecla colta a posição normal

//keydown
document.addEventListener("keydown", function(event){
    console.log(event);
});
//esse event é para dar mais informações sobre o evento( no caso o de keydown) ao rodar o evento
//(evento acontece quando aperta alguma tecla, entao aparece a descrição do evento no console)
//se eu quisesse saber apenas o botao que foi apertado seria assim:
document.addEventListener("keydown", function(event){
    console.log(event.key);
});

//Evento que detecta quando o usuário aperta enter e manda uma mensagem no console
document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        console.log("apertou enter");
    }
});
//ou seja para criar evento com tecla devemos adicionar o eventlistener na página e mapear
//o botão que executara a funcao ao ser apertado(isso foi feito nesse exemplo acima)


//keyup
// O keyup( é quando solta o botao que está apertando) é possivel adicionar evento nele tbm
document.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        console.log("Soltou o enter");
    }
});
