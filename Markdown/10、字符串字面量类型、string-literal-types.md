
## 字符串字面量类型

字符串字面量类型用来 **约束取值只能是定义的某几个字符串中的一个**。

#### 简单的例子

```
type ChinaName = '杨';
type AmericaName = 'jack';
type Korea = '朴';

type Composite = ChinaName | AmericaName | Korea;

const personName = (name: Composite = '杨'):string =>{
  return name
}

personName('朴')
```
上面的代码略显啰嗦、修改如下
```
type CompositeName = '杨' | 'jack' | '朴';

const personName1 = (name: CompositeName = '杨'):string =>{
  return name
}

personName1('jack')
```

**类型别名与字符串字面量类型都是使用 type 进行定义**