/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * 问题：
给你一个链表的头节点 head ，判断链表中是否有环。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。

解题思路：快慢指针，如果有环，则两个指针必然会相遇
注意while的循环条件:while(fast!==null&& fast.next!=null)
初次写的写成while(slow!==null&&fast!==null)最后报错  因为fast.next有可能是null所以下面的fast.next.next就会报错
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null || head.next == null) return false
    let slow = head
    let fast = head.next
    while (fast !== null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == null || slow == null) return false
        if (slow == fast) { return true }
    }
    return false
};