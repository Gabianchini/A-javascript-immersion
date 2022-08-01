let cachorro = {
    patas:4,
    raca: 'SRD',
    latir: function(){
        console.log("Au au")
    }
}//criado a "classe" cachorro

let labrador = Object.create(cachorro);//foi instanciado o objeto labrador da classe cachorro que herda as propriedades da sua classe(cachorro)
labrador.latir()
labrador.raca = 'Labrador' // altera a raça do labrador de SRD(herdado de cachorro) para labrador
console.log(labrador.raca);
console.log(cachorro.raca);

//Classes construtor por funcao
//construtores sao formas de instanciar uma classe em uma linguagem de programacao
//instanciar - criar um objeto novo
//No construtor já podemos definir as propriedades
function criarCachorro(raca,patas,cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criarCachorro('Doberman', 4, 'marrom');
console.log(doberman.raca);
console.log(doberman.patas);
console.log(doberman.cor);

//Classes: construtor por new
//Em muitas linguagens temos a possibilidade de instanciar um objeto com new, no js também
//ex:
function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}
let husky = new Cachorro('Husky', 4, 'cinza');
console.log(husky.raca);
console.log(husky.patas);
console.log(husky.cor);