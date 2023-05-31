export default class Person {
  // private _name: string;
  // private _birthDate: Date;

  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name; // o this chama a funcao  set 
    this.birthDate = _birthDate;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    if (name.length < 3) throw new Error('O nome deve ter no minimo 3 caracteres');
    this._name = name;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(birthDate: Date) {
    const year =  new Date().getFullYear() - birthDate.getFullYear(); 
    if(birthDate > new Date() || year >= 120) throw new Error('insira uma data válida!')
    this._birthDate = birthDate;
  }
}



const pessoa1 = new Person('Filipe', new Date(1985, 2, 15));
const pessoa2 = new Person('Tiago', new Date(2000, 9, 8));
// const pessoa3 = new Person('Luana', new Date(1900, 9, 8));

console.log(pessoa1, pessoa2);

// pessoa3.birthDate = new Date(1900, 9, 8)

// export default class Person {
//   protected MINIMUM_NAME_LENGTH = 3;

//   protected MAXIMUM_AGE = 120;

//   constructor(
//     private _name: string,
//     private _birthDate: Date,
//   ) {
//     this.validatePerson(); // validação do objeto criado com o construtor da classe
//   }

//   get name(): string {
//     return this._name;
//   }

//   set name(name: string) {
//     this.validateName(name);
//     this._name = name;
//   }

//   get birthDate(): Date {
//     return this._birthDate;
//   }

//   set birthDate(date: Date) {
//     this.validateBirthDate(date);
//     this._birthDate = date;
//   }

//   static getAge(date: Date): number {
//     const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
//     const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
//     return Math.floor(diff / yearMs);
//   }

//   private validateName(name: string): void {
//     if (name.length < this.MINIMUM_NAME_LENGTH) {
//       throw new Error(`O nome deve conter no mínimo ${this.MINIMUM_NAME_LENGTH} caracteres.`);
//     }
//   }

//   private validateBirthDate(date: Date): void {
//     if (date.getTime() > new Date().getTime()) {
//       throw new Error('A data de nascimento não pode ser uma data no futuro.');
//     }
//     if (Person.getAge(date) > this.MAXIMUM_AGE) {
//       throw new Error(`A pessoa deve ter no máximo ${this.MAXIMUM_AGE} anos.`);
//     }
//   }

//   private validatePerson(): void {
//     this.validateName(this.name);
//     this.validateBirthDate(this.birthDate);
//   }
// }
