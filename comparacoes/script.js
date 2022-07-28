var idade = 18;

if (idade >= 18) {
  console.log("Pode fazer a carteira de habilitação");
}

if (idade <= 17) {
  console.log("Usuário não pode tirar carteira de habilitação");
}

//No js o 0 é interpretado como false e o 1 como verdadeiro
//exemplo:

var possuiCarro = 1;

if (possuiCarro) {
  console.log("O usuário já pode andar de carro");
}

//se a var possuiCarro for igual a 0 o console log nao vai executar
//pois o 0 é equivalente a false

// operadores de comparação ==(igual) e !=(diferente)
var nome = "Matheus";

if (nome == "Matheus") {
  console.log("O seu nome é Matheus");
}

if (nome != "Matheus") {
  console.log("O nome não é Matheus");
}
