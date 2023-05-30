export default class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(
    enrollment: string, 
    name: string, 
    // exames: number[], 
    // assignments: number[]
    ) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._assignmentsGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }

    this._assignmentsGrades = value;
  }

  sumGrades(): number {
    const exames = this._examsGrades.reduce((acc, notaCorrente) => {
      acc += notaCorrente;
      return acc;
    }, 0);

    const assignment = this._assignmentsGrades.reduce((acc, notaCorrente) => {
      acc += notaCorrente;
      return acc;
    }, 0);

    return exames + assignment;
    // return [...this._examsGrades, ...this._assignmentsGrades]
    //   .reduce((previousNote, note) => {
    //     const nextNote = note + previousNote;
  
    //     return nextNote;
    //   }, 0);
  }
  
  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.assignmentsGrades.length;
  
    return Math.round(sumGrades / divider);
  }
}

// calculaNotas(): number {
//       const provas = this._examsGrades.reduce((acc, notaCorrente) => {
//         acc += notaCorrente;
//         return acc;
//       }, 0);
  
//       const trabalhos = this._assignmentsGrades.reduce((acc, notaCorrente) => {
//         acc += notaCorrente;
//         return acc;
//       }, 0);
  
//       return provas + trabalhos;
//     }

// Para testar!

const personOne1 = new Student('202001011', 'Maria da Silva');

personOne1.examsGrades = [25, 20, 23, 23];
personOne1.assignmentsGrades = [45, 45];

console.log(personOne1);
console.log('Soma de todas as notas: ', personOne1.sumGrades());
console.log('Média de todas as notas: ', personOne1.sumAverageGrade());

const personOne = new Student('202001011', 'Maria da Silva');

console.log(personOne);

const personTwo = new Student('202001012', 'João da Silva');

console.log(personTwo);


  // matricula: number;
  // nome: string;
  // notasDeProva: number[];
  // notasDeTrabalho: number[];

  // constructor(m: number, n: string, np: number[], nt: number[]) {
  //   this.matricula = m;
  //   this.nome = n;
  //   this.notasDeProva = np;
  //   this.notasDeTrabalho = nt;
  // }

//   calculaNotas(): number {
//     const provas = this._notasDeProva.reduce((acc, notaCorrente) => {
//       acc += notaCorrente;
//       return acc;
//     }, 0);

//     const trabalhos = this.notasDeTrabalho.reduce((acc, notaCorrente) => {
//       acc += notaCorrente;
//       return acc;
//     }, 0);

//     return provas + trabalhos;
//   }

//   mediaDasNotas(): number {
//     const media = this.calculaNotas() / (this.notasDeProva.length + this.notasDeTrabalho.length);
//     return media;
//   }
// }

// const student1 = new Student(1, 'Victor', [8, 5, 7, 9], [10, 3]);
// console.log(student1.calculaNotas());
// console.log(student1.mediaDasNotas());