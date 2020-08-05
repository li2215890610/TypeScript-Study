interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo = {
  title: 'organize desk',
  description: 'clear clutter',
};

const log = updateTodo(todo, {
  description: 'throw out trash',
});

console.log(log)



interface Todo1 {
  title: string;
}

const todo1: Readonly<Todo1> = {
  title: 'Delete inactive users',
};

todo1.title = 'Hello';


interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
  about: { title: 'home'},
  contact: { title: 'contact' },
  home: { title: 'home' },
};



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


type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
type T2 = Exclude<string | number | (() => void), Function>;  // string | number


type T3 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
type T4 = Extract<string | number | (() => void), Function>;  // () => void


type T5 = NonNullable<string | number | undefined>;  // string | number
type T6 = NonNullable<string[] | null | undefined>; //string[]



type T7 = ReturnType<() => string>;  // string
type T8 = ReturnType<(s: string) => void>;  // void
type T9 = ReturnType<(<T>() => T)>;  // {}
type T10 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type Todo4 = { a: number, b: string}
const todo4 = ():Todo4 =>{
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



class C {
  x = 0;
  y = 0;
}

type T16 = InstanceType<typeof C>;  // C
const todo5: T16 = {
  x:0,
  y:10
}
type T17 = InstanceType<any>;  // any
type T18 = InstanceType<never>;  // any
type T19 = InstanceType<string>;  // Error
type T20 = InstanceType<Function>;  // Error




interface Props {
  a?: number;
  b?: string;
  c?: boolean
};

const todo6: Props = { a: 5 }; // OK

const todo7: Required<Props> = { a: 5 };