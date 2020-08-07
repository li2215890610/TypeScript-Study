#### Partial<T>
构造类型```T```，将它所有的属性设置为可选的。
```
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const log = updateTodo(todo1, {
  description: 'throw out trash',
});

console.log(log)
```

其实就是把 ```Todo``` 变为可选
```
interface Todo {
  title?: string;
  description?: string;
}

```
---
#### Readonly<T>
构造类型```T```，并将它所有的属性设置为```readonly```，也就是说构造出的类型的属性不能被再次赋值。

```
interface Todo {
    title: string;
}

const todo: Readonly<Todo> = {
    title: 'Delete inactive users',
};

todo.title = 'Hello'; /***
16-utils-types.ts:31:7 - error TS2540: Cannot assign to 'title' because it is a read-only property.

31 todo1.title = 'Hello';
         ~~~~~


Found 1 error.
***/
```

---
#### Record<K,T>
构造一个类型，对象属性名的类型为```K```，对象属性值的类型为```T```。

```
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};
```

---
#### Pick<T,K>

从类型```T```中挑选部分属性```K```来构造类型。

```
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
  subTitle: string
}

type TodoPreview = Pick<Todo2, 'title' | 'completed' | 'subTitle'>;

const todo2: TodoPreview = {
  title: 'Clean room',
  completed: false,
  subTitle: '2'
};
```

---
#### Omit<T,K>

从类型```T```中删除部分属性```K```来构造类型。

```
interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
  subTitle: string
}

type TodoPreview1 = Omit<Todo3, 'title' | 'completed' | 'subTitle'>;

const todo3: TodoPreview3 = {
  description:'222'
};
```

---
#### Exclude<T,U>

从类型```T```中删除可以赋值给```U```的属性，然后构造一个类型。
```
type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number

```

---
#### Extract<T,U>

从类型```T```中选则可以赋值给```U```的属性，然后构造一个类型。
```
type T3 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
type T4 = Extract<string | number | (() => void), Function>;  // () => void
```

---
#### NonNullable<T>
从类型```T```中剔除```null```和```undefined```，然后构造一个类型。
```
type T5 = NonNullable<string | number | undefined>;  // string | number
type T6 = NonNullable<string[] | null | undefined>;  // string[]
```

---
#### ReturnType<T>

由函数类型```T```的返回值类型构造一个类型。

```
type T7 = ReturnType<() => string>;  // string
type T8 = ReturnType<(s: string) => void>;  // void
type T9 = ReturnType<(<T>() => T)>;  // {}
type T10 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type Todo4 = { a: number, b: string}
const todo5 = ():Todo4 =>{
  return {
    a: 2,
    b: '33'
  }
}
type T11 = ReturnType<typeof todo3>;  // { a: number, b: string }
type T12 = ReturnType<any>;  // any
type T13 = ReturnType<never>;  // any
type T14 = ReturnType<string>;  // Error
type T15 = ReturnType<Function>;  // Error
```

---
#### InstanceType<T>
由构造函数 类型```T```的实例类型构造一个类型。
```
type T16 = InstanceType<typeof C>;  // C
const todo6: T16 = {
  x:0,
  y:10
}
type T17 = InstanceType<any>;  // any
type T18 = InstanceType<never>;  // any
type T19 = InstanceType<string>;  // Error
type T20 = InstanceType<Function>;  // Error
```

---
#### Required<T>
构造一个类型，使类型T的所有属性为required。

```
interface Props {
  a?: number;
  b?: string;
  c?: boolean
};

const todo7: Props = { a: 5 }; // OK

const todo8: Required<Props> = { a: 5 };
/***
16-utils-types.ts:137:7 - error TS2739: Type '{ a: number; }' is missing the following properties from type 'Required<Props>': b, c

137 const todo7: Required<Props> = { a: 5 };
***/
```
#### keyof
可以获取对象类型的所有 key

```
type todo9 = { a: string; b: string }
type todo10 = keyof todo9; // 'a' | 'b'
```
