//Desestruturação de objetos
//podemos definir variaveis com propriedades do objeto com uma notaçÃo diferente, chamada destructuring
//ex:
const person = { //cria objeto pessoa
    name:'Jhon',
    lastname: 'Doe'
}
 
const {name: fname, lastname:lname} = person; //define uma constante com as propriedades do obj person
//agora podemos usar essas constantes no programa:
console.log(fname);
console.log(lname);

//outro exemplo
let carro = {
rodas:4,
portas:4,
tetoSolar: true,
motor: '2.0'
}

const{rodas:rodasCarro, portas:portasCarro, tetoSolar:tetoCarro, motor:motorCarro} = carro;

console.log(rodasCarro);
console.log(portasCarro);
console.log(tetoCarro);
console.log(motorCarro);
console.log(rodasCarro,portasCarro,tetoCarro,motorCarro);