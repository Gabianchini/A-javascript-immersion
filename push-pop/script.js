//Push e pop sao metodos de array que iramos aprender

//pop: remover um elemento do fim do array( ultimo elemento do array)
//exemplo:
let pessoas = ["Matheus", "João", "Ricardo"];
let pessoaRemovida = pessoas.pop() // criando método pop
console.log(pessoaRemovida);//a pessoa a ser removida será o ricardo
console.log(pessoas);//mostra array sem josé

//adicionando novamente o ricardo no array usando push
pessoas.push("Ricardo");
console.log(pessoas);
