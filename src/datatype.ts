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
tuple.push(2)
console.log(tuple)

// 函数
// let add = (x,y) => x + y

// 对象
let obj: object = {x:1, y:2}

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()

