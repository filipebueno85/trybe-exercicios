// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.



const mediaNota = 65;

if (mediaNota < 0 || mediaNota > 100) {
    console.log('erro no sistema');
}
else if (mediaNota >= 90) {
    console.log('Você tirou nota A');
}
else if (mediaNota >= 80) {
    console.log('Você tirou nota B');
}
else if (mediaNota >= 70) {
    console.log('Você tirou nota C');
}
else if (mediaNota >= 60) {
    console.log('Você tirou nota D');
}
else if (mediaNota >= 50) {
    console.log('Você tirou Nota E');
} else {
    console.log('Você tirou nota F');
}

// if (nota > 0 && nota < 100) {
//     if (nota >= 90) {
//       console.log('A');
//     } else if (nota >= 80) {
//       console.log('B');
//     } else if (nota >= 70) {
//       console.log('C');
//     } else if (nota >= 60) {
//       console.log('D');
//     } else if (nota >= 50) {
//       console.log('E');
//     } else {
//       console.log('F');
//     }
//   } else {
//     console.log('Nota inválida');
//   };