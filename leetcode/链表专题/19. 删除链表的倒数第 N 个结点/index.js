/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 思路，快慢指针，快指针先走n步，然后快慢指针一起移动直到fast.next==null，此时slow.next就是待删除的元素，直接删除即可
 var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0,head) //定义哑节点
    let fast = dummyHead; 
    let slow = dummyHead;
    while(n&&fast!==null){ //快指针先出发
        fast=fast.next
        n--
    }
    while(fast.next!==null){  //当fast.next==null就停下
        fast=fast.next
        slow=slow.next
    }
    slow.next=slow.next.next //删除
    return dummyHead.next //返回头节点
};