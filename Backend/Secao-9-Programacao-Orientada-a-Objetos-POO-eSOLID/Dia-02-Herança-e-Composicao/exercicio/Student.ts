import Person from './Person';


export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment()
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
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
  }
  
  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.assignmentsGrades.length;
  
    return Math.round(sumGrades / divider);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}