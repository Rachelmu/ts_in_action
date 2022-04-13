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