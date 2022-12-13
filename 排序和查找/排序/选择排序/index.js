let arr = [2,5,4,1,7,6,9,8,3]

for(let i = 0;i<arr.length-1;i++){
  for(let j = i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
    let tem = arr[i]
    arr[i]=arr[j]
    arr[j]=tem
    }
  }
}
console.log(arr);