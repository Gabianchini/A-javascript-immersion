//length
//funciona da mesma forma que em uma string porém na array, mostrando o 
//numero de elementos na array
var arr = [1,2,3,4,5];
console.log(arr.length);

//push
//adicionar elementos na array
arr.push(6);
console.log(arr);
//o oush nao se limita a numero pode adicionar ate strings na array
arr.push('Qualquer coisa');
console.log(arr);

//pop
//Remover elemento do fim do array
arr.pop();
console.log(arr);

//unshift
//adicionar elemento no começo da array
arr.unshift('teste');
console.log(arr);

//shift
//remover elemento do começo do array
arr.shift();
console.log(arr);

//Acessar o ultimo elemento de um array:
//usa-se o -1 pois como o primeiro indice de um array é 0, para ver o final do vc tem
//que acessar o indice -1 que equivale ao ultimo ite do array
console.log(arr[arr.lenght -1]);

//isArray
//Verifica se elemento é uma array
console.log(Array.isArray(arr));

//splice
//adicionar ou remover um elemento no meio do array

//adicionando um elemento no meio do array:
var arr2 = [1,2,3,4,5];
arr.splice(2,0,999); // o 2 é o indice onde deseja adicionar um elemento, o 0 é se vc deseja eliminar algum elemento no processo, no caso foi colocado 0 entao a resposta é nao e o 999 é o elemento que deseja colocar
console.log(arr2);

//removendo um elemento no meio do array:
arr2.splice(4,1); // nesse caso como o objetivo era remover, o 4 é o indice que quer remover e o 1 é quantos elementos quer remover, o ultimo parametro n foi necessario pois n queremos adicionar elementos
console.log(arr2);

//indexOf
// Acha o indice do elemento escolhido
console.log(arr2.indexOf(5));

//join
//transforma array em string
var arr3= ["o", "rato", "roeu", "a", "roupa"]
console.log(arr3.join(" ,"));

//reverse
//Inverte a ordem dos elementos da array
console.log(arr3.reverse());
