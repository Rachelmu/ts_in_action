// 定义函数
function addFn(x:number, y:number){
    return x+y
}

// let addFn1(x:number, y:number) => number

// 类型别名
// type addFn2(x:number, y:number) => number

interface addFn3{
    (x:number, y:number): number
}

// ts形参与实参必须一一对应
addFn(1,2)

// 可选参数, 可选参数必须位于必选参数之后
function addFn5(x:number, y?:number){
    return y? x+y :x
}

// 默认值
function addFn6(x:number, y = 0, z:number, q = 1){
    return x+y+z+q
}
console.log(addFn6(1,undefined,3))

// 剩余参数 数组存在
function addFn7(x:number, ...rest:number[]){
    return x+ rest.reduce((pre,cur) => pre + cur)
}
console.log(addFn7(1,13,4,45))


// 函数重载
function addFn8(...rest:number[]): number;
function addFn8(...rest:string[]): number;
function addFn8(...rest:any[]):any{
    let first = rest[0];
    if(typeof first === 'string'){
        return rest.join('')
    }
    if(typeof first === 'number'){
        return rest.reduce((pre,cur) => pre + cur)
    }
}
console.log(addFn8(1,2,3))
console.log(addFn8('a','b','c'))