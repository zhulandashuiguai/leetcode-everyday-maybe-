/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let dummyHead = new ListNode(0,head) // 定义哑节点
    let cur = dummyHead; //cur指向哑节点
    while(!(cur.next==null || cur.next.next==null)){ //结束条件，当cur.next或者cur.next.next为null时停止
        let temp = cur.next       //暂存cur.next
        let temp2 = cur.next.next.next  //
        cur.next = cur.next.next  
        cur.next.next = temp;
        temp.next = temp2
        cur = cur.next.next
    }
    return dummyHead.next
};