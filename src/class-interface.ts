interface Human{
    // new(name:string): void
    name: string;
    eat(): void;
}

// 接口只能约束类的公有成员
// 接口不能约束类的构造函数
class Asian implements Human{
    constructor(name: string){
        this.name = name;
    }
    name: string;
    eat(){}
    sleep(){}
}

interface Man extends Human{
    run(): void
}

interface Child{
    cry():void
}

interface Boy extends Man, Child{

}

// 接口的继承可以抽离出可重用的接口
let boy: Boy ={
    name: '',
    run() {},
    eat() {},
    cry() {}
}

class Auto {
    state = 1
    // private state2 = 0
}
interface AutoInterface extends Auto {

}
class C implements AutoInterface {
    state = 1
}

class Bus extends Auto implements AutoInterface {

}

// 接口之间相互继承 extends
// 类之间也可以相互继承
// 接口通过类来实现。但是接口只能约束类的公有成员 implements
// 接口可以抽离出类的成员 extends(public,private,protected)