//Removendo elementos
//Temos como remover elemento diretamento e também um elemento filho

//remover elemento filho:
//Remover paragrafo escrito testando dentro de uma div container:
//Localizar div container
var container = document.getElementById('container');
//Localizar paragrfo com texto escrito testando
var p = document.querySelector('.paragrafo-testando');
console.log(p);
//Usar método removechild para remever o filho do container ( paragrafo escrito testando)
//entre esses parenteses você seleciona o filho que quer remover que no nosso caso é o paragrafo 
//que esta alocado na ver p
container.removeChild(p);

//remover elemento em si( que nao é filho):
//Nesse exemplo o h2 com id title2 será removido 
var title2 = document.querySelector('#title2');
//Usar metodo remove para remove-lo
title2.remove();

//ou seja
//removeChild() : remove o elemento filho
//remove() : remove o elemento em si(se esse elemento tiver filhos eles tbm serão removidos)

var cont= document.getElementById('container');
container.remove();

