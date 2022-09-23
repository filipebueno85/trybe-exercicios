// const n = 9;

// let resultado = 100;
// for (let index = 0; index <= n; index += 1) {
//   resultado -= index;
// };
// console.log(resultado);

let numbers = [];

for (let index = 1; index <= 100; index += 1) {
  numbers.push(index);
} 

let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers.length
}
console.log(soma);