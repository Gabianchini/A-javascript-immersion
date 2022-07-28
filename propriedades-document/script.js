//O object document não tem somente métodos
//podemos retirar várias informações importantes das suas propriedades também

//propriedades document
console.log(document.body);//mostra no console o body
console.log(document.head);// mostra no console o head e por assim vai
console.log(document.links[0]);//mostra os links da página

//outra mnaneira de alterar texto de um link
document.links[0].textContent = "Twitter";

//mostra o url da página
console.log(document.URL);

//mostrat title da pagina
console.log(document.title);

//alterar texto do title
document.title = "Título alterado";