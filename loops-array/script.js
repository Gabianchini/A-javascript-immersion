//Loops em arrays
//Técnica muito usada
//Como é uma lista com muitos valores. muitas vezes precisamps ver cada um deles
let nomes = ["Ana", "João", "José"];

for(let i=0; i<=nomes.length; i++){
    console.log(nomes[i]);
}
//usa se o [] para dizer qual oo indice do array queremos
//nesse caso definimos a let i como o indice
//a variavel começa com 0 (ana) e vai icrementando 1 a cada loop,
//virando entao 1 (joao) e por ultimo josé

//exemplo dois

let frutas = ["banana","maçã","pera", "abacate", "alface"]
for(let indice=0; indice!=4; indice++){
    console.log(frutas[indice]);
}
//nesse caso foi criado um loop para só mostrar as frutas da array
//entao foi colocado a condição que que só mostraria na tela até o indice 3(diferente de 4)
//pois o indice quatro é o indice da alface e alface nao é fruta

