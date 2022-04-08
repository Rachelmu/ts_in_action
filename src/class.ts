// 类成员的属性都是实例属性，方法都是实例方法
class Dog{
    constructor(name: string){
        this.name = name
    }
    name: string
    run() {}
}

// name属性只在实例上不在原型上，实例的属性必须具有初始值，或者在构造函数中被初始化
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog) 

// 类的继承