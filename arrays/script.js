var arr = [5,"Matheus", true, {teste:1, teste:2}]; //colchete é array [] e chaves é objeto {}

console.log(arr);

var arr2 = [2,3,4,5,6];
console.log(arr2);

//para acessar um objeto especifico de um array é colocado parenteses depois do nome do array e o indice do
//objeto a ser acessado. vale lembrar que o indice sempre começa no 0
//ex:

console.log(arr[1]);

//inserindo elemento no array
//colocasse o nome da variavel com o array( sem var) e a posição
//que o novo elemento via ser inserido e o valor do elemento
arr[4] = 10;

console.log(arr);

// alem de adiiconar é posivel substituir um elemento na array
//nesse exemplo o 5 na array arr vaiser substituido por "teste"

arr[0] = "teste";
console.log(arr);