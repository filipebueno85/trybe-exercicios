
// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

// Dica: Nesse exercício será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort()



// const longestWord = 'Antônio foi ao banheiro e não sabemos o que aconteceu';


const longestWord = text => text.split(' ').sort((palavraA, palavraB) => palavraB.length - palavraA.length)[0];
console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

// const longestWord = (text) => {
//     const wordArray = text.split(' ');
//     let maxLength = 0;
//     let result = '';
  
//     for (const word of wordArray) {
//         if (word.length > maxLength) {
//             maxLength = word.length;
//             result = word;
//         }
//     }
  
//     return result;
//   }