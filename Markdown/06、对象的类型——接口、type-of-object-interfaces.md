## 对象的类型——接口

在 TypeScript 中，使用接口（Interfaces）来定义对象的类型。

---

#### 什么是接口


TypeScript 中的接口可用于 [对类的一部分行为进行抽象以外 (ps:13、接口、interface)](http://note.youdao.com/s/PrnIb3WB)，也常用于对象的属性类型进行描述。

---
#### 简单的例子
```
interface Person {
    name: string;
    age: number | string;
}

let zhangSan: Person = {
    name: 'Tom',
    age: 25
};
```
上面的例子中，我们定义了一个接口 ```Person```，接着定义了一个变量 ```zhangSan```，它的类型是 ```Person```。这样，我们就约束了 ```zhangSan``` 的属性类型必须和接口 ```Person``` 保持一致。


定义的属性比接口 多 或者 少 的话，编译是会报错的

```
interface Person1 {
  name: string;
  age: number | string;
}

let liSi: Person1 = {
  name: 'Tom',
  age: 25,
  weight: 33
};

/***
07-type-of-object-interfaces.ts:20:3 - error TS2322: Type '{ name: string; age: number; weight: number; }' is not assignable to type 'Person1'.
  Object literal may only specify known properties, and 'weight' does not exist in type 'Person1'.

20   weight: 33
     ~~~~~~~~~~
***/




interface Person2 {
  name: string;
  age: number | string;
}

let wangWu: Person2 = {
  name: 'Tom',
};

/***
28 let wangWu: Person2 = {
       ~~~~~~

  07-type-of-object-interfaces.ts:25:3
    25   age: number | string;
         ~~~
    'age' is declared here.
***/
```
如上所见，**赋值的时候，变量的形状必须和接口的形状保持一致**。

---

#### 可选属性

有时我们希望不要完全匹配，那么可以用可选属性：

```
interface Person3 {
    name: string;
    age?: number;
}

let yaSe: Person3 = {
    name: 'Tom',
    age: 22
};

let laoFuZi: Person3 = {
    name: 'Tom'
};
```
可选属性的含义是该属性可以不存在,可以存在。但是依然不能增加接口未定义的属性

---

#### 只读属性

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 ```readonly``` 定义只读属性：
```
interface Person4 {
    readonly id: number;
    name: string;
    age?: number;
}

let lanLingWang: Person4 = {
    id: 89757,
    name: 'Tom',
    age: 88
};

lanLingWang.id = 999;

/***
07-type-of-object-interfaces.ts:58:13 - error TS2540: Cannot assign to 'id' because it is a read-only property.

58 lanLingWang.id = 999
***/
```
上例中，使用 ```readonly``` 定义的属性 ```id``` 初始化后，又被赋值了，所以报错了。

---
#### 属性重命名
可以给属性以不同的名字：

```
const { id: naKeLuLuId, name: naKeLuLuName, age: naKeLuLuAge}: Person4 = {
  id: 2,
  name:"娜可露露",
  age: 23
 }

console.log(naKeLuLuId,naKeLuLuName,naKeLuLuAge)
```
