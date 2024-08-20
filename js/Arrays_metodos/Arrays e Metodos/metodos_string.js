//As strings também são objetos, ou seja, tem métodos e propriedades
// Alguns são muito semelhantes aos de array

//trim = remove tudo que não é texto em uma string

const textoTest = "  Testanando \n"

console.log(textoTest);
console.log(textoTest.trim());
console.log(textoTest.trim().length);
console.log('--------------------------------------------------------------------------');

//padStart = insere um texto no começo da string 

const textoTest2 = "1";

const novoNumero = textoTest2.padStart(3,"0");

console.log(novoNumero);

//padEnd = insete um texo no final da string
const textoPadEnd = novoNumero.padEnd(10, "0");

console.log(textoPadEnd);

console.log('--------------------------------------------------------------------------');

//Split = divide uma string em um array, cada elemento será determinado por um separador em comum

const frase = "O rato roeu a roupa";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);
console.log('--------------------------------------------------------------------------');

//Join= une um array em uma string;
const fraseNova = arrayDaFrase.join(" ");
console.log(fraseNova);

console.log('--------------------------------------------------------------------------');
//repeat = repete um texto n vezes

const palavra = 'Lucas';
console.log(palavra.repeat(10));

console.log('--------------------------------------------------------------------------');
//Rest Operator é caracterizado pelo símbolo '...', podemos utilizá-lo para receber indefinidos argumentos em uma função;

const somaInfinita = (...args) => {
    
    let total = 0;

    for(let i = 0; i < args.length; i++){
        total += args[i];
    }

    return total;
}

console.log(somaInfinita(3, 6 ,9));

console.log(somaInfinita(12, 15 , 18, 21, 24, 27, 30, 33, 36, 39, 42, 45));

console.log('--------------------------------------------------------------------------')


//for of = é uma estrutura de repetição semelhante ao for, porém mais simples, o número de repetição é baseado no array utilizado

const somaDeNumeros = (...args) => {
    let total = 0;

    for(num of args){
        total += num;
    }

    return total;
};

console.log(somaInfinita(3, 6 ,9));

console.log(somaInfinita(12, 15 , 18, 21, 24, 27, 30, 33, 36, 39, 42, 45));
console.log('--------------------------------------------------------------------------');

//Desctructuring em Objetos =  é uma funcionalidade que nos permite desestruturar algum dado, no caso dos objetos, é possível criar variáveis a partir das suas propriedades, com uma simples sintaxe

const userDetails = {
    firstName: 'Lucas', 
    lastName : 'Albuquerque',
    job : 'Programador'
}

const { firstName, lastName, job} = userDetails;

console.log(firstName, lastName, job);

//renomear variaveis
const{firstName: primeiroNome, lastName: ultimoNome} = userDetails;

console.log(primeiroNome, ultimoNome);

console.log('--------------------------------------------------------------------------');

//Desctructuring em array = a sintaxe é um pouco diferente, agora utilizaremos colchetes, e não temos nome das chaves

const myList = ["Jatinho", "Mustang", "Ferrari", "Barco"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

console.log('--------------------------------------------------------------------------');