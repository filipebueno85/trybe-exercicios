// const a = 51;
// const b = 28;

// function soma (a, b) {
//     return a + b;
// }

// function sub (a, b) {
//     return a - b;
// }

// function multiplicacao (a, b) {
//     return a * b;
// }

// function div (a, b) {
//     return a / b;
// }

// function modulo (a, b) {
//     return a % b;
// }

// console.log(soma(a, b));
// console.log(sub(a, b));
// console.log(multiplicacao(a, b));
// console.log(div(a, b));
// console.log(modulo(a, b));


// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// const a = 5;
// const b = 6;

// function maiorNumero (a, b) {
//     if (a > b) {
//         return a + ' é maior ' + b;  
//     } else {
//         return b + ' é maior ' + a;
//     }
// }

// console.log(maiorNumero(6, 5));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// function maiorNumero (a, b, c) {
//     if (a > b && a > c) {
//         return a + ' é o maior numero '; 
//     } else if (b > a && b > c) {
//         return b + ' é o maior numero';  
//     } else {
//         return c + ' é o maior numero';
//     }
// }

// console.log(maiorNumero(6, 8, 10));

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// function sinal(valor) {
//     if (valor > 0){
//         return 'positive';
//     } else if (valor < 0) {
//         return 'negative';
//     }else {
//         return 'zero';
//     }
// }

// console.log(sinal(10));

function triangleAnglesValidate(angleA, angleB, angleC) {
    let sumOfAngles = angleA + angleB + angleC;
    let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  
    if (allAnglesArePositives) {
      if (sumOfAngles === 180) {
        return true;
      } else {
        return false;
      }
    } else {
      return 'Erro: ângulo inválido';
    }
  }

  