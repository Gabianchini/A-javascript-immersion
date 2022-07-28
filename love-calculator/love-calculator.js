 /* A calculadora do amor pega o nome de duas pessoas e 
 da a quantidade de compatibilidade entre elas, é usado um gerador de números aleatórios
 para fazer isso */

 /*var n = Math.random() é uma Função que gera números aleatórios entre 0-0.9999999*/
/*É possível fazer gerar números que ultrapassam 1 multiplicando(exemplo:n = n*6;) o valor e arredondando com a função:
n = Math.floor(n); */

prompt("Whats is your name?")
prompt("What is their name?")

var loveScore = Math.random() * 100; /* multiplica por 100 para gerar numeros de 0.999 até 99,99999;*/
loveScore = Math.floor(loveScore); /* arredonda o valor*/
loveScore = Math.floor(lovescore)+1;/* ao adicionar 1, o valor começa a contar a partir de 1 e até 100 definitivamente */

/* criar mensagem caso o valor de compatibilidade do casal dê mais de 70%*/
if(loveScore === 100){
    alert("Your love score is " + loveScore + "%" + "You love each other like Kanye loves Kanye");
/* criar mensagem caso o valor de compatibilidade seja menor que 30% e <= 70%*/
if( loveScore > 30 && loveScore <= 70){
    lert("Your love score is " + loveScore + "%");
}
/* criar mensagem caso o valor de compatibilidade seja muito baixo, no caso = ou menor que 30 por cento*/
if(loveScore<= 30){
    alert("Your love score is " + loveScore + "%" + "You go together like oil and water");
}



