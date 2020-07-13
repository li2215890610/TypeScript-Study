//布尔值
let createdByNewBoolean: boolean = new Boolean(1);

// 数值
let arrLength:number = 9;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;

//字符串
let myGirlfriendName: string = 'bin Li';
let myGirlfriendAge: number = 24;

let sentence: string = `Hello, my name is ${myGirlfriendName}.
I'll be ${myGirlfriendAge + 1} years old next month.`;

// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;
let num: number = undefined;

// 这样也不会报错
let u1: undefined;
let num1: number = u1;

let u3: void;
let num3: number = u3;