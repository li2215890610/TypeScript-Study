var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.sayHi = function () {
        return 'Meow, ' + _super.prototype.sayHi.call(this); // 调用父类的 sayHi()
    };
    return Cat;
}(Animal));
var c = new Cat('Tom'); // Tom
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
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.isAnimal = function (a) {
        return a instanceof Animal1;
    };
    return Animal1;
}());
var a1 = new Animal1('Jack');
Animal1.isAnimal(a1); // success
a1.isAnimal(a);
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
new Animal2("Cat").name; // 错误: 'name' 是私有的.
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino(name) {
        return _super.call(this, name) || this;
    }
    return Rhino;
}(Animal3));
var rhino = new Rhino('sss');
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and age " + this.age + ".";
    };
    return Employee1;
}(Person));
var howard = new Employee1("兰陵王", 25);
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
new Person('亚瑟');
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("赵云");
dad.name = "我是张飞";
