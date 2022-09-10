/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  题目：给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 思路：利用指针，一个指向前面一个指向后面一个指向当前
//循环整个链表，每次循环都让当前的指针指向前面，然后再让指针分别后移一位，结束即可反转
/**
 * @param {ListNode} head
 1->2->3->4->null
 null<-1<-2<-3<-4
 4->3->2->1->null
 * @return {ListNode}
 返回头节点
 输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
 */
var reverseList = function(head) {
    if(!head) return head
    let pre =null
    let curr =head
    while( curr){
          let next=curr.next
          curr.next=pre
          pre=curr
          curr=next      
    }
    return pre
};