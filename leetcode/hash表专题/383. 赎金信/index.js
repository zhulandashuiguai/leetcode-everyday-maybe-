/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 
 *  给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
如果可以，返回 true ；否则返回 false 。
magazine 中的每个字符只能在 ransomNote 中使用一次
输入：ransomNote = "aa", magazine = "aab"
输出：true
 */
 var canConstruct = function(ransomNote, magazine) {
    let sMap = new Map()
    for(let ch of ransomNote){
        sMap.set(ch,(sMap.get(ch)||0)+1)
    }
    for(let  ch of magazine){
        if(sMap.has(ch)){
            sMap.set(ch,sMap.get(ch)-1)
        }
    }
    for(let ch of sMap){
        if(sMap.get(ch[0])>=1){
        return false
        }
    }
    return true
};