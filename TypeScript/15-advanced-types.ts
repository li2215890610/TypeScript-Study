function Dog<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
      (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
      if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id];
      }
  }
  return result;
}

class Cat {
  constructor(public name: string) { }
}
interface Loggable {
  log(): void;
}
class ConsoleLoggers implements Loggable {
  log() {
    alert('22');
  }
}
var jim = Dog(new Cat("Jim"), new ConsoleLoggers());
console.log(jim.name)
var n = jim.name;
jim.log();