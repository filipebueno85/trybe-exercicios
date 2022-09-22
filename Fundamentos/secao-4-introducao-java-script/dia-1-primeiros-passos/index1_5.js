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
 