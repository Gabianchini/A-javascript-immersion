//Métodos 
//Propriedades que servem como funções, ouseja as açòes do objeto
//Invocamos os métofos da mesma maneira que as funções
//sintaxe:
let cachorro = {
    latir: function(){
        console.log("Au au");
    }
}

cachorro.latir();
//normalmento os métofos interagem com osobjetos
//Até mudando os valores das suas propriedades para corresponder a logica do programa dessenvolvido
//ex:
let pessoa = {
    nome: '',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return this.nome;
    }

}

pessoa.setNome("Matheus")
console.log(pessoa.getNome());

//Prototypes
//é um objeto de outro objeto
//Quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procura no prototype deste objeto
//O prototype de um objeto criado do zero é o Object que tem os métodos nativos da linguagem
//ex:
let corpo = {
    maos:2
}
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);
//Quando criamos um objeto a partir de um outro, o base será o prototype
//ele herdará tanto os métodos e propriedades de Object( o prototype do objeto base)
//Quanto os do objeto base para este novo
//ex:
const corpoNovo = Object.create(corpo);//Fazer o corpoNovo herdar as propriedades do object dorpo
console.log(corpoNovo.maos);
console.log(corpoNovo.hasOwnProperty('maos'));//deu falso pois a propriedade maos foi herdada da let corpo  e nao por ele mesmo
//Classes
//O prototype do javascript pode ser chamado de classe
//pois nas outras linguagens uma class é um molde de um objeto
//ou seja, podemos criar diversos objetos em cima de um prototype
//ex:
let dog = {
    raca:'srd',
}

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = 'Pastor Alemão';
console.log(pastorAlemao.raca);