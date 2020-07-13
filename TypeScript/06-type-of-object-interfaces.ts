interface Person {
  name: string;
  age: number | string;
}

let zhangSan: Person = {
  name: 'Tom',
  age: 25
};


interface Person1 {
  name: string;
  age: number | string;
}

let liSi: Person1 = {
  name: 'Tom',
  age: 25,
  weight: 33
};

interface Person2 {
  name: string;
  age: number | string;
}

let wangWu: Person2 = {
  name: 'Tom',
};


interface Person3 {
  name: string;
  age?: number;
}

let yaSe: Person3 = {
  name: 'Tom',
  age: 22
};

let laoFuZi: Person3 = {
  name: 'Tom'
};

interface Person4 {
  readonly id: number;
  name: string;
  age?: number;
}

let lanLingWang: Person4 = {
  id: 89757,
  name: 'Tom',
  age: 88
};
lanLingWang.id = 999

export {
  zhangSan
}

const { id: naKeLuLuId, name: naKeLuLuName, age: naKeLuLuAge}: Person4 = {
  id: 2,
  name:"娜可露露",
  age: 23
 }

console.log(naKeLuLuId,naKeLuLuName,naKeLuLuAge)