//Nessa sessão iremos aprender a como deletar e criar propriedades em um objeto ao longo do nosso programa
 let carro = {
    marca:"VW",
    portas: 4,
    eletrico: false,
    motor: 1.0
 }

 console.log(carro.portas)//mostrar propriedade portas do objeto carro

 delete carro.portas; // deletar propriedade portas do objeto carro

 console.log(carro.portas);//nesse caso como a proriedade foi deletada vai aparecer undefined no console

 carro.tetoSolar = true; //criar propriedade tetoSolar do objeto carro

 console.log(carro.tetoSolar);

 // Outro exemplo:

 let pessoa = {
    nome:"Matheus",
    idade: 29,
    profissao: "Programador",

 }

 console.log(pessoa.nome);

 delete pessoa.nome

 console.log(pessoa.nome);//undefined pq a propriedade foi deletada

 pessoa.casado = true; //criou propriedade nova para obj pessoa, ao criar a propriedade sempre devemos dar o valor da propriedade junto, que no caso seria true, maspode ser uma string, numero, etc

 console.log(pessoa.casado);

 


