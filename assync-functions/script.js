//Funções assincronas
//Podemos criar funcoes assincronas com a palavra reservada async
//elas retornam uma promise
//se retornar algo a promessa é resolvida se der alguma exception a promessa é rejeitada
//ex:
async function somar(a,b){
    return a + b;
}

somar(2,2).then(function(value){
    console.log(value);
});

//usando o await
//Nas async functions podemos determinar uma instrução await
//que vai esperar uma promise ser resolvida, para apresentar os resultados
function somaComDelay(a,b){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve(a + b);
        },4000);
    })
}

async function resSoma(a,b,c){
    let x = somaComDelay(a,b);
    let y = c;

    return await x + await y;
}
resSoma(1,2,3).then(value => console.log(value));

//Generators
//funções funcionam semelhantes as promises
//onde ações podm ser pausadas e continuadas depois
//caracterizados pelos function e yield, veja:
//o yeld pode salvar o estado da variavel
//exemplo:
function* genTest(){
    let id = 0;
    while(true){
        yield id++
    }
}

let criarId = genTest();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);

