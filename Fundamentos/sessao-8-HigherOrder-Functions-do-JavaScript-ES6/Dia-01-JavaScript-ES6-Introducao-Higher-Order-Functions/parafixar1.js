const acordando = () => 'Acordando!!';

const tomarCafe = () => 'Bora tomar café!!';

const horaDeDormir = () => 'Partiu dormir!!';

const doingThings = (func) => func();

// Ao chamar a função doingThings:
console.log(doingThings(acordando));
console.log(doingThings(tomarCafe));
console.log(doingThings(horaDeDormir));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

// const wakeUp = () => 'Acordando!!';
// const breakfast = () => 'Bora tomar café!!';
// const sleep = () => 'Partiu dormir!!';
// const doingThings = (callback) => {
//   const result = callback();
//   console.log(result);
// };
// doingThings(wakeUp); // Acordando!!
// doingThings(breakfast); // Bota tomar café!!
// doingThings(sleep); // Partiu dormir!!