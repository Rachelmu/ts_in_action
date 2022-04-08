// 类成员的属性都是实例属性，方法都是实例方法
class Dog{
    // private私有成员熟悉，这个类既不能实例化，也不能被继承
    constructor(name: string){
        this.name = name
    }
    name: string
    run() {}
    // 私有成员 只能类的本身调用
    private pri(){}

    // 受保护成员，只能在类或者子类中访问
    protected pro(){}
}

// name属性只在实例上不在原型上，实例的属性必须具有初始值，或者在构造函数中被初始化
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog) 
// dog.pro()

// 类的继承
class Husky extends Dog{
    constructor(name:string, color:sting){
        super(name)
        this.color = color;
    }
    color: string
}