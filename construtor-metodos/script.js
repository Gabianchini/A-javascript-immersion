//Classes: construtor com método
//Além de propriedades podes criar a classe base já com métodos
//Basta definir ao prototype o método desejado
//ex:
function Cachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){ // criando um método uivar para o objeto pai pelo prototype, todos os oobjetos filhos vao herdar esse método tbm
    console.log('Auuuuuu');
}

Cachorro.prototype.latir = function(){
    console.log("au au")
}

let pug = new Cachorro('Pug',4,'cinza');

console.log(pug.raca, pug.patas, pug.cor);
pug.uivar();

