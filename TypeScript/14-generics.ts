const identity = (arg: number): number =>{
  return arg;
}

const identity1 = (arg: any): any =>{
  return arg;
}

const identity2 = <Ts>(arg: Ts): Ts => {
  return arg;
}
identity2<string>('2')



const identity3 = <Ts>(arg: Ts):Ts => {
  return arg.length;
}

identity3<string>('2')


const identity4 = <Ts>(arg: Ts[]):Ts[] => {
  console.log(arg.length)
  return arg;
}
identity4<number>([1,2])

const identity5 = <Ts>(arg: Array<Ts>): Ts[] => {
  console.log(arg.length)
  return arg;
}

identity5<number>([3,4])



interface identity6T {
  <T>(arg: T): T;
}

const identity6:identity6T = <T>(arg: T): T =>{
  return arg;
}


interface identity7T<T> {
  <T>(arg: T): T;
}

const identity7:identity7T<number> = <T>(arg: T): T =>{
  return arg;
}

 

class identity8<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
  constructor(data:T){
    this.zeroValue = data
  }
}

new identity8<number>(2)