/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。
如果树中有不止一个众数，可以按 任意顺序 返回。
 */
//方法一：暴力先遍历树节点，用对象统计每个数字的次数，然后排序过滤再返回
 var findMode = function(root) {
    let queue = [root]
    let obj = {} 
    while(queue.length){  //遍历树，统计节点出现次数
        let tem = queue.shift()
        obj[tem.val] = (obj[tem.val]||0) + 1
        tem.left&&queue.push(tem.left)
        tem.right&&queue.push(tem.right) 
    }
    let arr = Object.entries(obj)  //转为数组
    arr.sort((a,b)=>b[1]-a[1])  //排序
    return arr.filter(item=>item[1]==arr[0][1]).map(item2=>item2[0])
};

// 递归法，中序遍历，遍历二叉搜索树就等于遍历有序数组，只用一趟循环就可以完成
var findMode = function(root) {
    let cur = 0,count=0,maxCount=0,res=[];  //初始化变量
    // 中序遍历
    function inorder(root){
        if(!root) return 
        inorder(root.left)
        // 中，处理逻辑
        if(root.val==cur){ //如果当前节点值之前遍历过，就把count++
            count++
        }else{  //不等于，就更新cur当前值和count
            cur = root.val
            count=1   //置为1
        }
        // 如果数量等于最大数量就收集结果
        if(count==maxCount) {  
            res.push(root.val)
        }
        // 如果数量大于最大数量，那么更新最大数量，并清空之前收集的结果
        if(count>maxCount){
            maxCount=count
            res=[root.val]
        }    
        inorder(root.right)
    }
    inorder(root)
    return res
};