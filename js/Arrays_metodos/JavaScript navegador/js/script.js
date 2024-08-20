//Movendo-se pelo DOM
console.log(document.body);
console.log('----------------------------------------------------');

console.log(document.body.childNodes[1]);
console.log('----------------------------------------------------');

console.log(document.body.childNodes[1].childNodes);
console.log('----------------------------------------------------');

console.log(document.body.childNodes[1].childNodes[1].textContent);


//Selecionando Elementos

//01 - Selecionando por ID

const lisItens = document.getElementsByTagName("li");

console.log(lisItens);

console.log('----------------------------------------------------');

// 02 - selecionando por ID

const title = document.querySelector("#title");

console.log(title);

console.log('----------------------------------------------------');

// 03 - Selecionando por CLASSES

const product = document.getElementsByClassName("product");

console.log(product);

console.log('----------------------------------------------------');

// 04 - Selecionando por regras de CSS
const productsQuery = document.querySelectorAll(".product");
const mainContainer = document.querySelector("#main-container");

console.log(productsQuery);
console.log('----------------------------------------------------');
console.log(mainContainer);

//Método insertBefore = cria um elemento antes de um outro elemento, é necessário criar um elemento com JS, isso pode ser feito com createElement;

const p = document.createElement('p');

const header = title.parentElement;

header.insertBefore(p, title);

//Método appendChild é possível adicionar um elemento dentro de outro, este elemento adicionado será o último elemento do elemento pai

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

//Método replaceChild é utilizado para trocar um elemento, precisamos do elemento pai e também para ser substituído e o que vai substituir

const h2 = document.createElement("h2");

h2.textContent = "Meu novo título!";

header.replaceChild(h2, title);


//Criando nós de texto = Os textos podem ser manipulados com métodos também, temos o ""createTextNode"", que cria um nó de texto e este nó pode ser inserido em um elemento

const myText = document.createTextNode("Colocando mais um título!");

console.log(myText);

const h3 = document.createElement("h3");
h3.appendChild(myText);

mainContainer.appendChild(h3);