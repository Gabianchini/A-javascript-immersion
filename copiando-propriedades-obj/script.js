//Nessa sessão vamos aprender a copiar todas as propriedades de um obj para outro

let objetoA = {
    prop1: 'teste',
    prop2: 'testando',
}

let objetoB = {
    prop3:'propriedade',
}

Object.assign(objetoA, objetoB); // Esse comando faz o objetoA herdar todas as propriedades do objetoB
//O primeiro parametro do assign é o objeto que queremos que receba as propriedades
//O segundo paramtro do assign é o objeto que enviará suas propriedades


console.log(objetoA);

//As propriedades de um objeto são chamadas também de keys(chave), e o valor da propriedade é chamada de valor mesmo.
//existe um método para conferir qual são as chaves(propriedades) que um objeto possui
//o nome desse método é keys()
//Exemplo:

let obj = {
chave1:1,
chave2:2,
chave3:3,
}

console.log(Object.keys(obj));

//observaçoes sobre propriedades: podemos escreve-las tbm usando aspas simples
//ex:

let objeto = {
    'chave1':1,
    'chave2':2,
    'chave3':3,
    }