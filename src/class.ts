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


// 抽象类
// 只能被继承 不能被实例化的类
// 不指定方法的实现,抽象方法，好处：子类有明确的实现，没有必要在父类实现，可以抽离出事物的共性，有利于代码的复用。还可以实现多态
abstract class Animal{
    eat(){
        console.log('eat')
    }
    abstract sleep(): void
}
class Cat extends Animal{
    constructor(name: string){
        super()
        this.name =name
    }
    name: string
    run() {}
    sleep() {
        console.log('cat sleep')
    }
}
let cat = new Cat('miaomiao')
cat.eat()

// 多态
class CatA extends Animal{
    sleep() {
        console.log('Cat sleep')
    }
}
let cat1 = new CatA()

let animals: Animal[] = [cat, cat1]
animals.forEach(i => {
    i.sleep()
})

// this
class WorkFlow {
    step1(){
        return this;
    }
    step2(){
        return this;
    }
}
new WorkFlow().step1().step2()

class MyFlow extends WorkFlow{
    next(){
        return this
    }
}
new MyFlow().next().step1().next().step2()