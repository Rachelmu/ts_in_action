// 类型推断
let a = 1
let b = [1, null]

// 上下文类型推断
window.onkeydown = (evwnt) =>{
    console.log(evwnt)
}

// 类型断言
interface Foo {
    bar: number
}
// let foo = {} as Foo
// foo.bar = 1
let foo: Foo ={
    bar: 1
}

/**
 *  X 兼容 Y：X（目标类型） = Y（源类型）
 */
let s: sting = 'a'
s = null

// 接口兼容性
interface X {
    a: any;
    b: any;
}

interface Y {
    a: any;
    b: any;
    c: any;
}
let x:X = { a: 1, b: 2}
let y:Y = { a: 1, b: 2, c: 3 }

x = y
// y = x

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler){
    return handler
}

// 1)参数个数
let handler1 = (a:number) => {} 
hof(handler1)
let handler2 = (a:number, b:number, c:number) => {}
// handler2()

// 可选参数和剩余参数
let advA = (p1:number, p2: number) => {}
let advB = (p1?:number, p2?:number) => {}
let advC = (...agrs:number[]) => {}
// 固定参数可以兼容可选参数和剩余参数的
// 可选参数是不兼容固定参数和可选参数的
// 剩余参数可以兼容固定参数和可选参数

// 2)参数类型
let handler3 = (a:string) => {}
// hof(handler3)

interface Point3D {
    x:number;
    y:number;
    z:number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d
// p2d = p3d

// 3）返回值类型
let advF = () => ({name: 'Alice'});
let advG = () => ({name: 'Alice', location: 'Beijing'});

// 函数重载
function overload(a:number, b:number): number;
function overload(a:string, b:string): string;
function overload(a:any, b:any): any{}

// 枚举兼容性
enum Fruit{ Apple, Banana }
enum Color{ Red, Yellow }

let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// 枚举之间完全不兼容
// let color: Color.Red = Fruit.Apple

// 类兼容性
// 静态成员与构造函数不参与比较
// 私有成员只有父类跟子类是相互兼容的
class A {
    constructor(p:number, q:number){}
    id:number = 1
    // private name:string = ''
}
class B{
    static s =1
    constructor(p: number){}
    id: number = 2
}
let aa = new A(1,2);
let bb = new B(1);

class C extends A{}
// let cc = new C(1,2)


// 泛型兼容性
// 类型成员T在泛型中使用的时候 才会影响泛型兼容性
interface Empty<T>{
    value: T
}
// let obj1 : Empty<number> = {};
// let obj2 : Empty<string> = {};
// obj1 = obj2

let advlog1 = <T>(x: T): T => {
    console.log('x')
    return x
}

let advlog2 = <U>(y: U): U => {
    console.log('y')
    return y
}
advlog1 = advlog2

// 口诀
// 结构之间兼容：成员少的兼容成员多的
// 函数之间兼容：参数多的兼容参数少的