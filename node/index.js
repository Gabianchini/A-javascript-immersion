//testando node
let msg = "hello world";
console.log(msg);
//para executar entre na pasta que esse arquivo está(node) e execute o comendo
// node index.js
//ou seja node + nomearquivo

//podemos executar instrucoes de js rodando o comando node
//podmos fazer operacoes matematicas
//usar funcoes do js e muito mais

//npm
//Ferramenta utilizada para instalar módulos do js
//Que podem fazer desde operacoes matematicas até comunicacao http
//Instalamos um pacote pelo comando: npm install nomepacote
//Há um curso completo de npm na udemy do matheus battisti
//npm vem junto com o node

//iniciando projeto com npm
//Quando o node reclama da falta do package json quer quizer que sempre devemos ter um arquivo desse ao iniciar um novo projeto
//Podemos criar a partir do template, usando o comando: nom init
//Aí teremos um projeto com o package json
//este arquivo serve para configuracoes e salva nossas dependencias

//módulos de file system
//um dos modulos mais utilizados
//ele serve para trabalhar com arquivos e diretórios
//já é incluso no node, ou seja , n precisa instalar
//ex:

let {readFile, writeFile} =require('fs');
readFile("arquivo.txt", "utf8", (error,text) => {
    if(error){
        throw error;
    }else{
        console.log(text);
    }
});

//alem de ler arquivo podemos também alterar o mesmo
//chamamos isso de escrever no arquivo
//ex:
writeFile("arquivo.txt", "inserir esse texto", (error)=> {
    if(error){
        console.log(error);
    }else{
        console.log("escreveu no arquivo");
    }
});
