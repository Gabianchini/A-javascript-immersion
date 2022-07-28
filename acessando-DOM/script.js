/* Acessar  o DOM caracteriza-se por identificar um elemento do HTML através de métodos
depois podemos manipulalos da forma que quisermos.Acessar o DOM é semelhante as regras de CSS
podemos acessar por tags, ids, classes */

//acessando elementos por tag
var titulo = document.getElementsByTagName('h1')[0];//essse [0] é qual o h1 vc quer acessar caso uma pagina tenha mais de uma tag h1
//se eu quisesse pegar todas as tags h1 era só nao colocar o [indice]
console.log(titulo);


//Acessando por id
var paragrafo = document.getElementById('paragrafo');//entre as aspas coloca a id do elemento que vc quer acessar
console.log(paragrafo)

//Acessando por classe
var itensDaLista = document.getElementsByClassName('item');//entre as aspas coloca a classe do elemento que vc quer acessar