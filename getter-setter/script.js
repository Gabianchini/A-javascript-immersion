//Getters e setters
//get: serve para resgatar o valor de uma propriedade
//set: serve para alterar o valor de uma propriedade
//ex:
class Cachorro{
    constructor(raca){
        this.raca = raca;
    }


    get verRaca(){
        return 'A raça é ' + this.raca;
    }

    set novaRaca(value){
        this.raca = value;
    }
}

let golden = new Cachorro('pastor alemao') //criado objeto de caa classe cachorro, mas a raça esta erradanao é pastor alemao e sim golden entao a raça sera trocada:
golden.novaRaca = 'Golden';
console.log(golden.verRaca);

