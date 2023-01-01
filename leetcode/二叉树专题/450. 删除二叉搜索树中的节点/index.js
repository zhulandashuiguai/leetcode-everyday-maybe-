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
 * @param {number} key
 * @return {TreeNode}
 */
// 思路：递归法
/**
算法思想
根据二叉搜索树的性质:

如果目标节点大于当前节点值，则去右子树中删除；
如果目标节点小于当前节点值，则去左子树中删除；
如果目标节点就是当前节点，分为以下4种情况：
是叶子节点：直接返回null
其无左子：其右子顶替其位置，删除了该节点；
其无右子：其左子顶替其位置，删除了该节点；
其左右子节点都有：其左子树转移到其右子树的最左节点的左子树上，然后右子树顶替其位置，由此删除了该节点。
 */
 var deleteNode = function(root, key) {
    if(!root) return null
    if(key>root.val) {
        root.right = deleteNode(root.right, key)
        return root
    }
    if(key<root.val){
         root.left = deleteNode(root.left, key)
         return root
    }
    if(key==root.val) {
        if(!root.left&&!root.right) {
            return null
        }
        // 如果删除的节点只有左节点，没有右节点
        if(root.left&&!root.right) {
            return root.left
        }else if(root.right&&!root.left) {
            return root.right
        }else{
            // 如果删除的节点左右节点都有，其左子树转移到其右子树的最左节点的左子树上，然后右子树顶替其位置，由此删除了该节点。
            let cur = root.right
            while(cur.left){
                cur=cur.left
            }
            cur.left=root.left
            return root.right
        }
    }
};