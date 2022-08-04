//O que sao expressoes regulares
// Uma forma de encontrar padrões em uma string
//por ex: validar se tem só numeros
//Em vez de criarmos funcoes complexas podemos encontrar dados em texto por meio das expressoes regulares, tbm chamadas de regex

//Criando uma expressao regular:
//sao um tipo de objeto: podemos instancialo de duas formas New RegExp e /.../;
//ex:

let reg1 = new RegExp("test");
let reg2 = /bola/;

//testando uma expressao regular
//depois da definição do padrao por meio da expressao regular
//usamos o método test() para verificar se o padrão é retornado
//com isso vamos receber de resposta true of false
//ex:

console.log(reg1.test("tttttestandooooooo"));
console.log(reg1.test("shaushaushuahsua"));

//outro exemplo
let texto = 'tem bola na cesta'
console.log(reg2.test(texto));

//conjunto de caracters
//podemos definir um conjunto de caracteres para encontrar por regex
//basta por entre []
//com um traço podemos definir um intervalo também, veja:
console.log(/[123]/.test("Existe 123 aqui?"));
console.log(/[0-9]/.test("O número 8 está presente aqui?"));

//Operador not ^
//podemos escrever um set que aceitam tudo menos alguns caracteres com o not
//lembrando que combinacoes serao aceitas o negado é apenas se bate com o set
//mais adiante aprenderemos a negar de outras formas
//ex:
let palavraSem123 = /[^123]/;

console.log(palavraSem123.test("1112"));
 console.log(palavraSem123.test("14"));
 console.log(palavraSem123.test("9"));
 //obs: se tiver alguma coisa que ele aceite vai dar true, só da false se tiver apenas oq ele nao aceita

 //método exec
 //nos retorna um objeto com algumas informaçoes sobre a regex
 //se nada for encontrado da null
 //ex:
 let teste = /\d+/.exec("o numero 100")
 console.log(teste);
 console.log(teste.index);

//choice pattern
//podemos colocar uma instruçÃo na regex que funciona com um || (or) das condicionais
//ex:

let frutas = /\d+ (bananas|maçãs|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));

//Exercicios
//crie um regex que aceite só letras maiusculas
const validarMaiuscula = /[A-Z]/;
console.log(validarMaiuscula.test("testando"));
console.log(validarMaiuscula.test("TESTANDO"));