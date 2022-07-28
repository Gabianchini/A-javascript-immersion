//Dois outros operadores de comparação que existem
//no javascript são === e !==
//a função deles é comparar tipo do dado e valor do dado
var numero = '5'; 

if(numero === 5){
    console.log("O numero é igual a 5");

}
//no caso o console log n seria executado pois embora o valor de numero seja igual o 5 o tipo não é
// numero='5' uma string e 5 um number

var numero = '5'; 

if(numero === '5'){
    console.log("O numero é igual a 5");

}
if(numero !== 5){
    console.log("Não é o mesmo número 5 do tipo number");
}
//Nesse caso retornaria não é o mesmo numero do tipo number pois embora
//ele seja igual a 5 o tipo é string e nao number


