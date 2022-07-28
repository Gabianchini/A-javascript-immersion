//Operador NOT
//O operador lógico ! é conhecido também como NOT;
//Este operador muda o valor que a expressao retornou
//Se recebeu true vira false, se recebeu false vira true
if(!true){
    console.log("passou!");
}
// a mensagem n vai ser mostrada pois o ! muda o valor true para false

//Outro exemplo:
var nome="Matheus";

if(!(nome=="João")){
    console.log("Ok");
}
//Embora o nome n seja igual a joao e sim matheus, o console log foi mostrado por o 
// ! trocou o false pelo true da condição