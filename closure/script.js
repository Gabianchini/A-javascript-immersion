//Closure é quando uma função "lembra" seu escopo léxico, mesmo quando a função é executada fora desse escopo léxico
//Closure é quando uma função consegue lembrar e acessar seu escopo léxico mesmo quando está sendo executada fora dele.
//O escopo é definido no momento de criação e preservado na compilação, o que significa que a função bar definida dentro de uma função foo vai ter acesso ao escopo externo de foo. E foo será o escopo léxico para bar.
function foo() {  // escopo léxico para bar
   var memory = 'isto é closure';
   return function bar() {
      console.log(memory);
   }
}
var memory = null,
    baz = foo();
baz(); // 'isto é closure'

//Em resumo, escopo é a política que rege as variáveis e sua disponibilidade. Podemos declarar variáveis usando const, let e var, a depender de como serão utilizadas.

//Escopos podem ser aninhados e dentro de um escopo é possível acessar as variáveis do escopo externo.
//Por fim, escopo em JavaScript é um tema bastante amplo, que requer calma e estudo para ser entendido, mas também muito importante para entender como a linguagem funciona por baixo dos panos e, assim, compreender melhor diversos conceitos.

//Outro exemplo:
//no arquivo exemplo criarei a funcao somarXmais3

const somarXmais3 = require('./exemplo')//veja usando o terminal com node nao é possivel ver no console do browser 

const x = 1000

console.log(somarXmais3())


