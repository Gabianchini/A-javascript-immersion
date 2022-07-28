//setTimeout e setInterval
//Podemos com estas funções criar ações no software que executam depois de um tempo ou de tempos em tempos
//um dos argumentos destas funções é uma callvack function


//setTimeout
setTimeout(function()  {
    
    console.log("testando o setTimeout");
    
}, 2000);
//como parametro o setTime out recebe uma functione e depois um numero em milissegundos
//que é o tempo que vai demorar para a função ser executada
//nesse caso vai demorar 2 segundos para aparecer o console log( 2000ms = 2s)


//setInterval
setInterval(function(){
    console.log("Testando setInterval");
},1000);

//o setInterval funciona como um loop com intervalo de determinado segundos(nesse caso 1 segundo(1000ms = `1s)) se vc nao define quando é para parar de rodar
//a função, nesse exemplo acima ele n define uma parada e fica em loop.Isso pode causar
//um consumo de memória muito grande e travar computadores


//clearTimeout e clearInterval
//Podmeos por um fim em setTimeout e setInterval por meio desses 2 métodos
//Então após determinada condição os timers não serão mais executados


//clearTimeout

var x = 0;

var myTimer = setTimeout(function() {
    console.log("o X é igual a 0")
}, 1500);

x=5;
//agora o x é igual a 5 e nao faz mais sentido mostrar a mensagem no console log
//entao vamos parar essa funcao usando clearTimeout

if(x > 0){
    clearTimeout(myTimer);
    console.log("O x não é mais igual a zero")
}



//clearSetIntercal

var myInterval = setInterval(function(){
    console.log("imprimindo interval")
},500);
//parando o loop do setInterval e excluindo o intervalo depois de 1,5 segundos
setTimeout(function(){
    console.log("Não precisamos mais repetir!");
    clearInterval(myInterval);
},1500);




