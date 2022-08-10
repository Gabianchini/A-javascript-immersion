//Oque é uma api
//Application programmung interface
//uma maneira de se comunicar via http a um servidor e fazer operaçoes como: visualizar,deletar, criar e atualizar dados
//grandes aplicacoes como facebook e instagram usam Apis
//grande parte dos softwares desenvolvidos em node.js tem uma api
//e utilizam um framework chamado express pra isso

//Oque é REST/ Restful
//Quando falamos em API estamos condicionados a falar de REST e RESTful também
//REST = Representational State Transfer, principios e regras que permitem criar uma aplicaco com interfaces bem definidas
//RESTful =  capacidade de aplicar os principios do rest

//verbos http
//Sempre que criamos uma api devemos usar os verbos http
//corretos para cada url na nossa aplicacao
//verbo get: solicitar dados
//verbo post: inserir dados
//verbo delete: deletar dados
//verbo put: atualizar dados

// rotas
/* Nos sites nas APIs temos oque sao chamados de rotas
que é basicamente a url que queremos acessar
porem quando tratamos de uma api chamamos as urls de rota
No express(framework) vamos criar nossas rotas para serem acessadas via http e responderem baseadas numa lógica que inserimos
//e cada rota vai receber um método http que deve coincidir ocm o proposto pelo REST