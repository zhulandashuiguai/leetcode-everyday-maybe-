/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root) return 0
    let stack = [root]
    let depth = 0 //深度
    while (stack.length) {
        let count = stack.length
            //每循环一层就让深度加1，可以大大优化内存
        depth++
        while (count--) {
            let temRoot = stack.shift()
            // 所有字节点入队
            for(let i =0;i<temRoot.children.length;i++){
                stack.push(temRoot.children[i])
            }
        }
    }
    return depth
};
// 递归法
var maxDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    for (let i = 0; i < root.children.length; i++) {
        depth = Math.max(depth, maxDepth(root.children[i]));
    }
    return depth + 1;
};
// 
var maxDepth = function(root) {
    if(!root) return 0
    let depth = 0
    for(let node of root.children) {
        depth = Math.max(depth, maxDepth(node))
    }
    return depth + 1
}