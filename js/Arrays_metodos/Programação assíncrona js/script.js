//Programação Assíncrona precisa ser utilizada quando as repostas não são obtidas de forma imediata no programa,
//Chamadas a uma API são ASSÍNCRONAs, não sabemos quanto tempo a reposta pode demorar

//setTimeout
console.log("Ainda não executou!");

setTimeout(function () {
    console.log("Requisição Assíncrona!")
    console.log('----------------------------*---------------------------------------------*----------------------------------------');
}, 2000);

console.log("Ainda não executou 2!");

console.log('----------------------------*---------------------------------------------*----------------------------------------');

//setInterval
console.log("Ainda não começou!");

// setInterval(function () {
//     console.log('----------------------------*---------------------------------------------*----------------------------------------');
//     console.log("Intervalo Assíncrona!");
// }, 3000);

//Promises

const promessas = Promise.resolve(6 * 6);

console.log("Testando código");

promessas.then( value => {
    console.log(`A Multiplicação de 6 * 6 é: ${value}`);
    return value;
})
.then((value) => value - 5)
.then((value) => console.log(`A subtração é: ${value}`));

console.log('Testando outro código');

//Falha nas Promises

Promise.resolve(5 * "asd")
.then((n) => {
     if(Number.isNaN(n)){
         throw new Error("Valor inválido!");
    }
})
.catch((err) => console.log(`Ocorreu algum ${err}`));

//Rejeitando 

function checkNumber(n) {
     return new Promise((resolve, reject) => {

         if(n > 10){
            resolve('O número é maior que 10');
        } else {
            reject(new Error("Número muito baixo"));
        }
   });
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log (`O resultado é ${v}`))
.catch((err) => console.log(`Um erro Ocorreu: ${err}`));

b.then((v) => console.log (`O resultado é ${v}`))
.catch((err) => console.log(`Um erro Ocorreu: ${err}`));

//Resolvendo várias Promises
const t1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10);
    }, 1000);
});

const t2 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30);
    } else {
        reject("Inválido");
    }
});

const t3 = Promise.resolve(10 + 10);

Promise.all([t1, t2 , t3])
.then((values) => console.log(values));

//ASYNC FUNCTIONS

async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value)=> {
    console.log(`O valor da soma é: ${value}`);
});

console.log('teste async')

//Assertions (Async await)
const resolveComDelay = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolvendo a Promisse!");
        }, 2000);
    });
};

const chamadaAsync = async () => {
    console.log("Chamando a Promise e esperando o resultado");
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();


//Generator
function* generator(){
    yield 1;
    yield 2;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);