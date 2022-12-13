// const pro = new Promise((resolve,reject)=>{
//     console.log(1);
//     setTimeout(()=>{
//         console.log("start");
//         resolve("success");
//         console.log('end');
//     },0)
//     console.log('2');
// })

// pro.then(res=>{
//     console.log(res);
// })

// console.log(4);/

// let str = 'my name is tom'
// function count(string){
//     let arr = str.split(' ');
//     return arr.length
// }

// console.log(count(str));

// let path = {
//     dir:{
//         subdir1:'',
//         subdir2:filePath.ext
//     }
// }
    
// function filePath(txt){
//     let fpath = '/'
//     for(let key in path){
//         fpath = fpath+path
//         if(typeof path[key] === 'object' ){
//             //继续递归对象，拼接路径
//         }else{
//             //判断是不是要找的那个文件，是就返回路径
//             //不是就递归找下一个文件
//         }
//     }     
// }

// function searchMaxTools( tools ,  toolsCount ) {
//     let toolMax = Math.max(...tools);
//     let toolsCountMax = Math.max(...toolsCount)
//     return [toolMax,toolsCountMax]
// }

// console.log( searchMaxTools( [5,3,1,8],[7,6,3,10] ));
// console.log(Math.max(...[1,2,4]));

// let str = '{}';

// function isValid(str){
//     let list =[];
//     for(let val of str ){
//         console.log(val);
//         if(val == '{' || val =='[' || val =='(') {
//             list.push(val)
//         }else {
//             let last = list[list.length-1];
//             if(last == '{' && val == '}' || last == '[' && val == ']'  || last == '(' && val == ')' ){
//                 list.pop()
//             }
//         }
//     }
//     return list.length==0
// }
// console.log(isValid(str));

// console.log('5'>'10');
// let fn = function(){}
// Function.prototype.b = 2;
// const obj = new fn();
// console.log(obj.b,Object.getPrototypeOf(obj));
// var key =1;
// var obj = {
//     key:2,
//     fn:function(){
//         var key = 3;
//         console.log(this.key);
//     },
//     fn2: ()=>{
//         console.log(this.key);
//     }
// }
// obj.fn();
// obj.fn2()
// var tem =new obj.fn()

// const a = {key:1}
// function fn1(obj){
//     obj = {key:2}
// }
// fn1(a)
// console.log(a);

class test {
    fn() {
       console.log('this',this);
    }
}

let cls = new test()
cls.fn()
let ano = cls.fn;
ano()