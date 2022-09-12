let arr = [2,4,5,6,7,8,12,35,57,65,68] 

function BinarySerach (arr,target) {
  // low,high两个指针指向头和尾
  let low = 0,high=arr.length-1
  while(low<=high){
    let mid = Math.floor((low+high)/2)
    if(arr[mid]==target){
      // 如果相等就直接返回
      return mid
    }else if(arr[mid]>target){
      // 如果当前大于目标值说明在左边
      high=mid-1
    }else{
      // 当前小于目标值说明在右边
      low=mid+1
    }  
  }
  // 未满足以上条件则表明查找失败
  return -1
}
console.log(
BinarySerach(arr,2)
);