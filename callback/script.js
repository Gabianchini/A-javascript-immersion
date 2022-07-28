//Callback
//A função callback é um recurso muito interessanre e aplamente usado em js
//permite executar uma função depois de uma determinada ação
//ou seja uma callback é uma função que é parametro de outra função
//Conceito fundamental pra entender a parte assincrona do js

function exibir(numero){
    console.log(numero);
}


function soma(a,b, callback){
    var op = a + b;
    callback(op);
}    

function multiplicacao(a,b, callback){
    var op = a * b;

    
}

soma(2,2,exibir);

multiplicacao(2,3);


