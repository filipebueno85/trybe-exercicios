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
