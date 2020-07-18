我们从一个简单的例子开始。

将以下代码复制到 01-helloTypeScript.ts 中：

```
function sayHello(person:string) {
  return 'Hello,' + person
}

let user = 'Tom';
console.log(sayHello(user));
```
然后运行 
```
tsc hello.ts
```
这时候会生成一个编译好的文件 01-helloTypeScript.js：
```
var sayHello = function (person) {
    return 'Hello, ' + person;
};
var user = 'Tom';
console.log(sayHello(user));
```

---
在 TypeScript 中，我们使用``` : ```指定变量的类型，```:``` 的前后有没有空格都可以。


上述例子中，我们用``` : ```指定 ```person``` 参数类型为 ```string```。但是编译为 js 之后，并没有什么检查的代码被插入进来
这是因为TypeScript只运行在编译时，编译之后运行在服务器上面不在有类型检查
如果我们需要保证运行时的参数类型，还是得手动对类型进行判断：
```
function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    } else {
        throw new Error('person is not a string');
    }
}

let user = 'Tom';
console.log(sayHello(user));
```

---

**如果我们在编译器上面出现错误，编译的时候同样也会出现错误，但是不影响TS编译之后输出js文件，即使编译的时候报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。**








