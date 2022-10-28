const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;
// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const containsA = (array) => { 
  let countA = 0;
  array.forEach((nome) => {
    const letrasNome = nome.split('');
    countA += letrasNome.reduce((acc, currValue) => {
        if (currValue === 'a' || currValue === 'A') {
          return acc + 1;
        }
        return acc;
    }, 0)
     })
  return countA;
}
console.log(containsA(names));

// let count = 0;
//   return array.forEach.( (nome) => {
//     nome.split('');
//   }).reduce((acc, currValue) => {
//   return 
//   }, 0)

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
​
const expectedResult = 20;
​
// resolução 1 - reduce + forEach
const containsA = () => {
  const quantityA = names.reduce((acc, palavra) => {
    let palavraA = 0;
​
    palavra.split('').forEach((letra) => {
      if (letra.toLowerCase() === 'a') {
        palavraA += 1;
      }
    });
​
    return acc + palavraA;
  }, 0);
  return quantityA;
}
//console.log(containsA());
​
// resolução 2 - usando dois reduces
const regexA = /a/i;
​
// const containsA = () => names.reduce((acc, palavra) => {
//   const palavraA = palavra.split('').reduce((accL, letra) => {
//     if (letra.match(regexA)) return accL + 1;
//     return accL;
//   }, 0);
​
//   return acc + palavraA;
// }, 0);
​
// console.log(containsA());
​
// resolução 3 - usando o filter + length
const contandoA = names.reduce((acc, palavra) => {
  let palavraA = palavra.split('').filter((letra) => letra.match(regexA)).length;
​
  return acc + palavraA;
}, 0);
// console.log(contandoA);