// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'
// str = 123

// 数组
let arr1: number[] = [1,2,4]
let arr2: Array<number> = [1,2,3]
// 联合类型
let arr3: Array<number | string> = [1,'2',4]

// 元组 限定数组的元素类型和个数
let tuple: [number, string] = [0, '1']
// tuple.push(2)
// console.log(tuple)
// tuple[2]
// 能添加 不能访问 不建议使用

// 函数
// 通常返回值类型可以省略
let add = (x:number,y:number) : number => x + y
let compute: (x:number, y:number) => number
compute = (a, b) => a+b


// 对象
// let obj: object = {x:1, y:2}
let obj:{x: number, y:number} = {x: 1, y:2}
obj.x = 3


// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)


// undefined, null
let un: undefined = undefined
let nu: null = null


// void
// 没有任何返回值的类型
let noReturn = () => {}

// any 与js一样
let x
x = 1
x = []


// never
let error = () => {
    throw new Error('error')
}

let endless = () => {
    while(true){
        
    }
}
