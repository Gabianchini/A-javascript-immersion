//Rest operator
//Uma forma de uma funçÃo receber indefinidos parametros
//o operador rest vai virar um array
// o parametro é definido por: ...nome
//dessa forma o usuario pode colocar quantos parametros ele quiser
//ex:
function imprimirNumeros(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
}
imprimirNumeros(3,4,5,6,7);
console.log('pausa');//esse console.log é so para facilitar na hora de ver oq esta acontecendo no console
imprimirNumeros(2);
console.log('pausa');
imprimirNumeros(3,4,5);
