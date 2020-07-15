class Animal {
  public name;
  constructor(name) {
      this.name = name;
  }
  sayHi() {
      return `My name is ${this.name}`;
  }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack

class Cat extends Animal {
  constructor(name) {
    super(name); // 调用父类的 constructor(name)
    console.log(this.name);
  }
  sayHi() {
    return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
  }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom

/**
class Employee {
  constructor(age:number) {
    this.age = age;
  }
  get age() {
    return this.age;
  }
  set age(value:number) {
    if(value > 18){
      this.age = value
    }else{
      new Error("不可小于18")
    }
  }
}

let zhangSan = new Employee(17); // setter: 17
zhangSan.age = 16; // setter: 17
console.log(zhangSan.age); //
**/

class Animal1 {
  static isAnimal(a) {
    return a instanceof Animal1;
  }
}

let a1 = new Animal1('Jack');
Animal1.isAnimal(a1); // success
a1.isAnimal(a); 



class Animal2 {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

new Animal2("Cat").name; // 错误: 'name' 是私有的.


class Animal3 {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal3 {
  constructor(name) { super(name); }
}
let rhino = new Rhino('sss')


class Person {
  protected name: string;
  protected constructor(name: string) { this.name = name; }
}

class Employee1 extends Person {
  private age: number;

  constructor(name: string, age: number) {
      super(name)
      this.age = age;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and age ${this.age}.`;
  }
}

let howard = new Employee1("兰陵王", 25);
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
new Person('亚瑟')



class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
      this.name = theName;
  }
}
let dad = new Octopus("赵云");
dad.name = "我是张飞";