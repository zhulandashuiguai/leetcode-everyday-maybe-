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
 思路：左根右
 */
var inorderTraversal = function(root) {
    if(!root) return []
    let arr =[]
    var fun= (root)=>{   
        if(root){
            fun(root.left)
            arr.push(root.val)
            fun(root.right)
        }
    }
    fun(root)
    return arr
};

/* 迭代法
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
