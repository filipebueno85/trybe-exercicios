// Considere o array de strings abaixo:

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];
// let resultado = 0;

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    } else if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    } 
}

console.log(maiorPalavra);
console.log(menorPalavra);


// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > maiorPalavra.length) {
//     maiorPalavra = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < menorPalavra.length) {
//     menorPalavra = array[index];
//   }
// }
//  console.log(maiorPalavra);
//  console.log(menorPalavra);

// for (let index = 0; index > array.length; index += 1) {
//     resultado = array[index] < (maiorPalavra);
//     console.log(resultado.indexof(maiorPalavra));
// }
