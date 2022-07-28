//condicional if
//executa um bloco de código se a instrução for verdadeira
//se for falsa, segue o código normalmente

console.log("Antes do if");

if(true){
    console.log("testando o if");
}

// se entre os parenteses fosse false o console log n ia ser executado

console.log("Depois do if");

//exemplo if:
//Se a idade for maior que dezoito a pessoa
//pode tirar a carteira de habilitação
var idade =15;

if(idade>=18){
    console.log("Pode fazer carteira de habilitação");
}

if(idade==15){
    console.log("Precisa esperar 3 anos ainda");

}

//É possível usar 2 ifs seguidos