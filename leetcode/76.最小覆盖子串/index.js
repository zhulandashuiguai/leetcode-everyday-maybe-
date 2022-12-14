/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 思路：滑动窗口
 var minWindow = function(s, t) {
    if(s.length==0 || s.length < t.length) return ''; //边界条件处理
    let left =0,right=0;       //定义左右指针
    let tMap = new Map();       //map统计字符出现的次数
    let sMap = new Map();
    let res = s;                //结果
    for(let c of t){        //统计t字符的次数
        tMap.set(c,tMap.get(c) ? tMap.get(c)+1 : 1 )
    }

    while(right<s.length){ //遍历   
        if(tMap.has(s[right])){   //如果当前这个字符就是t中的字符，添加到sMap中统计子串的字符频数
            sMap.set(s[right],sMap.get(s[right]) ? sMap.get(s[right])+1 : 1 )
        }
        while(isMatch(sMap,tMap)){   //当子串匹配成功
            res = res.length<right-left+1 ? res : s.slice(left,right+1);  //更新结果
            if(sMap.get(s[left])!==0) sMap.set(s[left],sMap.get(s[left])-1);// 开始滑动窗口，减去左边的字符
            left++  //滑动窗口
            }
        right++ //
    }
    
    if(isMatch(sMap,tMap)==false&&left==0) { //如果最后遍历完，还是不符合，并且left为0表示res没变过
        res =''
    } 
    return res
};
//判断是否匹配的辅助函数
function isMatch(sMap,tMap){
    let flag = true;
    for(let ch of tMap){
        if(sMap.get(ch[0])==undefined || sMap.get(ch[0])<tMap.get(ch[0])){
                return flag=false
        }
    }
    return flag
}   

// console.log(minWindow("abc","cba")); 
// console.log(minWindow("ADOBECODEBANC","ABC")); 
console.log(minWindow("babb","baba")); 