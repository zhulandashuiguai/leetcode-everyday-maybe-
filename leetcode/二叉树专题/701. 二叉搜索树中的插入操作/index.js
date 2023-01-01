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
 * @param {number} val
 * @return {TreeNode}
 */
// 插入的节点必在叶子节点，所以只需要判断左右和终止条件即可
 var insertIntoBST = function(root, val) {
    //如果root为空，就表示这个位置是用来插入节点的
    if(root==null){
        return new TreeNode(val)
    }
    if(val>root.val)  root.right = insertIntoBST(root.right,val)
    if(val<root.val)  root.left = insertIntoBST(root.left,val)
    return root
};

// 迭代的思路就是用两个指针，一个指向父节点，一个指向当前节点，当前节点去寻找待插入的位置，即为null为止
var insertIntoBST = function(root, val) {
    if (root === null) {
       root = new TreeNode(val);
   } else {
       let parent = new TreeNode(0); //父节点
       let cur = root;  //当前节点
       while (cur) {   // cur寻找插入位置，直到为null
           parent = cur;
           if (cur.val > val)
               cur = cur.left;
           else
               cur = cur.right;
       }
       let node = new TreeNode(val);
       if (parent.val > val)
           parent.left = node;
       else
           parent.right = node;
   }
   return root;
};