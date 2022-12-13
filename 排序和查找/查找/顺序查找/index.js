//顺序查找就是按顺序从头到尾查找
var arr = [1,4,53,6,9,3]
function find(arr,num){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i
    }
  }
  return null //查找失败
}
console.log(find(arr,3)); 

//带哨兵的方式

 