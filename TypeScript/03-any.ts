//什么是任意值类型
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;
//但如果是 any 类型，则允许被赋值为任意类型。
let newFavoriteNumber: any = 'seven';
newFavoriteNumber = 7;

//在任意值上访问任何属性都是允许的：
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
//也允许调用任何方法：
let anyThing1: any = 'Tom';
anyThing1.setName('Jerry');
anyThing1.setName('Jerry').sayHello();
anyThing1.myName.setFirstName('Cat');
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let something;
something = 'seven';
something = 7;

something.setName('Tom');



//空值
function alertName(): void {
  alert('My name is Tom');
}
let unusable: void = undefined;