//Overrride nas propriedades do prototype
//Sempre que adicionamos uma propriedade a um objeto é criada uma identica no prototype
//podemos substituir a do prototype
//ex:
class Cachorro {
    constructor(raca,patas,cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let poodle = new Cachorro('Poodle');
Cachorro.prototype.raca = 'SRD';
console.log(poodle.raca);
console.log(Cachorro.prototype.raca);