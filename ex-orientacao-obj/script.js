//Exercicios orientacao a objetos
//criar um  objeto que simula uma conta no bando
//deve conter a propriedade saldo
//e os métodos deposito e saque
//teste os metodos
 const banco = {
    saldo: 5000,
    poupanca: 10000,
    deposito: function(quant){
        this.saldo += quant;
        console.log(`vc agora tem ${this.saldo} na conta`);
    },
    saque: function(quant){
        if(quant<=this.saldo){
            console.log(`saque de ${quant} feito`);
        }else{
            console.log('Você não tem o suficiente em seu saldo para fazer esse saque')
        }
    }
 }


 console.log(banco.deposito(10000));
 console.log(banco.deposito(100));
 console.log(banco.saque(10));

 //Cria uma classe que simula um carrinho de compras de um e-commerce
 //proepriedades itens, quantidade total, valor total
 //crie os métodos para adicionar e remover itens
  class carrinhoCompras{
    constructor(itens,qtd, valorTotal){
        this.itens = itens;
        this.qtd= qtd;
        this.valorTotal = valorTotal;
    }
    addItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
            }

        }
        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;

    }
  }

let carrinho = new carrinhoCompras([
{
    id:01,
    nome:"camisa",
    qtd: 1,
    preco:20
},
{
    id:02,
    nome:"calças",
    qtd:2,
    preco:50
}
],3,120);//o parametro itens é passado em forma de array de objetos e sao passados tbm os outros parametros( qtd e valor total) 3 pois sao 3 itens(2 calças e 1 camisa) e da 120 pois é o valor total 2 calças que custam 50 =100 + 20 reais da camisa = 120

console.log(carrinho);
carrinho.addItem({id:01, nome:'camisa', qtd:2, preco:20});
console.log(carrinho);








