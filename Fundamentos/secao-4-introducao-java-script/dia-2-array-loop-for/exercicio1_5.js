// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

// const numbers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
} 

console.log(numbers);

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
}


