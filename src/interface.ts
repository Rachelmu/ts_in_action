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