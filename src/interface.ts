// let add1: (x:number, y:number) => number

// interface Add {
//     (x:number, y:number): number
// }

// 类型别名 type
type Add = (x:number, y:number) => number

let add1: Add = (a, b) => a + b

// 混合接口
interface lib {
    ():void;
    version: string,
    doSomething(): void;
}

// 类型断言
let lib: Lib = (() => {}) as lib;
lib.version = '1.0'
lib.doSomething = () => {}

// 函数封装单类
function getLib(){
    let lib: Lib = (() => {}) as lib;
    lib.version = '1.0'
    lib.doSomething = () => {}
    return lib;
}
let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib()