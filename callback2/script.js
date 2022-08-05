//Callbacks
// uma das vertendes da proframação assincrona é fazer acoesque aconteçam depois de umetempo por meio de callbacks
//callback é uma funcao que faz uma ação após algum acontecimento no código
//Podemos realizar um callback com a função setTimeout
console.log("Ainda não chamou o callback");
setTimeout(function(){
    console.log("Chamou o callback");
},2000);

console.log("ainda nao chamou o callback");
//outro exemplo:
// pode -se usar o set time out com uma funcao de parametro,
//onde ele executara a funcao no tempo desejado( ou seja executara o consolelog(que é a funcao) dps de 2 segundos)
console.log("1");

setTimeout(function(){
 console.log("5");
},2000);

console.log("2");
console.log("3");
console.log("4");

