//Bug um problema que ocorreu no código, muitas vezes por erro do programador, impede o funcionamento do software
//Debug método de encontrar e resolver o bug, em javaScript temos diversas estratégias para isso
//Validaçãp Técnicas utilizadas para ter o mínimo possível de bugs no software

//strit = é um modo de desenvolvimento que deixar o js mais rigoroso na hora de programar; 
//Dever ser declarado no topo do arquivo ou de funções; 
//Ele não limita os recurso js, ele baliza a forma que você programa
//Bibliotecas famosas são feitas com stric

//STRICT

"Use strict"

//maneira errada
//opa = 'teste';
// const undefined = 10


//maneira correta = só pode criar com const
const opa = "teste";

//Depurando com console.log

let a = 1;
let b = 2;

if(a == 1){
    a = b + 2;
}

console.log(a);

for(let i = 0; i < b; i++){
    a = a + 2;
    console.log(a);

}

if(a > 5){
    a = 25;
}

console.log(a);

//utilizando o debugger = é uma instrução que nos permite o debug no console do navegador
let c = 1;
let d = 2;

if(c == 1){
    c = d + 2;
}

debugger;

// for(let i = 0; i < d; i++){
//     c = c + 2;
//     console.log(c);

// }

console.log('--------------------------------------------------------------------------------------------');
//tratamento de dado por função: NUNCA podemos confiar no dado que é passado pelo usuário; Sempre devemos criar validações e tratamento para os mesmo;

function checkNumber(n){

    const result = Number(n);

    
    if(Number.isNaN(result)){
        console.log('Valor incorreto!');
        return;
    }
    
    console.log("Valor Correto!")
    return result;
}


checkNumber(4);
checkNumber('4');
checkNumber({});
checkNumber("Teste");

console.log('--------------------------------------------------------------------------------------------');
//Exception = são erros que nós geramos no programa; este recurso faz o programa ser abortado, ou seja, ele não continua sua execução; Utilizamos a expressão THROW NEW ERROR com a mesangem de erro como argumento;

let x = 11;
let y = 230;

// if(x != 12){
//     throw new Error (`O valor de ${x} não pode ser diferente de 12!`);
// }

console.log('--------------------------------------------------------------------------------------------');
//Try Catch = é um recurso famoso nas linguagens de programação; Onde tentamos executar algo em try, e se um erro ocorrer ele cai no bloco do catch;
//Finally = é uma instrução que vai depois do bloco try catch, ela é executada independente de haver algum erro ou não em try
try{
    const soma = x + y;
} catch(error){
    console.error(`Algo deu errado ${error}`);
} finally{
    console.log(`Sistema Funcionando!`);
}

try{
    const value = checkNumber("asd");

    if(!value){
        throw new Error("Valores inválidos")
    }
} catch(error){
    console.error(`Opa, aconteceu um problema: ${error}`);
} finally {
    console.log('Código foi executado!');
}

//Assertions = São quando os tratamentos de valores passados pelo usuário, geram um erro; Porém este recurso tem como objetivo nos ajudar no desenvolvimento do programa, ou seja, seria algo para os devs e não para usuários

const checkArray = (arr) => {
    if(arr.length === 0){
        throw new Error('O array precisa ter elementos');
    } else{
        console.log(`O Array tem ${arr.length} elementos`);
    }
}

checkArray(['Lucas', 'Miguel', 'Noah', 'Eduarda']);
console.log(checkArray);