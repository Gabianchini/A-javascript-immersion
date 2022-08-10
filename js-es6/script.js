//Oque é js es6
//Uma versao nova de js que trouxe diversas funcionalidades
//sao os conhecimentos base para aprender os frameworks modernos(react, vue e etc)
//E também agilizam muito o desenvolvimento de JS puro 
//Principais recursos do js es6

//let e const
//Temos duas novas formas de declarar variaveis no es6
//a let que é semelhante ao var podemos alterar valores
//e a const que é forma de declarar constantes
//o grande diferencial é o escopo de blocos nao temos mais variaveis sendo 'vazadas'para outros escopos por causa do mesmo nome
//ex:
//var(variaveis vazam por ter o mesmo nome usando var)
var x = 10
var y = 15

if(y > 10){
    var x = 5
    console.log(x)
}

console.log(x)
//let(variaveis nao vazam por ter o mesmo nome)
let a = 10
let b = 15

if(b > 10){
    let a = 5
    console.log(a)
}
console.log(a)

//método de array filter
// O filter é um método de array para filstrar dados baseado em uma condicao que estabelecmos
//isso nos da um array com apenas os elementos que desesjamos
//ex:
 const arr = [1,2,3,4,5]

 const highNumbers = arr.filter((n) => {
    if(n >= 3){
        return n
    }
 })

 console.log(highNumbers);

 //método de array map
 // o map é um metodo de array tambem que percorre todos os elementos
 //quando usamos map, estamos querendo modificar os dados do array
 //ex:
 const products = [
  { name: 'Camisa', price: 10.99, category: 'Roupa' },
  { name: 'Chaleira elétrica', price: 150, category: 'Eletro' },
  { name: 'Fogão', price: 499, category: 'Eletro' },
  { name: 'Calça jeans', price: 49.99, category: 'Roupa' },
]

products.map((product) => {
  if (product.category === 'Roupa') {
    product.onSale = true
  }
})

console.log(products)

//destructuring
//O destructuring é um recurso que pode ser utilizado em arrays e objetos
//A ideia é tranformar os itens de um desses dados em variaveis
//Simplificando a declaracao de n variaveis para apenas 1 linha
//ex:
const fruits = ['Maçã', 'Mamão', 'Laranja']

const [f1, f2, f3] = fruits

console.log(f1)

const productDetails = {
  name: 'Mouse',
  price: 39.99,
  category: 'Periféricos',
  color: 'Cinza',
}

const {
  name: productName,
  price: productPrice,
  category: productCategory,
  color,
} = productDetails

console.log(
  `O nome do produto é ${productName}, custa R$${productPrice} e é da cor ${color}.`,
)

// classes
class Product {
    constructor(name, price) {
      this.name = name
      this.price = price
    }
  
    productWithDiscount(discount) {
      return this.price * ((100 - discount) / 100)
    }
  }
  
  const shirt = new Product('Camisa gola V', 20)
  
  console.log(shirt.productWithDiscount(10))
  
  //  heranca
  class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
      super(name, price)
      this.colors = colors
    }
  
    showColors() {
      console.log('As cores são: ')
      this.colors.forEach((color) => {
        console.log(color)
      })
    }
  }
  
  const hat = new ProductWithAttributes('Chapéu', 29.99, [
    'Preto',
    'Amarelo',
    'Verde',
  ])
  
  console.log(hat.name)
  
  hat.showColors()


