//Criar objetos:
let pessoa = {
    nome:"Matheus",
    idade: 29,
};

//acessar dados do objeto:
console.log(pessoa.nome);
console.log(pessoa.idade);

//É possível criar um objeto que tem uma função como propriedade
let pessoa2 = {
    nome:"Matheus",
    idade: 29,
    falar: function(){
        console.log("Olá, eu estou falando com você!")
    }
};

//executar função falar do objeto pessoa2:
 pessoa2.falar();


//Outro exemplo de objeto com função( dessa vez a função retornará algo):
let pessoa3 = {
    nome:"Matheus",
    idade: 29,
    soma: function(n1,n2){
        return n1 + n2;
        
    }
};

var resultado = pessoa3.soma(2,3);
console.log(resultado);