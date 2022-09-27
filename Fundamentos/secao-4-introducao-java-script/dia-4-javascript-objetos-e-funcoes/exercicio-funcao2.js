// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4.

// function indiceMaior(numeros) {
//     let indiceMaior = 0;
//     for (let index in numeros) {
//         if (numeros[indiceMaior] < numeros[index]) {
//         indiceMaior = index;
//         }
//     }
//     return indiceMaior
// }

// console.log (indiceMaior([2, 3, 6, 7, 10, 1]));

//-------------------------------------------------------------------------

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.

//-------------------------------------------------------------------------

// function indiceMenor(numeros) {
//     let indiceMenor = 0;
//     for (let index in numeros) {
//         if (numeros[indiceMenor] > numeros[index]) {
//             indiceMenor = index
//         }
//     }
//     return indiceMenor
// }

// console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));

//-------------------------------------------------------------------------

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// Valor esperado no retorno da função: Fernanda.

// function maiorPalavra(nomes) {
//     let maiorPalavra = nomes[0];
//     for (let index in nomes) {
//         if (maiorPalavra.length < nomes[index].length)
//         maiorPalavra = nomes[index]
//     }
//     return maiorPalavra
// } 

// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//-------------------------------------------------------------------------

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.

// function numeroRepetido (numeros) {
//     let numeroRepetido = numeros[0];
//     for (let index in numeros) {
//         if (numeroRepetido.length === numeros[index].length) {
//             numeroRepetido = numeros[index]
//         }
//     } 
//     return numeroRepetido
// }

// console.log(numeroRepetido([2, 3, 2, 5, 8, 2, 3]));

// function qualMaisSeRepete(array) {
//     // const arrayOrdenado = array.sort();
//     let numeroFinal = 0;
//     let repeticoeFinal = 0;
    
//     for (let index = 0; index < array.length; index += 1) {
//       const numero = array[index];
//       let repeticoes = 0;
  
//       for (let index2 = 0; index2 < array.length; index2 += 1) {
//         if (array[index2] === numero) {
//           repeticoes = repeticoes + 1;
//         }
//       };
  
//       if (repeticoes > repeticoeFinal) {
//         numeroFinal = numero;
//         repeticoeFinal = repeticoes;
//       }
//     };
  
//     return numeroFinal;
//   };
  
//   console.log(qualMaisSeRepete([2, 3, 2, 5, 8, 2, 3]))

//-------------------------------------------------------------------------

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// Valor de teste: N = 5.

// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'

// Valor esperado no retorno da função: true

// verificaFimPalavra('trybe', 'be');

// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');

// Retorno esperado: false


//primeira - resolução ----------------------

// function verificaFimPalavra(palavra, fimPalavra) {
//     palavra = palavra.split('');
//     fimPalavra = fimPalavra.split('');
//     let controle = true;
  
//     for (let index = 0; index < fimPalavra.length; index += 1) {
//       if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//         controle = false;
//       }
//     }
  
//     return controle;
//   }
  
//   console.log(verificaFimPalavra('trybe', 'be')); //true
//   console.log(verificaFimPalavra('joaofernando', 'fernan')); //false


// ma outra forma de fazer esse exercício é transformar as strings em arrays com o método split e depois revertê-los com o método reverse. Assim, comparamos em um loop cada posição dos dois arrays e caso alguma seja diferente, retornamos false.


// function verificaFimPalavra(palavra, fimPalavra) {
//     let inversoPalavra = palavra.split('').reverse().join('');
//     let inversoFimPalavra = fimPalavra.split('').reverse().join('');
//     let result;
//     for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//       if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//         result = false;
//         break;
//         break; // O "break" serve para encerrar o loop.
//       } else {
//         result = true;
//       }
//     }
    
//     return result;
//   }
  
//   console.log(verificaFimPalavra('trybe', 'be')); //true
//   console.log(verificaFimPalavra('joaofernando', 'fernan')); //false

