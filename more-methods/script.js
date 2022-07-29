//Método de array includes:
//Verifica se o array tem determinado elemento
//ex:
let carros = ["BMW", "fiat", "audi"];
console.log(carros.includes("Fiat"));//verifica se existe o item fiat na array

//exemplo usando includes e for each
//função parar conferir cada item na array carro, se o item tiver a letra a a mensagem o "o carro tem a letra a na marca" aparece
carros.forEach(carro =>{
    if(carro.includes("a"))
        console.log("O " + carro + " tem a letra A na marca");
    }
);

//Método de array reverse
//inverte um array
//ex: 
let nomes = ["João", "Maria"];
console.log(nomes.reverse());

//Método de string  trim
//remove tudo que não é string
//ex:
let texto= ' \n teste \n';
console.log(texto.trim());

//Método de string padStart
//inserir caracteres antes da string
//ex:
let milAoContrario = '1';
console.log(milAoContrario.padStart(4,"0"));//o 4 é a quantidade de caracteres a serem adicionados e o 0 é a string a ser adicionada

//Método de string split
//Divide uma string por um separador e retorna um array
//ex: 
let frase = "O rato roeu a roupa do rei de roma";
let palavras = frase.split(" ");// o " " seria o separador, podemos usar passar outras coisas como separador. ex: virgula, ponto e virgula, aspas simples, etc
console.log(palavras);
//outro ex:
let produtos = "Banana;Maça;Jaca;Pera"
console.log(produtos.split(';'));

//Método de string join
//Junta os elementos em uma array em uma frase por meio de um separador(contrario do split)
//ex:
let fraseMontada = palavras.join('<->');
console.log(fraseMontada);

//Método string repeat
//Repete uma string de acordo com um parametro number
console.log('teste'.repeat(5));

let batata = 'batata';
console.log(batata.repeat(10));


