## 接口
TypeScript的核心原则之一是对值所具有的结构进行类型检查,TypeScript接口的作用就是为这些 类型命名和为你的代码进行检查

---

#### 初识接口
```
interface LabelledValue {
  label: string;
}
const printLabel = (labelledObj: LabelledValue)=> {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```
```LabelledValue```接口定义变量的类型，只要传入的```labelledObj``` 满足```LabelledValue```里面变量的类型要求就是可以的

#### [只读属性](http://note.youdao.com/s/YucINwf4)

#### 接口继承接口
接口和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

类实现接口需要用到 implements 关键字

```
interface Cat {
  alert(value): void;
}
//接口继承接口
interface Dog extends Cat {
  lightOn(): void;
  lightOff(): void;
}
// 类实现接口
class Animal implements Dog{
  private state: any;
  protected start: boolean;

  constructor(state) {
    this.state = state;
    console.log(this.state)
  }

  lightOff(){

  }
  lightOn(){

  }
  alert(value){
    console.log(value)
  }
}

class Senior extends Animal{
    
}


new Senior(1).alert(1)
```

LightableAlarm 继承了 Alarm，除了拥有 alert 方法之外，还拥有两个新方法 lightOn 和 lightOff。


#### 接口继承类
当接口继承了一个类时，它会继承类的成员但不包括其实现（ps：继承类的方法属性，不继承方法里面的代码），继承接口必须要实现接口的方法


```
class Control {
  private state: any;
  protected start: boolean
  constructor(state) {
    this.state = state;
    console.log(this.state)
  }
}
//接口继承类
interface SelectableControl extends Control {
  //alert(): void;
  select(): void;
}

// 类实现接口
class Button extends Control implements SelectableControl {
  constructor(state) {
    super(state)
  }
  select() {
    this.start = true;
    console.log(this.start)
  }
}

class TextBox extends Button {
  constructor(state) {
    super(state)
  }
}

let TextBoxs = new TextBox(111)
TextBoxs.select()
```
