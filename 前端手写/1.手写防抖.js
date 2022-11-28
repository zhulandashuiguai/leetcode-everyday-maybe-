// // 函数防抖的实现
// function debounce(fn, wait) {
//     let timer = null;
//     return function() {
//       let context = this,
//           args = arguments;
//       // 如果此时存在定时器的话，则取消之前的定时器重新记时
//       if (timer) {
//         clearTimeout(timer);
//         timer = null;
//       }
//       // 设置定时器，使事件间隔指定事件后执行
//       timer = setTimeout(() => {
//         fn.apply(context, args);
//       }, wait);
//     };
//   }

function fn() {
    console.log('test');
}

function debounce(fn,delay){
    let timer = null;
    return function(){
       //考虑到定时器的this指向window，所以要改变this指向
       const context = this;
       //考虑到函数有参数的情况
       const args = arguments; 
       clearTimeout(timer)
       timer = setTimeout(function(){
            fn.call(context,args)
        },delay)
    }
}

let test = debounce(fn,3000);
test()
test()
test()