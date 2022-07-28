//1-escreva uma funcao que imprime hello word no console
function helloWord(){
    console.log("hello word")
}
helloWord();

//2-escreva uma funcao que recebe parametro de idae
//imprime esta mensagem no conole com template literals "votem x anos"
function ageDetector(idade){
    console.log(`Você tem ${idade} anos`);
}
ageDetector(8);
//3- escreva uma funcao que some dois numero e retorne eles
//depois imprima esse retorno

function soma(x,y){
    return x + y;

}
console.log(soma(5,4));

//4-escreva uma funcao que retorne um numero aleatorio
//o numero maximo retornado deve ser passado via parametro
function generateRandom(num){
    return Math.floor(Math.random() * num) +1;
}
console.log(generateRandom(10));

//5- escreva uma funcao que detecta o tipo de dado passado
//e retorne uma mensagem pra cada tipo
//execute uma funcao pra cada caso

function isString(dado){
 if(typeof(dado) == 'string'){
    console.log('é uma string');
 }else{
    console.log('nao é string')
 }
}
isString(2);


function isBoolean(valor){
    if(typeof(valor) == 'boolean'){
       console.log('é uma booleano');
    }else{
       console.log('nao é booleano')
    }
   }
   isBoolean(true);

function isNumber(num){
    if(typeof(num) == 'number'){
        console.log('é uma numero');
     }else{
        console.log('nao é numero')
     }
    }
    isNumber(3);   

    //6- escreva uma funcao que recebe uma string se o texto tiver mais de 10 caracteres imprima texto mt grande
    //se conter menos imprima texto dentro do limit

function limitText(text){
    if(text.length>10){
        console.log('texto muito longo')
    }if(text.length<10){
        console.log('texto dentro do limite')
    }
}
limitText("batatataaaaa");

//7-funcao que receba dois numeros um é a base e a outra a potencia e depois retorne o resultado
function potencia(base,pot){
    return Math.pow(base,pot);
}
console.log(potencia(3,2));

//8- funcao que recebe numero e o decrementa de 1 a 1 com um loop alem disso imprime somente os numeros pares
function par(numero){
    for(let i = numero; i >=0; i--){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
par(15);
par(16);