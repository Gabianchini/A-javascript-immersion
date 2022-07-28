//Operador lógico || é também conhecido como OR
// Ele retorna true caso pelo menos uma das condiçãos seja verdadeira
// e retorna false apenas se as duas condições são false
var idade = 16;
var nome = "João"

if(nome == "joão" || idade > 14){
    console.log("Pode entrar na aula de esgrima");
}else{
    console.log( "Não pode entrar");
}

// É possivel tbm juntar operadores, nesse exemplo foi usado o 
// || or e and && , o patenteses é usadopara sinalizar qual operação deve ser feita primeiro
 if((nome == "Pedro" || 15 > 20) && 10 == 20){
     console.log("testando");
 }
 //nesse caso todas as constatações sao falsas pois o nome
 // é igual a joao, 15 nào é maior que 20 e 10 nao é igual a 20
 //e para que o console funcionasse  todas as condiçoes devem ser verdadeiras, pois o &&
 //esta fora do parenteses, como foi falso a mensagem no console log n apareceu