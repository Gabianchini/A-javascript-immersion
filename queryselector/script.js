//Outras formas de acessar o DOM
//com a evolucao da linguagem foram criados dois seletores
//que acabam com a complexidade desta açõ: o querySelector e querySelectorAll


//Pegando todos elementos com classe item:
var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

//querySelectorAll
//se eu quisesse pegar apenas os elementos que estao na lista2 que também tem classe item por exemplo, eu poderia fazer assim
//usando querySelector:
var itensQuery = document.querySelectorAll('#lista2 li');// entre # seria o id do elemento e o li a tag
console.log(itensQuery);
//Com  o queryselectorall ao inves do id e a tag pode se usar tbm o id  e classe:
var itensQuery2 = document.querySelectorAll('#lista .item');
console.log(itensQuery2);

//querySelector
//diferente do query seletor all esse pega apenas um elemento:
var lista = document.querySelector('#lista');
console.log(lista);
//alem do id do elemento pode usar a tag tbm:
var primeiraLista = document.querySelector('ul');
console.log(primeiraLista);

