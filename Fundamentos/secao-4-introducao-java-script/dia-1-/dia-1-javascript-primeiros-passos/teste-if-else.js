const notaCandidata = 65;

if (notaCandidata >= 80) {
    console.log('Parabéns você foi aprovada(o)!');
}
else if (notaCandidata < 80 && notaCandidata >= 60) {
    console.log('Você está na nossa lista de espera');
}
else if (notaCandidata < 60) {
    console.log('Você foi reprovada(o)');
}