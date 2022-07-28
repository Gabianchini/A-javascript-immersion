var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão'];

//criar no html uma lista apartir dos elementos do array
 
//criar lista ul:

var listaUl = document.createElement('ul');

//inserir lista ul no body do html:
//o elemento é pego pela tag body
var body = document.getElementsByTagName('body');
// ver o body no html
console.log(body[0]);

body[0].appendChild(listaUl);
//lista criada
//adicionar items na lista
var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++){

    var liFor = document.createElement('li');

    //adicionar texto dentro da li

    var textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    listaNoBody[0].appendChild(liFor);
}

