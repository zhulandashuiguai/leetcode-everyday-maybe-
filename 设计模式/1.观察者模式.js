 //被观察的目标
 class Subject {
    constructor(){
        //收集所有 观察者的数组
        this.observers = []
    }

   //添加观察者的方法
    add(observer){
        this.observers.push(observer)
    } 
    //notify方法通知观察者更新
    notify(){
        this.observers.forEach(item=>{
            console.log(item);
            item.update()
        })
    }
    //remove删除观察者
    remove(observer){
        this.observers=this.observers.filter(item=>item !== observer)
    } 

 }

 //观察者
 class Observer{
    constructor(name){
        this.name = name;
    }
    update(){
        console.log('更新',this.name);
    }

 }

let subject = new Subject()
let observer1 = new Observer('ob1')
let observer2 = new Observer('ob2')
subject.add(observer1)
subject.add(observer2)
subject.notify()

