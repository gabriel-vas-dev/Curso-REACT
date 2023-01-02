// function upperName(name) {  //ao passar uma string dentro do name no console.log ele vai retornar a string em maiusculo
//     return name.toUpperCase();
// }

// const  upperName = function(name) {  //ao passar uma string dentro do name no console.log ele vai retornar a string em maiusculo 
//     return name.toUpperCase();      //podemos ver que colocamos a função dentro de uma variavel 
// }


// const  upperName = function(name) {   
//     return name.toUpperCase();      
// }

// const upperName = (name) => {  //aqui temos uma arrow function que é uma função anonima que é atribuida a uma variavel
//     return name.toUpperCase();
// }
// console.log(upperName('gabriel'));


// const upperName = name => name.toUpperCase(); //quando passamos parametros sem parenteses podemos tirar os parenteses e quando temos apenas um parametro podemos tirar os parenteses e o return
// const countLetters = word => word.length; //aqui temos uma arrow function que retorna a quantidade de letras de uma palavra

class Menu { //aqui temos uma classe que recebe um parametro
    constructor(menu) {
        this.MenuElement = document.querySelector(menu); //aqui temos uma propriedade que recebe o parametro menu
    }
}
const menu = new Menu('.principal'); //aqui estamos passando a classe menu para a variavel menu
console.log(menu);
