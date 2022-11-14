//First class function
//Diz se que uma linguagem de programação possui funções de primeira classe quando funções nessa linguagem são tratadas como qualuqer outra variável
 const x = 3
 const y = function(txt){
    console.log(`Esse é o texto: ${txt}`)
 }
 console.log(x)
 console.log(y('Olá'))
 //armazenar funcao como variavel

 //outro exemplo(usando arrow functions atribuindo uma funcao a uma variavel)
 const z = () => console.log('zzzzzzzzzzz')
 z()
