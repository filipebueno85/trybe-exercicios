// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numeros = [];
let maiorNumeroPrimo = numeros[0];

for (let index = 2; index <= 50; index += 1) {
    numeros.push(index); 
    for (let index2 = 2; index2 < numeros.length; index2 += 1) {
    if (index % index2 === 0){
        maiorNumeroPrimo = false;
    } else {
        maiorNumeroPrimo = index;
    }
    }
}

  console.log(maiorNumeroPrimo);

// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);
