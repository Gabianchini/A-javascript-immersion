//While
//O while serve para repetir n vezes uma operação
//Por exemplo: repetir uma determinada lógica em cada elemento de um array
// As estruturas mais comuns são: while e for
//Obs: cuidado com o loop infinito
//O while é a estrutura de repetição mais simples do JavaScript
//A ideia é que se repita algo até atingir tal condição
//While --> Enquanto
var x = 0;

while(x < 5){
    console.log("Testando repetição" + x);

    //incrementador
    x++;
}

var arr = [ 'teste', 'testando', 'a', 'b'];
var y = 0;

while(y <= 3){
    console.log(arr[y]);

    y++;
}

var palavra = "Matheus";
var i = 0;

while(i <= 6) {
    console.log(palavra[i]);

    i++;
}
