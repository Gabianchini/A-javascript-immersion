//length
//muda o comprimento/quantidade de caracteres que uma string possui:
var nome = "Matheus";
console.log(nome.length);
//vai mostrar no console o numero 7, que é o número de caracteres que a string matheus tem

//indexOf
//Mostra o índice do caractere em uma string:
var frase = "O rato roeu a roupa do rei de roma";

console.log(frase.indexOf("roeu")); 
//mostra no console o índice que está a palavra roeu, que no caso é 7

//slice
//remove parte da string:

var roeu = frase.slice(7,11);// esse 7 se refere apartir de que caractere sera eliminado e o 11 até onde vai ser eleminado
console.log(roeu);

//replace
//trocar palavra da string:

var novaFrase = frase.replace("roeu", "teste");// O "roeu" é a palavra a ser substituida e o teste é a palavra que substituirá
console.log(novaFrase);

//toLowerCase e toUpperCase
//Deixar texto de caixa alta ou caixa baixa:
var frase2 = "Está é a frase que vamos manipular";

//minusula:
console.log(frase2.toLowerCase());
//maiuscula:
var fraseCaixaAlta = frase2.toUpperCase();
console.log(fraseCaixaAlta);


//trim
//Tirar espaços excessivos:

var nome= "       Matheus       "
var nomeTrim = nome.trim();
console.log(nomeTrim);


//split
//Transformar string em array:
console.log(frase2.split(""));
//ou
var tags = "PHP, JS, HTML, CSS";
console.log(tags.split(" , "));

//lastIndexOf
//Encontra o ultimo indice da palavra que vc escolher da string
var fraseDois = "Eu quero a última palavra teste dessa variavel, teste";
console.log(fraseDois.lastIndexOf("teste"));
