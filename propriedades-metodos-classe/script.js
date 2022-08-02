//Mais sobre classes
//Não podemos adicionar propriedades na classe, só via prototype
//A classe só aceita métodos
//ex:
class Cachorro{
    constructor(raca,patas,cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au AU");
    }
}

Cachorro.prototype.patas = 4;//numero default de patas ao instanciar um objeto da classe cachorro

let poodle = new Cachorro('poodle','branco');
console.log(poodle.patas);// Como visto o numero de patas default dos objetos da classe cchorro serao igual a 4 

//Symbols
//Symbols sao propriedades unicas que nao podem ser alteradas e nem criadas duas vezes
//podemos utiizar como uma constante, só que para propriedade de objeto
//ex:

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

const maos = Symbol();//basicamente diz que o valor de maos é fixo para todos os objetos filhos de Pessoa, embora o nome das pessoas possam ser diferentes, todas as pessoas terã0 2 mãos
Pessoa.prototype[maos] = 2;

let crianca = new Pessoa('Maria');
console.log(crianca.nome);
//acessar symbol
console.log(Pessoa.prototype[maos]);
console.log(crianca.prototype[maos]);