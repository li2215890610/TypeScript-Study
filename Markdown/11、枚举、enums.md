## 枚举

枚举（Enum）类型用于 **取值被限定在一定范围内的场景** ，比如一周只能有七天，颜色限定为红黄绿蓝青蓝紫。TypeScript支持数字的和基于字符串的枚举，和Object-C,一个球样，理解为常量就可以

---

#### 数字枚举
```
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
```
如果你设置了Up为1，Down、Left、Right 会递增.
我们可以不初始化Up
```
enum Direction {
    Up,
    Down,
    Left,
    Right
}
```
不初始化Up的话，会成为从0开始，然后递增


使用枚举很简单：通过枚举的属性来访问枚举常量，访问枚举类型：
```
enum Response1 {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Response1): void {
  // ...
	console.log(recipient,message)
}

respond("Princess Caroline", Response1.Yes)
```