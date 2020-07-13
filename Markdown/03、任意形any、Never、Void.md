### 任意值

任意值（Any）用来表示允许赋值为任意类型，简单来说就是通吃 啥类型都行。

#### 什么是任意值类型
如果是一个普通类型，在赋值过程中改变类型是不被允许的：

```
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

/***
03-any.ts:3:1 - error TS2322: Type '7' is not assignable to type 'string'.

3 myFavoriteNumber = 7;
  ~~~~~~~~~~~~~~~~


Found 1 error.
***/
```
但如果是 ```any``` 类型，则允许被赋值为任意类型。
```
let newFavoriteNumber: any = 'seven';
newFavoriteNumber = 7;
```
如果你全部都用any的话，那你使用TypeScript就没有意义了

---

#### 任意值的属性和方法
在任意值上访问任何属性都是允许的：
```
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
```
也允许调用任何方法：
```
let anyThing1: any = 'Tom';
anyThing1.setName('Jerry');
anyThing1.setName('Jerry').sayHello();
anyThing1.myName.setFirstName('Cat');
```
可以认为，**声明一个变量为any之后，对它的任何操作，返回的内容的类型都是任意值**。

---
#### 未声明类型的变量
**变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：**

```
let something;
something = 'seven';
something = 7;

something.setName('Tom');
```
等价于

```
let something: any;
something = 'seven';
something = 7;

something.setName('Tom');
```
---

#### never

never类型表示的是那些永不存在的值的类型
[详细参考解释](https://www.zhihu.com/question/354601204)

---

#### 空值
JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 ```void``` 表示没有任何返回值的函数：
类似于Object-c与JAVA中的返回值
```
function alertName(): void {
    alert('My name is Tom');
}
```
声明一个```void``` 类型的变量没有什么用，因为你只能将它赋值为 ```undefined``` 和 ```null```：
```
let unusable: void = undefined;
```

