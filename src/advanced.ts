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
let foo = {} as Foo
foo.bar = 1