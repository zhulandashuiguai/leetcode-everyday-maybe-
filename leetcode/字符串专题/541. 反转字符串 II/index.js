/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    function reverse(s,left,right){
        while(left<right){   
            let tem = s[left]
            s[left] = s[right]
            s[right] = tem
            left++
            right--
        }
    }
    s = s.split(''); //需要转换成数组，字符串不行
    for(let i = 0;i<s.length; i+=2*k ){
        // left为i,right为右索引,i+k没有超出s的范围就使用i+k，超出就翻转剩余全部
       let left = i,right = i+k<=s.length-1? i+k:s.length;
       reverse(s,left,right-1)    
    }
    return s.join('')
};