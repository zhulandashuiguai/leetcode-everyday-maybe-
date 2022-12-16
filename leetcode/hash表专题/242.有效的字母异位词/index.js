/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length!==t.length) return false
    function check(str){
        let map = new Map()
        for(let ch of str){
            map.set(ch,map.get(ch) ? map.get(ch)+1 : 1)
        }
        return map
    }
    let sMap = check(s)
    let tMap = check(t)
    let flag = true
    for(let item of sMap){
        if(item[1]!==tMap.get(item[0])){
            flag = false
        }
    }
    return flag
};

// 方法二：直接把字符排序后合并比较是否相同
var isAnagram = function(s, t) {
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
 };