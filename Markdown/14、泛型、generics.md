## 泛型


类型约定，由调用者定义<>传入，使用者 关注调用者传入的约定

定义时不确定，使用时确定

---

#### 泛型之Hello World

这个函数可能是下面这样：
```
const identity = (arg: number): number =>{
  return arg;
}
```
或者，我们使用any类型来定义函数：
```
const identity = (arg: any): any =>{
  return arg;
}
```
使用 **any** 类型会导致这个函数可以接收任何类型的 **arg** 参数

传入的类型与返回的类型应该是**相同的**,如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

因此，我们需要一种方法使 **返回值的类型与传入参数的类型是相同的** 。 这里我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
```
const identity2 = <Ts>(arg: Ts): Ts => {
  return arg;
}
identity2<string>('2')
```
我们给identity添加了类型变量  ```Ts```,   
```Ts```帮助我们限制用户传入的类型（比如：string），我们就可以使用这个类型。 之后再次使用了 ```Ts```当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们追踪函数里使用的类型的信息。


故此把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 不同于使用 any，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。
```
identity2<string>('2')
```
这里我们明确的指定了 ```Ts``` 是 ```string```类型，并做为一个参数传给函数，使用了 ```<>```括起来而不是 ```()```。

---

#### 使用泛型变量

使用泛型创建像 **identity1** 这样的泛型函数时，编译器要求你在函数体内必须正确的使用这个泛型参数。 换句话说，你必须把这些参数 当做是任意类型来处理逻辑。

看下之前identity1例子：
```
const identity1 = <Ts>(arg: Ts): Ts => {
  return arg;
}
```
如果我们想同时打印出```arg```的长度。 我们很可能会这样做：

```
const identity3 = <Ts>(arg: Ts): Ts => {
  console.log(arg.length)
  return arg;
}

/***
14-generics.ts:17:14 - error TS2339: Property 'length' does not exist on type 'Ts'.

17   return arg.length;
***/
```

如果这么做，编译器会报错说我们使用了 ```arg```  的 ```.length``` 属性，但是没有地方指明 ```arg``` 具有这个属性。**```Ts``` 类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字、对象、函数，而这些可能传入的类型是没有 .length属性的**。


假设我们想操作 ```Ts```类型的数组，而不直接操作 ```Ts```传进来的参数。所有我们要 **```包装一下```**  由于我们操作的是数组，所以```.length```属性是应该存在的。 我们可以像创建其它数组一样(ps: Ts[])来创建这个数组：

```
const identity4 = <Ts>(arg: Ts[]):Ts[] => {
  console.log(arg.length)
  return arg;
}
identity4<number>([1,2])


const identity5 = <Ts>(arg: Array<Ts>): Ts[] => {
  console.log(arg.length)
  return arg;
}

identity5<number>([3,4])
```

---
#### 泛型接口

```
interface identity6T {
  <T>(arg: T): T;
}

const identity6:identity6T = <T>(arg: T): T =>{
  return arg;
}
```

```
interface identity7T<T> {
  <T>(arg: T): T;
}

const identity7:identity7T<number> = <T>(arg: T): T =>{
  return arg;
}
```

---
#### 泛型类

```
class identity8<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
  constructor(data:T){
    this.zeroValue = data
  }
}

new identity8<number>(2)
```











