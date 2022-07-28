//For
//Estrutura de reoetição - loop

//Sintaxe
// for(incremento, condição, incremento){
//
//}

//Exemplo:

for(var i=0; i < 10; i++){
    console.log("Repetindo for:" + i);
}

//Exemplo2:
//Nesse caso o console log será executado até a quantidade existente no array,
//no caso o 4
var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j++){
    console.log(arr[j]);
}

//Exemplo3:
// A cada execucao o valor do x será multiplicado por 3,
//logo o console log aparecera até o 45, pois 
//45*3 é maior que 100, contradizendo a condição de que o console log
// aparecerá apenas enquanto x seja menor que x
for(var x = 5; x < 100; x *= 3){
    console.log(x);
}