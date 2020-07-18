## 数组的类型

#### 「类型 + 方括号」表示法

最简单的方法是使用「类型 + 方括号」来表示数组：

```
let listNumber: number[] = [1, 1, 2, 3, 5];
```
数组的项中不允许出现其他的类型：
```
let listNumber1: number[] = [1, '1', 2, 3, 5];
/***
07-type-of-array.ts:1:33 - error TS2322: Type 'string' is not assignable to type 'number'.

1 let listNumber1: number[] = [1, '1', 2, 3, 5];
                                  ~~~
***/                                  
```
随之所添加的类型也受限制
```
let listNumber2: number[] = [1, 1, 2, 3, 5];
listNumber2.push('8');

/***
07-type-of-array.ts:5:16 - error TS2345: Argument of type '"8"' is not assignable to parameter of type 'number'.

5 listNumber2.push('8');
***/
```
上面 ```listNumber2.push('8')```添加的数据编译是出错的，我们定义的数组是 number类型，push的时候也应是number类型

---
#### 数组泛型

我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：

```
let listNumber3: Array<number> = [1, 1, 2, 3, 5];
```
关于泛型，可以参考 [14、泛型](http://note.youdao.com/s/C4tgyCL6)

#### 用接口表示数组
接口也可以用来描述数组：



#### any 在数组中的应用
一个比较常见的做法是，用 ```any``` 表示数组中允许出现任意类型：
```
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
```
