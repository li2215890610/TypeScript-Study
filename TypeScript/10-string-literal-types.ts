type ChinaName = '杨';
type AmericaName = 'jack';
type Korea = '朴';

type Composite = ChinaName | AmericaName | Korea;

const personName = (name: Composite = '杨'):string =>{
  return name
}

personName('朴')




type CompositeName = '杨' | 'jack' | '朴';

const personName1 = (name: CompositeName = '杨'):string =>{
  return name
}

personName1('jack')
