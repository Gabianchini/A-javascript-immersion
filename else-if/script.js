//else if
// Caso a instrução de if seja negativa podemos adicionar else
//que será a outra condicional a ser executada
//Podemos então criar uma bifurcação no código
//já o else if tem a possibilidade de fazer outra verificação
//e adicionar mais um bloco de código


//exemplo com if else
var nome = "Matheus";

if(nome == "Pedro"){
    console.log("O nome dele é Pedro");
}else{
    console.log("O nome dele não é Pedro");
}

//exemplo com if else if else
//nesse caso o else if é adicionado depois do if e antes do else, podem ser
//colocados quantos else if vc quiser desde que seja no lugar certo ( depois do id e antes do else)
//o else só é executado caso o if e else if sejam falsos
if(nome=="Pedro"){
    console.log("O nome dele é Pedro");
}else if(nome == "Matheus"){
    console.log("O nome dele é Matheus");
}else{
    console.log("Ele possui outro nome!");
}
//também é possivel escrever uma condição com apenas if e else if, sendo o else opcional:

var idade=20;

if(idade>19){
    console.log("Pode entrar na festa");
}else if(idade>=18){
    console.log("Pode entrar na festa só com autorização");
}