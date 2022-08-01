//Crie um array com 5 itens
//acesse o item 0,1,3 e 4
let frutas = ["mamão", "maçã", "abacate", "banana", "pera", "bergamota"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);

//Crie um array com 2 elementos e outro com 4
//imprima o numero de elementos de cada um na tela

let arr1 = ["item1","item2"];
let arr2 = ["item1","item2", "item3", "item4"];
console.log(arr1.length);
console.log(arr2.length);

//Crie um objeto onibus
//coas as propriedades rodas=8
//limite de passageiros = 40
//portas = 2
//imprima as propriedades no console
 
let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
};
console.log(onibus.rodas);
console.log(onibus.limitePassageiros);
console.log(onibus.portas);
//adicione a propriedade janelas no onibus com o valor de 20
//delete a propriedade rodas
//imprima a propriedade janelas no console
onibus.janelas = 20;
delete onibus.rodas
console.log(onibus.janelas);

//Crie um array com 5 nomes, inlcuindo o seu
//Verifique se o seu nome existe no array
//Se existir imprima alguma maensagem no console
let nome = ["José", "Gabe", "Ana", "Matheus", "João"];
function nomeArray(){
    if(nome.includes("Gabe")){
        console.log("Seu nome está na array!")
    }
}
nomeArray();

//Crie dois array, um com mais de 5 elementos e outro com menos
//Faça uma função que verifica o nunmero de elementos
//Se possuir menos que 5, imprima "poucos elementos" no console e se tiver mais imprima muitos elementos

let lista = [1,2,3,4,5,6,7];
let lista2 = [1,2,3];

function verificaElementos(array){
    if(array.length<5){
        console.log("Poucos elementos");
    }if(array.length>5){
        console.log("Muitos elementos");
    }
}

verificaElementos(lista);
verificaElementos(lista2);

//Crie um array com 5 elementos
//faça uma iteração entre todos eles e imprima no console o valor
let dancas = ["balé", "salsa", "poledance","contemporaneo", "streetdance"];

for(let i = 0; i < dancas.length; i++){
    console.log(dancas[i]);
}

//crie json com 3 propriedades
//atribua ele a uma variavel
//acesse as propriedades imprimindo no console
const meusDados = {
    "nome":"Matheus",
    "idade": 30,
    "profissao": "programados"
}

console.log(meusDados.nome, meusDados.idade, meusDados.profissao);

//Crie um array a partir de uma frase
//Imprima cada palavra do array no console por meio de um for
let frase = "Ser um programador bom requer muita prática";
 const separaFrase = frase.split(" ");

 for(let i = 0; i < separaFrase.length; i++){
    console.log(separaFrase[i])
 }
 
 //Crie um objeto calculadora que tem os métodos somar, subtrair multiplicar e dividir
 //os métodos só devem aceitar dois parametros
 //use cada um dos métodos e imprima os valores no console

 let calculadora = {
    somar: function(num1,num2){
        return num1 + num2;
    },
   dividir: function(num1,num2){
    return num1 / num2;
   },
   subtrair: function(num1,num2){
    return num1 - num2;
   },
   multiplicar: function(num1,num2){
    return num1 * num2;
   }
 }

 console.log(calculadora.multiplicar(2,3));