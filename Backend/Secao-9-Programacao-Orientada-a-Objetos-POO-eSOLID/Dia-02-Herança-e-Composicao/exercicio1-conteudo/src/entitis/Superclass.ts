// class Superclass {
//   public isSuper: boolean; 

//   constructor() {
//     this.isSuper = true;
//   }

//   sayHello(): void {
//     console.log('Olá Mundo!');
//   }
// }
// class Subclass extends Superclass {

// }

// const myFunc = (obj: Superclass) => {
//   obj.sayHello()
// } 

// const sup = new Superclass();
// const sub = new Subclass();

// myFunc(sup);
// myFunc(sub);

class Superclass {
  public isSuper: boolean; 

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá Mundo!');
  }
}
class Subclass extends Superclass {
  constructor() {
    super()
    this.isSuper = false;
  }
  public sayHello2(): void {
    this.sayHello()
  }
}

const myFunc = (obj: Superclass) => {
  obj.sayHello()
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
} 

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);