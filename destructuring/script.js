function handleMouseMove({ clientX, clientY }) {
    console.log(clientX, clientY);

    // const {clientX, clientY} = event; // Aqui estamos desestruturando o objeto event e acima dele fizemos a mesma coisa, mas de uma forma mais simples.
    // const clientX = event.clientX;;
    // const clientY = event.clientY;
}

// document.documentElement.addEventListener("mousemove", handleMouseMove); \\ Aqui estamos passando a função handleMouseMove como parâmetro para o addEventListener, mas não estamos chamando ela, por isso não colocamos os parênteses.

const frutas = ['banana', 'uva'];


const [fruta1, fruta2] = frutas; // Aqui estamos desestruturando o array frutas e atribuindo os valores a variáveis fruta1 e fruta2.
// const fruta1 = frutas[0]; \\ Aqui estamos pegando o primeiro elemento do array frutas e atribuindo a variável fruta1.


// console.log(frutas)

const useState = ['blue', function(color) {
    useState[0] = color;
}];
const [color, setColor] = useState;

setColor('red')