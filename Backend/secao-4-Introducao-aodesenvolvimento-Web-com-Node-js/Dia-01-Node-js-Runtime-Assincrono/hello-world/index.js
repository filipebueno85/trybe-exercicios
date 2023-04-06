// const readline = require('readline-sync');

// const name = readline.question('Qual seu nome? ');
// const age = readline.questionInt('Qual sua idade? ');

// console.log(`Hello, ${name}! You are ${age} years old!`);

// console.log('Hello, world!');

// function dividirNumeros(num1, num2) {
//   if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

//   return num1 / num2;
// }

// try {
//   const resultado = dividirNumeros(2, 0);
//   console.log(`resultado: ${resultado}`);
// } catch (e) {
//   console.log(e.message);
// }

// function dividirNumeros(num1, num2) {
//   const promise = new Promise((resolve, reject) => {
//     if (num2 == 0) 
//       reject(new Error("Não pode ser feito uma divisão por zero"));

//     const resultado = num1 / num2;
//     resolve(resultado)
//   });

//   return promise;
// }

// dividirNumeros(2, 1)
//   .then(result => console.log(`sucesso: ${result}`))
//   .catch(err => console.log(`erro: ${err.message}`));

// function dividirNumeros(num1, num2) {
//   const promise = new Promise((resolve, reject) => {
//     if (num2 == 0) 
//       reject(new Error("Não pode ser feito uma divisão por zero"));

//     const resultado = num1 / num2;
//     resolve(resultado)
//   });

//   return promise;
// }

// const doSomething = async () => {
//   console.log(await dividirNumeros(2,2));
// };

const promiseParaFazerAlgumaCoisa = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Eu fiz alguma coisa'), 2000)
  })
}

const assistirAlguemFazendoAlgumaCoisa = async () => {
  const something = await promiseParaFazerAlgumaCoisa()
  return something + '\n e Eu vi você fazendo'
}

const AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa = async () => {
  const something = await assistirAlguemFazendoAlgumaCoisa()
  return something + '\n e Eu também vi você vendo ele fazendo'
}

AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa().then(res => {
  console.log(res)
})