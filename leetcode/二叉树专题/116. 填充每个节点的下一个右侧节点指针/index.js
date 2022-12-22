/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
初始状态下，所有 next 指针都被设置为 NULL。

 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if(!root) return null //边界条件
   let queue = [root]
   let res = []
   while(queue.length){
       let size = queue.length;
       let temArr = []  
       while(size--){
           //队头出队
           let tem = queue.shift() 
           temArr.push(tem)
           if(tem.left) queue.push(tem.left)
           if(tem.right) queue.push(tem.right)
       }
       while(temArr.length>1){
               let tem = temArr.shift()
               tem.next = temArr[0]
       }
   }
   return root
};

// 优化
/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if(!root) return null //边界条件
   let queue = [root]
   while(queue.length){
       let size = queue.length;
       while(size--){
           //队头出队
           let tem = queue.shift()  
           if(size>=1) tem.next = queue[0] //如果队列里元素大于等于1就
           if(tem.left) queue.push(tem.left)
           if(tem.right) queue.push(tem.right)
       }
   }
   return root
};