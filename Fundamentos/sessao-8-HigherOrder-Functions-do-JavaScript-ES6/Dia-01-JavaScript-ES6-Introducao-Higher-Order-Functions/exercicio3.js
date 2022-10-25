// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).
// const checaNumeros = (numeroApostado, numeroSorteado) => {
//   return numeroApostado === numeroSorteado; {
// };

// const sorteio = (numeroApostado, numeroSorteado) => {
//   const número = Math.floor(Math.random() * 5) + 1;
//   return ;

// } 

const numberChecker = (myNumber, number) => myNumber === number;
const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};
console.log(lotteryResult(2, numberChecker));





// const sorteio = () => {
//   const número = Math.floor(Math.random() * 5) + 1;
//   const sorteio = [];
//   for (let i = 0; i < número; i+= 1) {
//     sorteio.push(i);
// }