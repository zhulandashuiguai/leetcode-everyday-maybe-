/**
 * @param {string[]} words
 * @return {string[]}
 *  
 * 给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。
输入：words = ["bella","label","roller"]
输出：["e","l","l"]
 */

// 方法一：用一个对象来记录每个字符在所有单词中出现的次数的最小值
//最后在打印对应次数的字符即可
 var commonChars = function(words) {
    let str = words[0]  
    let obj = {}
    let res =[]
    str.split('').forEach(ch => { 
    let min =Number.MAX_VALUE
        words.forEach((word)=>{
            let num = word.split(ch).length -1; //字符在这个单词中出现的次数
            min = num < min ? num : min;
            obj[ch] = min;  
        })
    })
    Object.keys(obj).forEach(item=>{
        for(let i =0;i<obj[item];i++){
            res.push(item)
        }
    })
    return res
};