let arr = [1, [2, [3, 4, 5]]];

function myFlat(arr){
    //边界条件,不是数组就直接返回
    if(!Array.isArray(arr)) return arr;
    //
    let newArr = [];
    arr.forEach(item=>{
       //如果是数组就递归打平 
        if(Array.isArray(item)){
            // myFlat打平数组
            newArr = newArr.concat(myFlat(item))
        }else{
            newArr.push(item)
        }
    }
    )
    return newArr
}

let test = myFlat(arr)
console.log(test);