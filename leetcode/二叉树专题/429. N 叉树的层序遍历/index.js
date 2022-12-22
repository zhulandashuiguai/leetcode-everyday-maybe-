/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
//  给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

//  树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return [] //边界条件
   let queue = [root]
   let res = []
   while(queue.length){
       let size = queue.length;
       let temArr = []
       while(size--){
           //队头出队
           let tem = queue.shift() 
           temArr.push(tem.val)
            // 和层序遍历相同的逻辑，只是处理子节点的方式不同
           if(tem.children){
               tem.children.forEach(item=>{
                   queue.push(item)
               })
           }
           // if(tem.left) queue.push(tem.left)
           // if(tem.right) queue.push(tem.right)
       }
       res.push(temArr)
   }
   return res
};