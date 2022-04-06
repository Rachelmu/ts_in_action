// 数字枚举
enum Role{
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// console.log(Role)

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员
enum Char {
    // constant member 常数项
    a,
    b = Char.a,
    // 会在编译的时候算出结果，以常量的形式
    c = 1 + 3,
    // computed number 计算所得项 需要计算的枚举成员 后边成员必须赋初始值
    d = Math.random(),
    e = '123'.length,
}

// 常量枚举 编译阶段会被移除
const enum Month {
    Jan,
    Feb,
    Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana'}

// 枚举成员相同才能比较
let e : E = 3
let f : F = 3
console.log(e)
let e1: E.a
let e2: E.b
let e3: E.a


let g1: G
let g2: G.a

// 接口
interface List{
    // 只读属性
    readonly id: number,
    name: string;
    // 字符串索引签名
    // [x: string]: any;

    // 可选属性
    age?: number
}
interface Result{
    data: List[]
}
function render(result: Result){
    result.data.forEach((value) => {
        console.log(value.id, value.name)
        if(value.age){
            console.log(value.age)
        }
    })
}
let result = {
    data: [
        {id:1, name: 'A'},
        {id:2, name: 'B'}
    ]
}
render(result)

// as Result类型断严 绕过类型检查  <Result>



