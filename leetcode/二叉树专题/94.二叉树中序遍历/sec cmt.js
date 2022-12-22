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
 * 迭代法
 思路：栈S;  对每个节点把所有的左节点入栈，然后依次出栈，访问值，并且访问右节点
p= root;
while(p || 栈不空){
    while(p){
        p入栈;
        p = p的左子树;
    }
    p = S.top 出栈;
    访问p;
    p = p的右子树;
}
 */
var inorderTraversal = function(root) {
    if(!root) return []
    let arr =[]
    let stack=[]
    // 注意while条件
    while(root || stack.length){
        while(root){
          // root左节点全部入栈
            stack.push(root)
            root=root.left
        }
        // 出栈访问值
        root = stack.pop()
        arr.push(root.val)
        // 访问右节点 
        root = root.right
    }
    return arr
};
// 迭代写法
var inorderTraversal = function(root) {
    let cur = root;  //定义指针指向根节点
    let stack = [];  //临时栈
    let res = [];    //结果数组
    while(cur!==null || stack.length) {  //当指针不为空，或者栈长度不为0时
        if(cur!==null){       //如果指针不为空，表示当前有节点
            stack.push(cur)   //入栈
            cur=cur.left      //指向左节点
        } else{               //如果为空，表明已经把左节点加完了
            cur = stack.pop();  //弹出节点，让指针指向
            res.push(cur.val)   //处理节点
            cur = cur.right     //让指针指向右节点，左节点访问之后访问右节点
        }
    }
    return res
};