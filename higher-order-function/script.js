//Higher order function:
//Funções que operam em outras funçòes, tomando-as como argumentos ou retornando-as
//ex:
//essa funcao vai receber como parametro outra funcao e os parametros que daremos a essa funcao
//oq ela fara é executar a funcao que passarmos junto a um texto
function executar(fn,...params){
    return function(textoInicial){
        return `${textoInicial} ${fn(...params)}!`
    }
    
}

function somar(a,b,c){
    return a + b + c
}

function multi(a,b){
return a * b
}

const r1 = executar(somar,4,5,6)('O resultado da soma é')
const r2 = executar(multi,30,40)('O resultado da multiplicação é')
//logo as funcoes passadas foram a somar e multi e os parametros delas sao o 4,5 e 6 e o 30,40
//como é possivel ver a funcao executar rodou as funcoes com seus paramtros junto a um texto no console
console.log(r1,r2)

