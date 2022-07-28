//Fora de escopos locais o this smepre se refere ao objeto globak Window
//Em objetos o this vai se referir a ele mesmo e pode acessar suas propriedades
let pessoa = {
    nome:"Matheus",
    idade: 29,
    falar: function(){
        console.log("Olá tudo bem?");
    },
    dizerNome: function(){
        console.log("O meu nome é" + this.nome);
    },
    aniversario: function(){
        this.idade += 1;
    }, //adiciona mais um ano na idade da pessoa(objeto) quando a função aniversário acontece
    saudacao:function(){
        return 'Olá, Sr.' + this.nome;
    }
};


pessoa.dizerNome();

console.log(pessoa.idade);
pessoa.aniversario();// funcao aniversario acontece e adiciona mais um ano na idade da pessoa, que é o objeto
console.log(pessoa.idade)//agora ao mostrar a idade na tela observa-se que a pessoa tem 30 anos e nao 29, pois ela fex aniversario
console.log(pessoa.saudacao());
