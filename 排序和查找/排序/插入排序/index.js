let arr = [2,1,4,5,7,9,3,8,6]

for(let i=1;i<arr.length;i++ ){ //从第二个元素开始遍历
    if(arr[i]<arr[i-1]){  //如果这个元素比前面的元素小，就进行操作
      let tem = arr[i]  //保存这个变量的值
      //j索引从i的前面开始，只要j>=0并且arr[j]大于保存的值，就把这个值往后移
      for(var j=i-1;j>=0&&arr[j]>tem;j--){
        arr[j+1]=arr[j]
      }
      // 往后移之后就把保存的值插入当前
      arr[j+1] = tem 
    }
}
console.log(arr);