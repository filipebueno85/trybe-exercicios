// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Maçã', 'Banana', 'Mamão'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Suco de laranja', 'Groselha', 'Açucar'];

// const fruitSalad = (fruit, additional) => {
//   const saladaDeFrutas = [...fruit, ...additional];
//   return saladaDeFrutas;
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// function quantosParams(...args) {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// // desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

// const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática


// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;

// console.log(nationality)

// const position2d = [1.0, 2.0];
// const [x, y, z = 0] = position2d;

// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 0


// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const userInfos = {...user, ...jobInfos};

// const { name, age, nationality, profession, squad, squadInitials } = userInfos; 

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.}`);

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// const [saudacao, saudacao1] = saudacoes;

// console.log(saudacao1(saudacao)); 

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
// const [saudacao, realizaSaudacao] = saudacoes;

// console.log(realizaSaudacao(saudacao)); // Olá

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';
// [comida, animal, bebida] = [bebida, comida, animal];  
// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// [,,, ...numerosPares] = numerosPares;

// console.log(numerosPares) // [6, 8, 10, 12];

// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));



// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo


// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude,
// });

// console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));