//Bug e debug
//Bug: Problema que ocorre no código, muitas vezes por erro do programador que impede o funcionamento correto do mesmo
//Debug: O ato de resolver os bugs encontrados no código ou também a forma que é feita a visualizacao de valores de variaveis ou fluxo do codigo
//obs: alguns codigos estao comentados só para nao atrapalhar a execucao de outros codigos mas pode descomentar para ver os acontecimentos
//strict mode
//Deixa o java script mais rigoroso na hora de se programar
//Deve ser declarado no topo de arquivos ou funções
//colocar o strict ajuda você a codificar de forma correta e não vai impedir/limitar nada no seu software ou programa
//veja o exemplo de uma variavel declarada sem let/const/var

//"use strict"

//opa = 'teste';

//console.log
//Um método bastante utilizado para debug é o console.log
//Usa pra mostrar as coiss no console, ele ajuda a encontrar o erro que procuramoe e mostra no console tbm


//debugger
//funcionalidade que para o código quando atingir a linha debugger
//ex:
let a = 1;
let b = 2;

if(a == 1){
    a = b + 2;
}

for(i = 0; i < b; i++){
    a = a + 2;
}

//debugger;

if(a>10){
    a == 25;
}

//Tratamento de inputs por função
//Não podemos controlar os dados que o usuario enviar entao para o bom funcionamento do software, devemos tratar eles
//Veja um exemplo de tratamento de input:
function checarNumero(valor){
    let resultado = Number(valor);
    if(Number.isNaN(resultado)){
        console.log(" porfavor passe so numeros para o programa");
} else {
    return resultado
}
}
console.log(checarNumero(5));
console.log(checarNumero(" teste")); 

let number = prompt("Digite um numero");
checarNumero(number);

//Exceptions
//Podemos criar erros no programa, caso alguma condição não seja atendida
//podemos as exceptions abortam o programa, só geram o erro
//ex:
let c = 1;
if(c != 2){
   // throw new Error("O valor de a não pode ser 1");
}
//outro exemplo:
//funcao que cria saudacao com o nome dado como parametro
//se o nome dado nao for uma string criamos um erro que vai mostrar que nome precisa ser uma string
function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error("O paramtro nome precisa ser uma string");
    }else{
        console.log(`Olá , ${nome}`);
    }
}

saudacao("julia");

//Try e catch
//O bloco try e catch, vai tentar executar um código, caso nao consiga ele pode retornar o erro que esse código gerou
//muito util para debug

try{
    let d = a + b;
}catch(error){
    console.log("Algo deu errado:" + error);
}

//finally
//finally é executada independente do resultado do try/catch
//e pode existir try e catch ou apenas try
//ex:
try{
    let c = a + b;
}catch(error){
    console.log("Algo deu errado: " + error )
}finally{
    console.log("executou")
}

//Assertion
//Verificações no programa, que são utilizadas para assegurar que tudo ocorra da forma esperada
function iterarArray(arr){
    if(arr.lenght == 0){
        throw new Error("Oo array precisa ter elementos");
    }else{
        for(let i = 0; i<arr.lenght; i++){
            console.log(arr[i]);
        }
    }
}
