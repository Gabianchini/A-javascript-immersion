//Herança
//Uma classe pode herdar propriedades de outras classe por herança
//para isso usamos extends

class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{// Nesse caso o cachorro herdou a propriedade patas da classe mamifero
    constructor(patas, raca){// deve se usar esse super para indicar a propriedade que sera herdada 
        super(patas, patas);
        this.raca = raca;
    }
}

let pug = new Cachorro(4, 'Pug');
console.log(pug);

//Instance of operator
//podemos verificar quem é o pai do objeto utitlizando o instane of
//ex:
console.log(new Cachorro instanceof Mamifero);//vai dar true pois cachorro é uma instancia de mamifero como ele herdou uma de suas propriedades
console.log(pug instanceof Mamifero);