## 联合类型

联合类型 表示取值可以为多种类型中的一种,简单来说你可以定义多种可选类型，供你选择使用。

#### 简单的例子

```
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
myFavoriteNumber = true;

/***
05-union-types.ts:2:1 - error TS2322: Type 'true' is not assignable to type 'string | number'.

2 myFavoriteNumber1 = true;
  ~~~~~~~~~~~~~~~~

Found 1 error.
***/
```
上面错误的意思是 ```let myFavoriteNumber: string | number ```的含义是，允许 ```myFavoriteNumber``` 的类型是 ```string``` 或者 ```number```，但是不能是其他类型。


**联合类型使用``` | ```分隔每个类型。**

---

#### 访问联合类型的属性或方法

当 TypeScript 不确定一个（定义多个类型）的变量到底是哪个类型的时候，我们**只能访问（定义多个类型）的变量共有的属性或方法**：
```
function getLength(something: string | number): number {
    return something.length;
}

/***
05-union-types.ts:11:20 - error TS2339: Property 'length' does not exist on type 'string | number'.
  Property 'length' does not exist on type 'number'.

11   return something.length;
***/
```
上例中，```length``` 不是 ```string``` 和 ```number``` 的共有属性，所以会报错。

访问 ```string``` 和 ```number``` 的共有属性就不会出现上面的问题：
```
function getString(something: string | number): string {
    return something.toString();
}
```

