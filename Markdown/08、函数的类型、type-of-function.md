## 函数的类型

#### 函数声明


一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

```
function sum(x: number, y: number): number {
    return x + y;
}
```
( **:定义参数的类型** ) **:定义返回值的类型**

注意多写一个参数，少写一个参数 编译都会出现错误
```
function sum(x:number, y:number):number {
  return x + y;
}


sum(1,3,4)
sum(1)

/***

08-type-of-function.ts:6:9 - error TS2554: Expected 2 arguments, but got 3.

6 sum(1,3,4)
          ~

08-type-of-function.ts:7:1 - error TS2554: Expected 2 arguments, but got 1.

7 sum(1)
  ~~~~~~

  08-type-of-function.ts:1:24
    1 function sum(x:number, y:number):number {
                             ~~~~~~~~
    An argument for 'y' was not provided.

***/
```

---

#### 函数表达式

```
let mySum = function (x: number, y: number): number {
    return x + y;
};
```
这样写有点low
下面这个比较广泛
```
const sumStr = (s:string,d:string):string => {
    return s+d
}

sumStr('2','4')
```

---

#### 可选参数

前面提到，输入多（或者少于要求的）参数，是不允许的但是可以用``` ? ```来表示

与接口中的可选属性类似，我们用``` ? ```表示可选的参数：

```
const sumStr1 = (s:string,d?:string):string => {
  if(d) return s+d
  return s
}

sumStr1('2','2')

sumStr1('2')
```

需要注意的是，**可选参数必须接在必需参数后面**。换句话说，**可选参数后面不允许再出现必需参数了**：

```
const sumStr1 = (s:string,d?:string):string => {
  if(d) return `${s}${d}`
  return s
}

sumStr1('2','4')
```


---

#### 参数默认值

平时开发中我们可以给函数一个默认值，在TypeScript中也可以给默认值
```
const sumStr2 = (s:string = '222',b:string = '111'):string =>{
    return s+b
}

sumStr2('2')
sumStr2('2','1')
```

---

#### 重载

重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

比如，我们需要实现一个函数 ```reverse```，输入数字 ```123``` 的时候，输出反转的数字 ```321```，输入字符串 ```'hello'``` 的时候，输出反转的字符串 ```'olleh'```。

利用联合类型，我们可以这么实现：

```
const reverse = (x: number | string): number | string => {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```