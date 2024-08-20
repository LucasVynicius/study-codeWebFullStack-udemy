const nomes = ['Lucas', 'Eduarda', 'Miguel', 'Noah'];

nomes.forEach((nome) => {
    console.log(`O nome é: ${nome} `);
});

const posts = [
    {title: 'Estudando programação', category: 'JavaScript'},
    {title: 'Estudando programação', category: 'ReactJs'},
    {title: 'Estudando programação', category: 'Java'},
]

posts.forEach((post) => {
    console.log(`Post exibido: ${post.title}, categoria: ${post.category}`);
});