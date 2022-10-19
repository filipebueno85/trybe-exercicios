const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const lesson2TunoNoite = (lesson, chave, value) => {
  lesson[chave] = value;

}
lesson2TunoNoite(lesson2, 'turno', 'Noite');
// console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (lesson) => {
  for (let key in lesson) {
    lesson[key];
    return Object.keys(lesson);
  }
}
// const listKeys = (lesson) => Object.keys(lesson); //alternativo
listKeys(lesson1);

// Crie uma função para mostrar o tamanho de um objeto.

const tamanhoObjeto = (lesson) => {
  return Object.keys(lesson).length;
};
tamanhoObjeto(lesson1);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (lesson) => Object.values(lesson);
listValues(lesson3);
// Quando queremos recuperar as chaves usamos o "Object.keys()", de forma similar, para recuperar os valores em um array usamos o método "Object.values()"

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

const totalEstudantes = (lessons) => {
 let total = 0;
 const array = Object.keys(lessons);
 for (let index in array) {
  total = total + lessons[array[index]].numeroEstudantes;
 }
 return total;
};
totalEstudantes(allLessons);

// const numberOfStudents = () => {
//   const soma = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
//   return soma;
// }
​

// const totalEstudantes = (lessons) => {
//   let total = 0;
//   const array = Object.keys(lessons);
//   for (let index = 0; index < array.length;  index += 1) {
//    total = total + lessons[array[index]].numeroEstudantes;
//   }
//   return total;
//  };
//  console.log(totalEstudantes(allLessons));
 
// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto

const valoresChavesPosicao = (lesson, posicao) => {
  return Object.values(lesson)[posicao];
}
valoresChavesPosicao(lesson1, 2);

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verificaExistencia = (lesson, key, value) => {
  const verificar = Object.entries(lesson);
  let ehIgual = false;
  for (let index = 0; index < verificar.length; index += 1) {
    if (verificar[index][0] === key && verificar[index][1] === value) {
      ehIgual = true;
    }
    return verificar
  }
  
};
console.log(verificaExistencia(lesson2, 'materia', 'Matemática'));

// const verifyPair = (obj, key, value) => obj[key] === value;
// console.log(verifyPair(lesson1, 'turno', 'manhã'));
// console.log(verifyPair(lesson1, 'turno', 'tarde'));

// Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática.

const totalEstudantesMatematica = (lessons) => {
  let total = 0;
  const array = Object.keys(lessons);
  for (let index in array) {
    if (lessons[array[index]].materia === 'Matemática') {
      total = total + lessons[array[index]].numeroEstudantes;
    }
    return total;
  }
 };
 console.log(totalEstudantesMatematica(allLessons));

//  const studentsInMathClass = () => {
//   // quantidade de alunos
//   let quantity = 0;
//   // criar obj.values
//   const values = objValues(allLessons);

//   // for
//   for (let i = 0; i < objLength(allLessons); i += 1) {
//     // se está na aula de matemática
//     if (values[i].materia === 'Matemática') {
//       quantity += values[i].numeroEstudantes;
//     }
//   }
//   //retorna
//   return quantity;
// }

// // console.log(studentsInMathClass());

// Utilizando o objeto (allLesson), crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

const createReport = (professor) => {
  const result = {
    professor,
    aulas: [],
    estudantes: 0
  }
  const values = objValues(allLessons);

  // for
  for (let i = 0; i < objLength(allLessons); i += 1) {
    // se está na aula de matemática
    if (values[i].professor === professor) {
      // achar as aulas
      result.aulas.push(values[i].materia);
      // estudantes nas aulas do professor
      result.estudantes += values[i].numeroEstudantes
    }
  }

  return result;
} 

console.log(createReport('Maria Clara'));



