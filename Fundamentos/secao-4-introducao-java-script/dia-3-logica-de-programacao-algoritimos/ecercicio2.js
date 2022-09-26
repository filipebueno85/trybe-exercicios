// let n = 1;
// let n2 = 5;

// console.log('a soma é: ' + n + n2); //errado
// console.log('a soma é: ' + (n + n2));

// let n1 = 5;
// let n2 = 7;
// let media = (n1 + n2) / 2;

// console.log(media);

// let n1 = 4;
// let n2 = 2;
// let resto = n1 % n2;
// let resto2 = n1 ** n2;

// console.log(resto);
// console.log(resto2);

// let n1 = 8;
// let n2 = 6;
// let media = (n1 + n2) / 2;

// console.log(media > 5);

// let jogador1 = 7;
// let jogador2 = 8;

// if (jogador1 === jogador2) {
//     console.log('emapate');
// } else {
//     let numeroSorteado = parseInt(Math.random() * 2);

//---------------------------------------------------------------
// if (numeroSorteado === 0) {
//     if (jogador1 < jogador2) {
//         console.log('ganhou jogador 1');
//     } else {
//         console.log('ganhou o jogador 2');
//     } 
// } else { 
//     if (jogador1 > jogador2) {
//         console.log('ganhou jogador 1');
//     } else {
//         console.log('ganhou jogador 2');
//     }

// }
// }
 //----------------------------------------------------
 
//  let nota1 = 6;
//  let nota2 = 0;
//  let media = (nota1 + nota2) / 2;

//  if (nota1 > 0 && nota2 > 0 && media > 5) {
//     console.log('parabens você passou!');
//  } else {
//     console.log('reprovou!');
//  }

//  if (nota1 < 0 || nota2 > 0 || media > 5) {
//     console.log('parabens você passou!');
// } else {
//    console.log('reprovou!');
// }

//----------------------------------------------------------

// let jogador1 = 7;
// let jogador2 = 8;

// if (jogador1 === jogador2) {
//     console.log('emapate');
// } else {
//     let numeroSorteado = parseInt(Math.random() * 2);
//     if (numeroSorteado === 0 && jogador1 < jogador2 || numeroSorteado === 1 & jogador1 > jogador2) {
//         console.log('ganhou jogador 1');
//     } else {
//         console.log('ganhou jogador 2');
//     }
// }
    
//----------------------------------------------------

let numero = 6;
let resultado = 0;

for (let index = 1; index <= 200; index += 1) {
    console.log(resultado = (numero * index));
}
