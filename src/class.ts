// 类成员的属性都是实例属性，方法都是实例方法
class Dog{
    // private私有成员熟悉，这个类既不能实例化，也不能被继承
    // protected不能被实例化，只能被继承
    constructor(name: string){
        this.name = name
    }
    name: string
    run() {}
    // 私有成员 只能类的本身调用
    private pri(){}

    // 受保护成员，只能在类或者子类中访问
    protected pro(){}

    // 只读属性.不能更改，要初始化
    readonly legs: number = 4

    // 类的静态成员，只能通过类名来调用，可以继承，而不能通过子类来调用
    static food: string = 'bones'
    
}

// name属性只在实例上不在原型上，实例的属性必须具有初始值，或者在构造函数中被初始化
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog) 
// dog.pro()
console.log(Dog.food)


// 类的继承
class Husky extends Dog{
    constructor(name:string, color:sting){
        super(name)
        this.color = color;

        // 子类中受保护成员可以调用
        this.pro()

    }
    color: string
}