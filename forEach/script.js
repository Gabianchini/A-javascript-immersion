//O método forEach() executará uma função para cada elemento presente em um array
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
    console.log(item*2);
}

numeros.forEach(tabuadaDe2)
//o item seria cada indice da array, pode-se usar o nome que quiser
//dessa forma o foreach fara com que cada item da array seja multiplicado por 2

//outra maneira de escrever(usando arrow function):
numeros.forEach(numero =>{
    console.log("O numero é" + numero);
});
//é a mesma coisa porem usando arrow function
