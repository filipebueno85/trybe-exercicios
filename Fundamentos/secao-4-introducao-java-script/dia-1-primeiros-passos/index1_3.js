// utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

const anguloA = 30;
const anguloB = 140;
const anguloC = 10;

let somaDosANgulos = anguloA + anguloB + anguloC;

let todosAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (todosAngulosPositivos) {
    if (somaDosANgulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
    } else {
        console.log('a soma nao forma o angulo do triangulo');
}


// if (somaDosANgulos === 180) {
//     console.log(true);
// } 
// else if (somaDosANgulos !== 180) {
//     console.log(false);
// } else {
//     console.log('a soma nao forma o angulo do triangulo');
// }
