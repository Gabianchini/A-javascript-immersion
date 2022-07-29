//Mutação
//Um objeto pode herdar todas as caracteristicas de outro, virando uma referencia ao mesmo 
//exemplo:
let objetoA = {
    pontos:10
};

objetoB = objetoA;// criou um objetoB que é igual ao A e se refetencia a ele

let objetoC = { // mesmo o objeto c tenho mesma chave e valor que o objetoa nao é igual a ele pois nao se referencia ao mesmo. par ser igual teria que ser feito ao cria-lo: objetoC = objetoA
    pontos:10
};

console.log(objetoA == objetoB);

console.log(objetoA == objetoC);
//como o objB é uma referencia do objA e vice e versa, se eu mexo em um deles o outro também vai ser afetado de forma identida,
// ou seja se eu mudasse o pontos do objA para 25 o objB tbm mudaria para pontos:25 automaticamente, e mesma a coisa ao contrario
//se eu mexer no objB o objA tbm terá as mesmas mudanças
