// function showList(empresa, ...clients) { // Colocando os 3 pontos antes do nome da variável, ela se torna um array por isso se chama rest operator
//     console.log(empresa);
//     console.log(clients);
// }

// showList('Padaria', 'gabriel', 'rafael')

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Math.max(...numeros))

// const  items = document.querySelectorAll('li');

// // items.forEach(item => { // O forEach é um método de array, por isso não funciona com o NodeList
// [...items].map(item => { // utilizando os 3 pontos antes do nome da variável, ela se torna um array
//     console.log(item); 
// })
// console.log(items);

const carro = { cor:'azul', portas: 4, ano: 2020 };

const clone2 = carro; // isso não é um clone, é uma referência, ou seja, se eu alterar o clone2, o carro também será alterado

const cloneCarro = {...carro, turbo: true}; // isso é um spread operator, ele pega todas as propriedades do objeto e cria um novo objeto com elas ou seja um clone do objeto original