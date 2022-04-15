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