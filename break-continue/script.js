/* Break e Continue
- Com break podemos encerrar uma instrução
- Com o continue podemos pular uma instrução
- Utilizado na maioria das vezes em loops
*/ 

//Exemplo break
for(var i = 10; i > 0; i--){

    console.log(i);

    if(i === 5){
        break;
    }

}

console.log("Deu o break");

//Exemplo continue
//Nesse caso foi declarado a variavel x o valor 10
/* e foi criado um while que diz que
enquanto a variavel x seja menos que 100 mostrará 
console.log( testando continue + x) e somará mais 10 na variavel
e entap foi inserido um if que dita que quando o x
for igual a 60 ao inves da mensagem anterior aoarecerá a mensagem
"continue" e depois que nao for mais igual a 60 continuara normalmente
na mensagem anterior( testando continue + x)*/


var x= 10;

while( x < 100){
    x += 10;

if(x === 60){
    console.log("Continue");
    continue;
}

    console.log("Testando continue" + x);

}