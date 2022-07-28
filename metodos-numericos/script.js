//Método parseFloat 10.0
//transforma uma string em número com ponto ou virgula:
console.log(parseFloat('12.999'));

//parseInt
//tranforma uma string em um número inteiro:
console.log(parseInt('10'));
//Também é possível arredondar um número com ponto e vírgula para inteiro:
console.log(parseInt(16.96)); // mostrará no console 16

//toFixed
//Limitar casas decimais de um número:
console.log(23.99.toFixed(1)); //Esse (1) corresponde a oo número de casas que vc quer manter
//Aparecerá no console 24.0 (apenas uma casa e o valor é arredondado também)

//isNan
//Verifica se elemento náo é um número:
console.log(isNaN("teste"));
console.log(isNaN(12));

//Max_value e Min_value
//Mostra o valor mínimo e máximo do java script aconselhados a serem trabalhados no 
//java script
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

