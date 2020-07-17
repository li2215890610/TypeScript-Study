## 类

TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。

#### 属性和方法
使用 ```class``` 定义类，使用 ```constructor``` 定义构造函数。
通过 ```new``` 生成新实例的时候，会自动调用构造函数。

```
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
```
#### 类的继承
使用 ```extends``` 关键字实现继承，子类中使用 ```super``` 关键字来调用父类的构造函数和方法。

```
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
```

---
#### 存取器
存取器一般用来封装的，控制存取行为,支持通过```getters/setters```来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问
使用 ```getter``` 和 ```setter``` 可以改变属性的赋值和读取行为：



比如你需要控制年龄不小于18岁，就可以在set里面，判断如果小于18岁就不保存。


---

#### 静态方法

使用 ```static``` 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类名来调用：
```
class Animal1 {
  static isAnimal(a) {
    return a instanceof Animal;
  }
}

let a1 = new Animal1('Jack');
Animal1.isAnimal(a1); // success
a1.isAnimal(a); // error
```

---

#### public private 和 protected

TypeScript 可以使用三种访问修饰符，分别是 ```public```、```private``` 和 ```protected```。
1. ```public``` 修饰的属性或方法是公有的，可以在任何地方被访问调用，默认所有的属性和方法都是 ```public``` 
2. ```private``` 修饰的属性或方法是私有的，不能在声明它的类的外部访问,只能在本类访问
3. ```protected``` 修饰的属性或方法是受保护的，它和 ```private``` 类似，区别是它在子类中也是允许被访问的

##### 理解 ```private```
当成员被标记成 private时，它就不能在声明它的类的外部访问。比如：
```
class Animal2 {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

new Animal2("Cat").name; // 错误: 'name' 是私有的.

/***
12-class.ts:66:20 - error TS2341: Property 'name' is private and only accessible within class 'Animal2'.

66 new Animal2("Cat").name; // 错误: 'name' 是私有的.
***/
```

##### 理解 ```protected```
protected成员在派生类中仍然可以访问

注意 Person类我也改成了，protected
```
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
      return `Hello, my name is ${this.name} and I work in ${this.age}.`;
  }
}

let howard = new Employee1("兰陵王", 25);
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误

/***
12-class.ts:100:20 - error TS2445: Property 'name' is protected and only accessible within class 'Person' and its subclasses.

100 console.log(howard.name); // 错误
***/
```
注意，我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是 Person的子类，继承了父类的所有。


构造函数也可以被标记成 ```protected```。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如，
```
new Person('亚瑟')

/***
12-class.ts:101:1 - error TS2674: Constructor of class 'Person' is protected and only accessible within the class declaration.

101 new Person('亚瑟')
***/
```
##### readonly 修饰符

只读

你可以使用 ```readonly``` 关键字将属性设置为只读的。 只读属性必须在  **声明时或构造函数里被初始化**。
```
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8; // 声明时
    constructor (theName: string) { // 构造时
        this.name = theName;
    }
}
let dad = new Octopus("赵云");
dad.name = "我是张飞";

/***
12-class.ts:113:5 - error TS2540: Cannot assign to 'name' because it is a read-only property.

113 dad.name = "我是张飞";
***/
```

---

#### 抽象类

