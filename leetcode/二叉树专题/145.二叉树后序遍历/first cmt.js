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
 常规做法：递归左右根
 */
var postorderTraversal = function(root) {
    if(!root) return []
    let arr=[]
    var fun = (root)=>{
        if(root){
            fun(root.left)
            fun(root.right)
            arr.push(root.val)
        }
    }
    fun(root)
    return arr
};  
/*
迭代：可以参照前序遍历根左右的做法：调整push顺序即可
前序遍历是根左右，后续遍历左右根，迭代的时候，只需要把push顺序改成先push左再push右，这时就是根右左的顺序，然后再把整个结果数组颠倒就是左右根的顺序
 */
//暴力迭代
var postorderTraversal = function(root) {
    if(!root) return []
    let arr=[]
    let stack=[root]
    while(stack.length){
       let tem = stack.pop()
       //从数组头部插入
       arr.unshift(tem.val)  //这里有两种做法，一种是从头插入，一种是直接把数组反转后return
       //先push左节点
       if(tem.left) stack.push(tem.left)
       if(tem.right) stack.push(tem.right)
    }
    return arr
};  
// 递归法
var searchBST = function(root, val) {
    if(!root) return null
    if(root.val==val) return root
    // 注意点：递归函数是有返回值的，需要return或者定义变量来接收
    if(root.val>val) return searchBST(root.left,val)
    if(root.val<val) return searchBST(root.right,val)
};

// 利用搜索树的特性来迭代
var searchBST = function(root, val) {
    while(root){
        if(root.val==val) return root
        if(root.val>val) root=root.left
        if(root&&root.val<val) root=root.right
    }
    return null
};