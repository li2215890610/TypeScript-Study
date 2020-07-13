function sum(x:number, y:number):number {
  return x + y;
}


sum(1,3,4)
sum(1)



const sumStr = (s:string,d:string):string => {
    return s+d
}

sumStr('2','4')


const sumStr1 = (s:string,d?:string):string => {
  if(d) return `${s}${d}`
  return s
}

sumStr1('2','4')


const reverse = (x: number | string): number | string => {
  if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
  }
}