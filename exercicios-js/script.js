//armazene em variaveis os tipos string, boolean e numero
let palavra = "batata";
let idade = 8;
let amor = true;
console.log(typeof palavra);
console.log(typeof idade);
console.log(typeof amor);

// crie um if que verifica a entrada da balada se tiver 18 ou mais de dezoito pode entrar se nao tiveer nao pode
function entrada(idade) {
  if (idade >= 18) {
    console.log("pode entrar na balada");
  } else {
    console.log("menor de idade nao entra na balada");
  }
}

entrada(idade);

//crie uma constante com seu nome como valor, depois uma estrutura if que verifica se o seu nome esta na constante se sim de uma saudaçÃo
const nome = "Gabriela";
function verifica(nome) {
  if (nome == "Gabriela") {
    console.log(`Olá, ${nome}`);
  } else {
    console.log("Você não é a Gabriela");
  }
}
verifica(nome);

//a funcao Math.pow exibe a potencia de um numero
//teste a funcao com console.log e as seguintes bases 2,3,18 e o expoente deve ser 2
//recebe dois argumentos, base e expoente ex: Math.pow(5,3)

console.log(`${Math.pow(2, 2)}`);
console.log(`${Math.pow(3, 2)}`);
console.log(`${Math.pow(18, 2)}`);

//armazene a velocidade de um carro em uma variavel como o numero que desejar
//se ele verifica que esta acima da velocidade é multado(vel max=80)
let vel = 100;
function velocidademax(vel) {
  if (vel > 80) {
    console.log("voce foi multado");
  } else {
    console.log("continue dirigindo com segurança");
  }
}
velocidademax(vel);

//faça estrutura if para ver se o usuario pode dirigir, armazena algumas infos sobre o usuario:
//idade, e se tem cnh
//se a idade for maior e nao possuir cnh exiba uma mensagem
//se a idade for maior que 18 e tem cnh exiba uma mensagem
//se nao tem 18 e nem cnh exiba uma mensagem

let age = 8;
let cnh = true;

function podeDirigir(age, cnh) {
  if (age >= 18 && cnh == true) {
    console.log("pode dirigir");
  }
  if (age < 18 && cnh == false) {
    console.log("Nao pode dirigir");
  }
  if (age < 18 && cnh == true) {
    console.log("menor de idade nao pode dirigir");
  }
}
podeDirigir(age, cnh);

//escreva um loop que exibe numeros de 0 a 10 no console
function loopNum() {
  for (let num = 0; num <= 10; num++) {
    console.log(`${num}`);
  }
}
loopNum();

//é possivel fazer esse mesmo exercicio dessa maneira também

let i = 0;

function loopI(i) {
  while (i <= 10) {
    console.log(`${i}`);
    i++;
  }
}

loopI(i);

