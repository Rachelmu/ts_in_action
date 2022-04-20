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