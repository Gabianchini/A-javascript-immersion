//Métodos de array: slice
//retorna array a partir de outro array
//o array retornado é determinado pelos parametros que sao os indices de inicio e fim do novo array.
//obs: o fim que vc define nao vai ser incluso na nova array. ex: [1,2,3,4], se eu coloco slice(0,1) o resultado será 1(indice 0) pois o indice 1(numero 2) nao é incluido ele apenas define o fim
//se eu quisesse incluir o numero 2(indice 1) o comando seria slice(0,2)
//ex:
let numeros = [0,1,2,3,4,5];
console.log(numeros.slice(2,3));
console.log(numeros.slice(3));
//outro exemplo:
let nums = [1,2,3,4,5,6,7,8,9]
console.log(nums.slice(4,5));
console.log(nums.slice(4,6));