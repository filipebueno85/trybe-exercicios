// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const compara = (corretas, respostas) => {
//   const compareAnswers = (rightAnswer, studentAnswer) => {
//     if (rightAnswer === studentAnswer) {
//       return 1;
//     } if (studentAnswer === 'N.A') {
//       return 0;
//     }
//     return -0.5;
//   };
//   const countPoints = (rightAnswers, studentAnswers, action) => {
//     let counter = 0;
//     for (let index = 0; index < rightAnswers.length; index += 1) {
//       const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//       counter += actionReturn;
//     }
//     return `Resultado final: ${counter} pontos`;
//   };
//   console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

const compara = (corretas, respostas) => {
  let nota = 0;
  
  for (let i = 0; i < corretas.length; i += 1) {
    if (corretas[i] === respostas[i]) nota += 1;
    if (corretas[i] !== respostas[i] && respostas[i] !== 'N.A') nota -= 0.5;
  }
  return nota;
}

const escola = (corretas, respostas, funcao_comparadora) => funcao_comparadora(corretas, respostas);

console.log(escola(RIGHT_ANSWERS, STUDENT_ANSWERS, compara));