// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma = soma + numbers[index];
// }

// let media = soma / numbers.length;

// console.log(media);

// if (media > 20) {
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor ou igual a 20');
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//    if (numbers[index] > maiorNumero) {
//     maiorNumero = numbers[index];
//    }
// }
// console.log(maiorNumero);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 == 1) {
//         resultado = resultado + 1;
//    }
// }
//     if (resultado === 0) {
//         console.log('nenhm numero impar encontrado');
//        } else {
//         console.log(resultado);
//     }

let numbers = [];

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
}


