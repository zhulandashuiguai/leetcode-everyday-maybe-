var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};

function deepClone(obj){
   //边界条件 
    if(!obj || typeof obj !== 'object') return obj;
   //是数组还是对象？ 
    let newObj = Array.isArray(obj) ? [] : {};
    for(let key in obj) {
        // 因为in方法会遍历到对象原型链上的属性，所以要使用hasOwnProperty()方法来判断自身的属性
        if(obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] == 'object'? deepClone(obj[key]) : obj[key];
        }
    } 
   //返回新对象，如果不是对象， 
    return newObj
}

let obj2 = deepClone(obj1);
obj2.b = 2;
console.log(obj1,obj2);