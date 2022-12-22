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
 */
// 层序遍历取每层最后一个值
 var rightSideView = function(root) {
    if(!root) return [] //边界条件
    let queue = [root]
    let res = []
    while(queue.length){
        let size = queue.length;
        let temArr = []
        while(size--){
            //队头出队
            let tem = queue.shift() 
            // 或者直接把最后一个放入resif (i == (size - 1)) result.push_back(node->val); // 将每一层的最后元素放入result数组中
            temArr.push(tem.val)
            if(tem.left) queue.push(tem.left)
            if(tem.right) queue.push(tem.right)
        }
        res.push(temArr)
    }
    return res.map(item=>item[item.length-1])
};