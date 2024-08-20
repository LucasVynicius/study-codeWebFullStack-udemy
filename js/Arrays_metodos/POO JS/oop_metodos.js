const animal = {
    nome: "Chase",
    latir: function(){
        console.log("au au au");
    }
}

console.log(animal.nome);
animal.latir();

console.log('-----------------------------------------------------------------');

//Aprofundando em métodos
const pessoa = { 
    nome: 'Lucas',

    getNome: function (){
        return this.nome;
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    }
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Vynícius");
console.log(pessoa.getNome());

console.log('-----------------------------------------------------------------');

//Prototype é um recurso que faz parte da arquitetura de JavaScript é uma espécie de herança, onde objetos pais herdam propriedads e métodos aos filhos, por isso muitos dados são considerados objetos.
//Fallback

const text = 'Lucas';

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(Object.getPrototypeOf(arr));

console.log(Object.getPrototypeOf(arr) === Array.prototype);

//Mais sobre prototype
const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

console.log('-----------------------------------------------------------------');

//Classes básicas: Os prototypes são originados de uma classe, é o mode dos objetos nela definimos os métodos e propriedades. JavaScript já possui suas classe, porém podemos criar as nossas

//Classes basicas
const cachorro ={
    raca: null,
    patas: 4
}

const viraLata = Object.create(cachorro);

viraLata.raca = "Caramelo";

console.log(viraLata);
console.log(viraLata.patas);

const pitBull = Object.create(cachorro);

pitBull.raca = "PitBull";
console.log(pitBull);

console.log('-----------------------------------------------------------------');
//Função com Classe
function criarCachorro(nome, raca){
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const chase = criarCachorro('Chase', 'Caramelo');
console.log(chase);

console.log('-----------------------------------------------------------------');
//Classes baseadas em funções

function Cachorro (nome, raca) {
    this.nome = nome;
    this.raca = raca;

}

const viraLata2 = new Cachorro("Chase", "Caramelo");
console.log(viraLata2);

console.log('-----------------------------------------------------------------');
//Classes de função com métodos
//Metodos na função construtora

Cachorro.prototype.uivar = function (){
    console.log('AAAAAUUUUUU');
}

console.log(Cachorro.prototype);

viraLata2.uivar();

console.log('-----------------------------------------------------------------');

//Classes ES6

class AnimalDeRaca {
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
};

const sansao = new AnimalDeRaca("Sansão", "Vira-Lata");

console.log(sansao);
console.log(typeof sansao);
console.log(Object.getPrototypeOf(sansao));


console.log('-----------------------------------------------------------------');

//Override nas propriedades via prototype = as instânicias dos objetos são criadas baseadas nas classe;
//As propriedades tem os valores definidos no construtor ou por métodos, para alterá-los podemos utilizar o prototype;

class Pessoa { 
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }


}

const lucas = new Pessoa("Lucas", 28);

console.log(lucas);

Pessoa.prototype.idade = "Não definida";

console.log(lucas.idade);

console.log(Pessoa.prototype.idade);

console.log('-----------------------------------------------------------------');

//Symbols em classes: Quando utilizamos o recurso de symbol com classe, é possível criar uma propriedade única e imutável, isso é útil quando há algum dado que se repetirá em todos os objetos criados a partir da classe

class Aviao {
    constructor(marca, turbinas){
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);
console.log(boeing[pilotos]);

console.log('-----------------------------------------------------------------');

//Getter (get) = é um método utilizado para exibir o valor de alguma propriedade;
//Setter (set) = é utilizado para alterar o valor

class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new Post("Testando ", "testando os getters e setters", "JavaScript");

console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, Javascript, js";

console.log(myPost);


console.log('-----------------------------------------------------------------');

//Herança

class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero{
    constructor(patas,nome){
        super(patas, patas)
        this.nome = nome;
    }
}

const zeus = new Lobo(4, 'Zeus');
console.log(zeus);

console.log(zeus.patas);


console.log('-----------------------------------------------------------------');

//Instanceof = verifica se um objeto é pai de outro

console.log(zeus instanceof Lobo);
console.log(zeus instanceof Mamifero);
console.log(Lobo instanceof Mamifero);