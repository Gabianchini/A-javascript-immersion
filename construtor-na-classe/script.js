//Construtor na classe
//Com a versao do ES6, uma possibilidade de criar uma classe(objeto)
//com construtor foi adicionada
//Então não precisamos mais criar por meoi de uma função
//ex:
class Cachorro{
    constructor(raca,patas,cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro('Labrador', 4, 'amarelo');
console.log(labrador.raca, labrador.patas, labrador.cor);