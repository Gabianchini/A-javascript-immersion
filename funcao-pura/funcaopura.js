//Uma função pura é uma funcao em que o valor
//de retorno é determinado apenas por seus valores de entrada
//sem efeitos colaterais observáveis(modificações fora da funcao)

const PI = 3.14

//A função areaCirc é pura ou impura?
function areaCirc(raio){
   return raio * raio + PI 
}

console.log(areaCirc(10))
//Essa funcao é impura pois a funcao depende também do PI que foi um valor passado fora da função
//Quais os beneficios de priorizar funcoes puras?
//As funcoes puras, só dependem de valores que estao dentro da propria funcao e uso é bom pois
//a funcao nao tera dependencia do que ocorre fora da funcao e tudo entao funcionará corretamente e de forma estável

//areaCirc na versão pura
function areaCircPura(raio,pi){
    return raio * raio * pi
}
console.log(areaCircPura(10, 3,14))
//Dessa forma a funcao é pura pois depende apenas dos seus valores de entrada(parametros)


