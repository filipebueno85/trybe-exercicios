import Employee from './ItEmployee';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
carolina.assignmentsGrades = [50, 45];
lucas.assignmentsGrades = [47, 42];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];
jessica.examsGrades = [50, 45];
tamires.examsGrades = [47, 42];

console.log('Media de Notas Carolina =', carolina.sumAverageGrade());

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);

console.log('-------------------------------');

const employeeInterface: Employee = {
  registration: 'FNC1458729863874',
  salary: 1300.00,
  admissionDate: new Date('2004/06/06'),
  
  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    
    return `FNC${randomStr}`;
  }
}

console.log('employee =', employeeInterface);


// deve retornar erro
// fernando.assignmentsGrades = [45, 45, 45];

console.log('-------------------------------');

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(history);
console.log(philosophy);

// deve retornar erro
// const invalidSubjectName = new Subject('Po');
console.log('-------------------------------');

// const math = new Subject('Matemática');
// const history = new Subject('História');
// const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);

// deve retornar erro
//const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;