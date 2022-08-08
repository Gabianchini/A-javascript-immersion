//Java script e os navegadores
//A web:
// Protocolo: forma de comunicaçÃo entre computadores atraves da rede.(Entre um servidor e nosso computador e vice versa)
//O http serve para nós solicitarmos arquivos, imagens e dados no geal
//Entramos em sites graças ap protocolo http
//SMTP : protocolos para enviar email
//TCP: protocolo de transferencia
//URL: Cada arquivo que carrega no navegador é nomeado por uma URL
//A url pode ser dividida em tres partes: protocolo, servidor, arquivo
//ex: http://www.horadecodar.com.br/index.html
//www.horadecodar.com.br é o servidor(DNS para um ip)
//e o http é o protocolo de comunicacao e transferencia de dados entre seu pc e um se4rvidor
//index.html seria o arquivo
//HTML: linguagem de marcacao , responsavel pelos textos e elemrntos que vemos na tela ao acessar uma página web
//as tags do html criam: titulos, paragrafos, imagens, listas e etc
//uma tag é definida por <p></p>
//algumas tags nao tem fechamento
//DOM:Quando uma pagina web é requisitada ela recebe um texto que é transformado em uma estrutura html
//As tags vao se aninhando uma as outras formando uma estrutura em que elementos ficam dentro dos outros
//Essa estrutura tem uma repesentacao exatamente igual para o js chamada de DOM
//Document object model:DOM
//Por meio do js podemos acessar cada um destes elementos do html atraves do dom
//Pelo dom podemos: mudar completamente uma pagina html, podendo alterar elementos, atributos, css
//além de alterar podemos adicionar e também remover
//além de ser possível criar eventos na página como animações
//a árvore DOM:
//o documento HTML seria a arvore completa
//a raiz da arvore é o document(só ha uma raiz)
//Cada elemento da arvore chamamod de node(nó)
//conteudos como texto sao chamados de leaf nodes(folhas)

//Acessando o DOM
//Podemos acessar todos os elementos a partir de document.body
//A partir dele vamos entrando nos childNodes
//E depois acessando as propriedades que nos interessam
//ex:
console.log(document.body);
console.log(document.body.childNodes);//o childnodes sao os elementos(tags)
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1]);

//Métodos DOM
///insertBefore:
//Insere um nó antes do nó de referencia do metodo
//precisamos de um elemento para ser adicionado
//O elemento que terá o outro elemento adicionado antes dele
//e o elemento pai destes dois
//ex:
let span = document.createElement("span"); //cria o elemento
let el = document.querySelector("h1");//seleciona o elemento alvo
let pai = el.parentNode;//seleciona o elemento pai
pai.insertBefore(span,el); // os parametros do insertBefore é o novo elemento criado e o elemento de referencua onde o elemento inserdio ficara antes dele

//appendChild
//Adiciona um elemento após todos os elementos do elemento pai especificado
//ex:
let p = document.createElement("p");
let el2 = document.querySelector("h1");
let pai2 = el2.parentNode;
pai2.appendChild(p);

//replaceChild
//Repoe um antigo elemento Dom, com um novo
//ex:
let newHeading = document.createElement('h1')
newHeading.textContent = 'O h1 antigo foi substituido por mim!';
let oldHeading = document.getElementById("old-heading");
let pai3 = oldHeading.parentNode;
pai3.replaceChild(newHeading, oldHeading)// o replaceChild recebe os parametros: elemento novo que entrara no lugar do velho e elemento velho que sera substituido

//textNode
//Podemos criar um nó de texto pero e inserir em um elemento
//ex:
let texto =document.createTextNode("Esse é o texto criado e inserido");
let paragrafo = document.getElementById("artigo");
paragrafo.appendChild(texto);

//Modificando e lendo atributos
//Podemoms resgatar o valor de um atributo ou trocar com o js
//Por exemplo o href de um a ou o src de um elemento img
//getAttribute pega o valor
//setAttribute atualiza o valor
//ex:

let url = document.getElementById('link')
console.log(url.getAttribute('href'));
url.setAttribute("href", "www.horadecodar.com.br");
console.log(url.getAttribute('href'));

//Verificando altura e largura do elemento
//Com os js também é possíve; verificar propriedades do elemento como altura ee largura
//ex:
let elTeste = document.getElementById('titulo');

console.log(elTeste.offsetWidth);
console.log(elTeste.offsetHeight);

console.log(elTeste.clientWidth);
console.log(elTeste.clientHeight);

//Posição dos elementos na tela
//também é possivel checar a posicao do elemento na tela
//getBoundingClientRect nos da as posições de top,left, right e bottom do elemento e outras informações
//ex:
let elTeste2 = document.getElementById('titulo');
console.log(elTeste2.getBoundingClientRect());

//Alterando css com o DOM
//acessando a propriedade style podemos mudar o css
let p2 = document.getElementById('artigo');
console.log(p2.style);
p2.style.color = 'red';

