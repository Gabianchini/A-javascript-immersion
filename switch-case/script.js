//A estrutura condicional switch permite executar um bloco de código diferente
//de acordo com cada opção (cada case) especificada.

//sintaxe
/*
switch(expressao){
  case n1:
    [bloco de código 1]
    break;
  case n2:
    [bloco de código 2]
    break;
  case [...n]:
    [bloco de código 2]
    break;
 default:
   [bloco de código 3]
}
*/

//Exemplo:
let tipoUsuario = "Admin";

switch (tipoUsuario) {
  case "Admin":
    mensagem = console.log("*|*| Feliz Natal, chefe! |*|*");
    break;
  case "Gerente":
    mensagem = console.log("Boas festas, meu amigo!");
    break;
  default:
    mensagem = console.log("Boas festas!");
}

//vai aparecer no console feliz natal chefe pois definimos o tipo de usuario como admin em
// let tipoUsuario = 'Admin'

//Outro exemplo

let idade = 19;

switch (idade) {
  case 5:
    console.log("Você é uma criança pequena");
    break;
  case 12:
    console.log("Você é pré-adolescente");
    break;
  case 18:
    console.log("Você tem 18 anos de idade");
    break;
  default:
    console.log(`Sua idade é de ${idade}`);
}

