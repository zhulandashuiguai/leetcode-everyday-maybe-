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
 * @return {number}
 */
//  思路：层序遍历每层记录数量加起来即可
 var countNodes = function(root) {
    if(!root) return [] //边界条件
    let queue = [root]
    let num =0
    while(queue.length){
        let size = queue.length;
        num+=queue.length
        while(size--){
            //队头出队
            let tem = queue.shift() 
            if(tem.left) queue.push(tem.left)
            if(tem.right) queue.push(tem.right)
        }
    }
    return num
};

// 递归写法： 二叉树的节点数量就等于左节点的数量+右节点的数量+1
var countNodes = function(root) {
    if(!root) return 0
    let left = countNodes(root.left)
    let right = countNodes(root.right)
    return left+right+1
};

// 利用完全二叉树的特性来解决
var countNodes = function(root) {
    if(!root) return 0   //空节点就是0
    let left = root.left   //左子树
    let right = root.right  //右子树
    let leftDepth = 0;   //左子树深度
    let rightDepth = 0;  //右子树深度
    while(left){         //算出左子树深度
        leftDepth++
        left=left.left
    }
    while(right){     //算出右子树深度
        rightDepth++
        right = right.right
    }
    // 如果左侧的深度等于右侧深度，表面是满二叉树，利用公式算出数量
    if(leftDepth==rightDepth) return 2**(leftDepth+1)-1
    // 如果不等，就递归算出左右节点分别的个数，然后相加
    let leftNum = countNodes(root.left)   
    let rightNum = countNodes(root.right)
    // 总的个数就是左子树+右子树+1
    return leftNum+rightNum+1   
};