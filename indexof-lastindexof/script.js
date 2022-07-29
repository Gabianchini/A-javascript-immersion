//metodo de array indexOf e lastindexOf
//indexOf: encontra o índice de um determinado elemento
//lastindexOf: encontrar o ultimo índice de um elemento

let numeros = [0, 1, 2, 1, 0];

console.log(numeros.indexOf(1));
console.log(numeros.lastIndexOf(1));

//outro exemplo:
let nums = [5,6,2,4,9,6,2]; //no caso temos o numero 2 repetido 2 vezes
console.log(nums.indexOf(2)) // descobrir o indice do primeiro numeroo 2 que aparece
console.log(nums.lastIndexOf(2))//descobrir indice o ultimo 2 que aparece na array
// é possivel usar o metodo com strings dentro de array tbm
//ex:
let nomes = ["Ana", "Manuel", "João", "Roberto", "Manuel", "Manuel"]
console.log(nomes.indexOf("Manuel"));
console.log(nomes.lastIndexOf("Manuel"));


