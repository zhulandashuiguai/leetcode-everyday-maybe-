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
 * @return {number[][]}
 题目：给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
示例：
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
思路：利用一个队列，根节点入队，循环出队，出队访问节点的值，如果节点存在左右节点则依次入队,循环上述即可。 
 */
var levelOrder = function(root) {
    if(!root) return []
    //定义队列
    let stack=[root]
    //收集结果
    let result = []
    //循环
    while(stack.length){
        let count = stack.length
        let temArray = []//临时数组收集每层结果
        while(count--){
            //出队
            let temRoot=stack.shift()
            temArray.push(temRoot.val)
            if(temRoot.left) stack.push(temRoot.left)
            if(temRoot.right) stack.push(temRoot.right)
        }
         result.push(temArray)
    }
    return result
};

// 
var levelOrder = function(root) {
    if(!root) return [] //边界条件
    let queue = [root]
    let res = []
    while(queue.length){
        let size = queue.length;
        let temArr = []
        while(size--){
            //队头出队
            let tem = queue.shift() 
            temArr.push(tem.val)
            if(tem.left) queue.push(tem.left)
            if(tem.right) queue.push(tem.right)
        }
        res.push(temArr)
    }
    return res
};