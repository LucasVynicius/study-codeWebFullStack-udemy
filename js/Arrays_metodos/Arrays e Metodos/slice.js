//Slice é utilizado para extrair um array menor de um array maio
//O intervalo de elementos é determinado pelos parâmetros, que são: o índice de início e o índice de fim
//O último elementos é ignorado, se quisermos ele devemos somar 1 ao índice final

const teste = ['a', 'b', 'c', 'd', 'e', 'f'];

const subArray = teste.slice(2,4);

console.log(subArray);
console.log(teste);

const subArray2 = teste.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = teste.slice(10, 20)

console.log(subArray3);