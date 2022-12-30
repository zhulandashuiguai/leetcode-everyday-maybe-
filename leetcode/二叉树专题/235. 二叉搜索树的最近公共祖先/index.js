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

// 递归法
 var lowestCommonAncestor = function(root, p, q) {
    if(!root) return root
    //大于就向左搜索
    if(root.val>p.val&&root.val>q.val) return  lowestCommonAncestor(root.left,p,q)
    //小于就向右搜索
    if(root.val<p.val&&root.val<q.val) return  lowestCommonAncestor(root.right,p,q)
    //等于就直接返回，这里注意不能写成if(root.val>p.val&&root.val<q.val) 因为无法判断p，q谁大谁小
    return root
};
// 迭代法，超简单，通过大小比较来确定搜索方向，如果大于p,q就向左搜索，小于p，q就向右搜索，在中间就返回
var lowestCommonAncestor = function(root, p, q) {
    while(root){
        if(root.val>p.val&&root.val>q.val){
             root=root.left
        }else if(root.val<p.val&&root.val<q.val){
            root=root.right
        }else{
            return root
        }
    }
};