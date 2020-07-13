## 原始数据类型

JavaScript 的类型分为两种：原始数据类型[（Primitive data types）](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 [ES6 中的新类型 Symbol。](https://www.baidu.com/s?ie=UTF-8&wd=symbl)

本节主要介绍**前五种**原始数据类型在 TypeScript 中的应用。

---

#### 布尔值
布尔值是最基础的数据类型，在 TypeScript 中，使用 ```boolean``` 定义布尔值类型：
```
let isDone: boolean = false;

// 编译通过...
// isDone 约定，未强调编译错误的代码片段，默认为编译通过
```
注意，使用构造函数 Boolean 创造的对象 **不是** 布尔值：
```
let createdByNewBoolean: boolean = new Boolean(1);

/***
02-primitive-data-types.ts:1:5 - error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
  'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.

1 let createdByNewBoolean: boolean = new Boolean(1);
      ~~~~~~~~~~~~~~~~~~~


Found 1 error.
***/
```
事实上 ```new Boolean()``` 返回的是一个 ```Boolean`` 对象：
```
let createdByNewBoolean: Boolean = new Boolean(1);
```
直接调用 ```Boolean``` 也可以返回一个 ```boolean``` 类型：
```
let createdByBoolean: boolean = Boolean(1);
```
在 TS 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。

---

#### 数值
使用 ```number``` 定义数值类型：
```
let arrLength:number = 9;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
```
编译后
```
var arrLength = 9;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
```
---
#### 字符串
使用 ```string``` 定义字符串类型：

```
var myGirlfriendName = 'bin Li';
var myGirlfriendAge = 24;
var sentence = "Hello, my name is " + myGirlfriendName + ".\nI'll be " + (myGirlfriendAge + 1) + " years old next month.";
```

---

#### Null 和 Undefined

在 TypeScript 中，可以使用 ```null``` 和 ```undefined``` 来定义这两个原始数据类型：

```
let u: undefined = undefined;
let n: null = null;
```
与 ```void``` 的区别是，```undefined``` 和 ```null``` 是所有类型的子类型。也就是说 ```undefined``` 类型的变量，可以赋值给 ```number```类型的变量：
```
// 这样不会报错
let num: number = undefined;
```
```
// 这样也不会报错
let u1: undefined;
let num1: number = u1;
```

而 ```void``` 类型的变量不能赋值给 ```number``` 类型的变量：
```
let u3: void;
let num3: number = u3;
/***
02-primitive-data-types.ts:35:5 - error TS2322: Type 'void' is not assignable to type 'number'.

35 let num3: number = u3;
Found 2 error.
***/
```

