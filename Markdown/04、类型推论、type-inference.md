## 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论的规则推断出一个类型,供你选择

#### 什么是类型推论
以下代码虽然没有指定类型，但是会在编译的时候报错：
(ps:如果你使用VScode开发，开发时就会告诉你类型不匹配)
```
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

/*** 

04.ts:2:1 - error TS2322: Type '7' is not assignable to type 'string'.

2 myFavoriteNumber = 7;
  ~~~~~~~~~~~~~~~~

Found 1 error.

***/
```
事实上，它等价于：
```
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;
// 已经声明了 myFavoriteNumber 为string类型，为何要改变它？
```
TypeScript 会在你没有明确指定类型的时候，系统默认推测出一个类型，这就是类型推论。

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
```
let myFavoriteNumber1;
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;
```

