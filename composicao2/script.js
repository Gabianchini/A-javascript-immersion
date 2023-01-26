function composicao(...fns){
    return function(valor){
        return fns.reduce((acc,fn) => {
            return fn(acc)
        },valor)
    }
}

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto}!!!`
}

function tornarLento(texto){
    return texto.split('').join('')
}

const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
)

const MenosExagerado = composicao(
    enfatizar
)

const resultado = exagerado("PARA")
const resultado2 = MenosExagerado('cuidado com o buraco!')
console.log(resultado)
console.log(resultado2)
