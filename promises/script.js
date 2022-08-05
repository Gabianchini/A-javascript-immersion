//Promises
//As promises sao ações assincronas que podem produzir um valor em algum omento no código
//Uma forma de dizer a linguagem que um valor pode estar presente em um futuro código
//o objeto das promises é Promise, resolve é o método que resolve uma promise, o then é que faz ela poder ser executada e m um ponto futuro
//exemplo:
let promessa = Promise.resolve(4 + 8);
console.log('Algum código');
promessa.then((value) => console.log(`A soma é ${value}`));

//outro exemplo:
let p = Promise.resolve(5);
console.log("outros codigos");
p.then((letra)=> console.log(`O numero é ${letra}`));
//pode se usar a mesma promise mais de uma vez

//Falha nas promises:
//Uma promise pode falhar, podemos reter esse erro com um método chamado catch
//Com ele podemos exibir o erro no console.por exemplo, e fazer o debug no código
//ex:
let promisseErrada = Promise.resolve(new Error("Algo deu errado"));
promisseErrada
    .then((value) => console.log(value))
    .catch(reason => console.log("erro: " + reason));

//rejeitando promises
//Além do resolve, há o metodo reject
//Que é quando determinada lógica nao satisfaz nosso programa
//entao podemos ir para outra com o reject, em vez do resolve
//Resolve e reject terminam a promise, ou seja, nao podemos chamar mais o then, por exemplo
function verificarAlgo(num){
    return new Promise((resolve, reject) => {
        if(num == 2){
            resolve(`o numero é ${num}`);
        }else{
            reject(new Error("falhou"));
        }
    });
}

verificarAlgo(3);
verificarAlgo(2);

//Resolvendo varias promises
//Com o método all, podemos resolver varias promessas de uma vez só
//ou seja passamos elas por array e quando a ultma for resolvida receberemos a resposta
//ex:
const p1 = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve(100);
    }, 2500);
})

const p2 = Promise.resolve(5);
const p3 = new Promise((resolve, reject) => {
    resolve(10);
    
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));
