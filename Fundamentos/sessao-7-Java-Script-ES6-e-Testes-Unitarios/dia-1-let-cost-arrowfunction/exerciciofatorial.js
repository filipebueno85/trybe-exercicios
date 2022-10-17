// const fatorial = (numero) => {
//     if (numero === 0 || numero === 1)
//     return 1;
//     for (let index = numero - 1; index >= 1; index -= 1) {
//         numero = numero * index;
//     }
//     return numero
// }
// console.log(fatorial(5));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

// const factorial = (number) => {
//     let result = 1;
//     for (let index = 2; index <= number; index += 1) {
//         result *= index;
//     }
//     return result;
//   };
//   const print = factorial(number); //Lembre-se de alterar o valor de number!
//   console.log(`Esse é o fatorial ${print}`);