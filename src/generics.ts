// 泛型好处
// 函数和类可以轻松地支持多种类型，增强程序的扩展性
// 不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 灵活控制类型之间的约束
function log<T>(value: T): T {
    console.log(value);
    return value;
}

log<string[]>(['a','b'])
log(['a','b'])

// type Log = <T>(velue: T) => T
// let myLog: Log = log

// 泛型接口 约束方法
interface Log {
    <T>(value: T): T
}
// 泛型接口约束其他成员,泛型约束整个接口的时候，在实现的时候必须指定一个类型
interface Log2<T = string> {
    (value: T): T
}
let myLog2: Log2<number> = log
// myLog2('1')

// 泛型类约束
// 泛型不能应用于类的静态成员
class LogClass<T>{
    run(value:T){
        console.log(value)
        return value
    }
}
let log1 = new LogClass<number>()
log1.run(1)
let log2 = new LogClass()
log2.run('1')

// 类型约束
interface Length{
    length: number
}
function log3<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}
log3('1')