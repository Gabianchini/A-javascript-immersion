/*Funções
São blocos de código reutilizáveis, ou seja evitamos a repetição da lógica de um programa em diversas partes do código
A função precisa ser invocada para ser executada
*/
//Sintaxe:
function primeiraFuncao(){

    console.log("Hello World das funções");

}
//Chamando a função:
primeiraFuncao();

//Funções com parametros:

function dizerNome(nome){

console.log("O nome é " + nome);

}

dizerNome("Matheus");
dizerNome("João");
dizerNome("Gabriela");

//Exemplo: passando uma variavel como parametro em uma função:

var nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados)


//Exemplo função com return
//A declaração return finaliza a execução de uma função
// e especifica os valores que devem ser retonados para onde a função foi chamada.
function soma(a,b){
    var soma = a + b;
    return soma;
}

var somaUm = soma(2,5);

console.log(somaUm);

var somaDois = soma(5,5);

console.log(somaDois);

console.log(soma(4,5));

//Quando uma declaração return é usada em um corpo de função, a execução dessa função é parada. Se especificado, um dado valor é retornado à quem chamou a função.
// Se a expressão for omitida, undefined será retornado.
//Não é permitido ponto e virgula entre o return e a expressão
//exemplo:

//return;
//a + b;
//vai dar erro pois nao pode esse ponto e virgula entre return e a + b


// É possivel tbm usar return para retorna uma função:
function magic(x) {
  return function calc(x) { return x * 42; };
}

var answer = magic();
answer(1337); // 56154
console.log(answer(10));

//nesse caso a conta que foi feito foi 1337 * 42
// A variavel answer recebe a funcao magic que faz o calculo e logo depois
//a var answer recebe o parametro para a funcao magic

//(ps:Ao usar return nao é obrigatorio colocar a funcao em uma variavel como foi feito com a funcao magic
//na variavel answer)

