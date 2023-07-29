# 开始

## 安装

`npm install -g typescript ts-node`

## setup

`npm init -y`

编译 ts 文件：`tsc index.ts` 生成 js 文件

编译并执行 ts 文件：`ts-node index.ts`

_可能报错_:`error TS2584: Cannot find name 'console'.`

解决：安装@type/node `pnpm install @types/node --save-dev`

> typescript 作用：通过定义变量类型，帮助我们在编程时检验对变量的操作是否有错误

> 编写代码时可能的错误：

- 对象属性访问错误
- 调用函数是参数输入错误

# 类型

> 什么是类型？

用来描述变量可以拥有的属性和方法。例如声明一个变量为 string，则这个变量拥有 string 的所有属性和方法。

> 为什么要关心类型

1. ts 编译器使用 types 来分析代码中是否有错误

2. 标记变量的类型，有助于理解代码

## 特性

typescript 可以通过类型推论提供类型。TypeScript 编辑器可以通过分析代码，推断出变量和方法的类型，并在输入代码时提供相关的代码提示。

## 类型注释

为变量注释类型后，不能赋值其他类型

> 什么时候需要类型注释？

_个人认为是在类型推论失效时；或者是自动推论的结果有误时手动声明类型_

- 出现 any 类型时（使用函数等）
- 声明变量时不立即赋值

### 函数的类型注释

告诉 ts 函数接受的参数类型和返回值类型

- 函数参数类型 必须声明
- 返回值

  类型推论可以判断函数返回值，但我们仍需要声明返回类型：因为我们很容易在编写函数时出现逻辑错误，忘记或错误返回值

### 对象的类型注释

对象内可以声明多个不同类型的变量

## 类型推论

ts 在没有明确指出类型的地方，类型推论会提供类型。
类型推论发生在：

- 初始化变量和成员（同一行）
- 设置默认参数值
- 决定函数返回值

### 函数的类型推论

尝试推断函数的返回值

### 解构

**用于对象：**

- 可以直接解构
  `const {a} = o；`
- 指定类型
  `const { age }: { age: number } = profile;`
- 属性重命名
  `let {a:newName1,b:newName2}=o`
- 结构嵌套属性

```typescript
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```

**用于函数声明：**

```typescript
type C = { a: string; b?: number };
function f({ a, b }: C): void {}
```

<span style="color:red">ts
只检查类型，不检查逻辑</span>

### 最佳通用类型

当需要从几个表达式中推断类型时候，会使用这些表达式的类型来推断出一个最合适的通用类型。

如果没有找到最佳通用类型的话，我们可以明确指出类型；或者自动推断为联合数组类型

### 联合类型

当变量可能赋值的类型不止一个时，类型推论失效，使用联合类型注释：
`numberAboveZero:number | boolean`

## any 类型

使用`any`为编程阶段不确定类型的变量指定类型。这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。

但是对于这些变量，ts 无法检验到错误，需要认为指定。

## 数组

- 当我们从数组中获取元素时进行类型推断
- 防止我们向数组中添加不兼容的值
- 在使用 map、forEach 等函数时 ts 推断出参数类型
- 可以包含多种类型的元素
  - 使用联合类型

## 元组

表示一个已知元素数量和类型的数组

```typescript
// Declare a tuple type
type Drink = [string, number];
// Initialize it
let x: Drink = ["hello", 10]; // OK
```

当访问一个已知索引的元素，会得到正确的类型,但不怎么使用 😂

## 接口

接口+类->代码重用

接口：规定对象中的属性和类型。

当函数需要接受一个对象做参数时，可以为对象定义一个接口。
```
interface Vehicle {
   name: string;
   year: Date;
   broken: boolean;
   summary(): string;
}
```

**进阶** 

将对对象的操作定义为对象方法后，可以在对象内部操作属性，那么接口可以省略定义其他属性，把对象方法抽出成接口就可以重用。
```
interface Reportable {
  summary(): string;
}
```

🦆：接口只检查传入对象是否有规定的属性，不会限制对象的额外属性；但传入对象字面量就会严格检查，不能有额外属性。

可以把相同返回值类型的对象函数抽象成一个接口，可重用：可以接受任何包含某个函数的对象。

## 类 Class

创建对象的蓝图
```
class Vehicle {
  constructor(public color: string) {}
  
  protected honk(): void {
    console.log('beep');
  }
  private beep(): void {
    console.log('beep');
  }
}
```
继承
```
  class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
      super(color);
    }
  
    private drive(): void {
      console.log('vroom');
    }
  }
```
# 第一个app
面向对象，为每个对象创建一个类

当对象类型不同，但有相同操作时，我们可以将共同具有的属性和方法抽出，定义一个接口，让每个类实现这个抽象类。这样就可以使传入的参数类型一致从而复用代码。

例如User和Company在地图上显示坐标的时候都只需要用到坐标和markerContent()方法。
```
export interface Mappable{
    location:{
        lat:number;
        lng:number;
    };
    markerContent():string;
}
    addMarker(mappable:Mappable):void{
        const marker = new BMapGL.Marker(new BMapGL.Point(mappable.location.lng,mappable.location.lat));
        this.BMap.addOverlay(marker);  
        marker.addEventListener("click",function(){
            alert(mappable.markerContent());
        
        });
    }
```
# 排序app
添加tsconfig.json: `tsc --init`

在`tsconfig.json`文件内设置rootDir和outDir，命令行运行`tsc`命令就会自动读取对应目录下的ts文件，并将js文件输出到指定目录

`tsc -w`每次修改自动编译保存
安装 concurrently nodemon 包，实现修改后自动的编译运行

```
  "start:built": "tsc -w",
  "start:run": "nodemon built/index.js",
  "start": "concurrently npm:start:*"
```

将不同对象里的相同方法逻辑抽象成一个抽象类，不同对象通过继承抽象类，在自己类内部定义自己的具体处理逻辑；

接口是把对象中相同的属性抽出来作为接口，保证实现的对象被都有这些属性
# 分析csv文件
1. 不要文本硬编码
- 使用enum：可选值是一个固定集合
- 提取抽象数据源获取的逻辑
  - 处理获取的数据，为它定义类型