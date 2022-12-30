/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 本题采用后序遍历
 var lowestCommonAncestor = function(root, p, q) {
    function traversal(root){
        if(!root) return null  
        if(root==p||root==q) return root  //边界条件，遇到目标节点就返回
        let left = traversal(root.left)   //左边子树
        let right = traversal(root.right) //右边子树
        // 中
        //如果左右都不为空，那么返回这个节点，这个节点就是公共父亲 
        if(left&&right) return root   
        if(!left&&right){   //如果一边为空一边不为空，那么返回不为空的那一边
            return right
        }else if(!right&&left) {
            return left
        }else{   //都为空就返回null
            return null 
        }
    }
    return traversal(root)
};