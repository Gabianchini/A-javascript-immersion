// Dados  mutáveis
const nums = [4,8,3,2,9,1,9,3]
let valor = 0

for(let i = 0; i < nums.length; i++){
    valor += nums[i]
}

console.log(valor)

//Reduce
const somar = (a,b) => a +b
const total = nums.reduce(somar)
console.log(total)

//Recursividade
function somarArray(array,total = 0){
    if(array.length === 0){
        return total
}
    return somarArray(array.slice(1), total + array[0])
}

const resposta = somarArray(nums)
console.log(resposta)

//outro exemplo:
const pessoa = {
    nome:'Maria',
    altura:1.76,
    cidade:'São Paulo'
}
//mudando os valores:
pessoa.nome = 'João'

pessoa.cidade = 'Fortaleza'

console.log(pessoa)
//atribuição por referencia: criando nova pessoa apartir da const pessoa
const novaPessoa = pessoa
console.log(novaPessoa)
//elas serao iguais pois estamos criando uma usando a outra de referencia
//alterando valores do novaPessoa:
novaPessoa.nome = 'Maria'
novaPessoa.cidade = 'Bahia'
console.log(novaPessoa)
