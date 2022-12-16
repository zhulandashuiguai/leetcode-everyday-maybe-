/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 方法一：可以用cache的方式缓存节点，如果遇到相同的节点，直接return
 var detectCycle = function(head) {
    if(!head) return head
    let cache = [];
    let cur = head;
    while(cur!==null){
        if(cache.includes(cur)) return cur
        cache.push(cur);
        cur = cur.next
    }
    return null
};

// 方法2:快慢指针
//快指针和慢指针相遇时，x的路程等于z的路程
var detectCycle = function(head) {
    let fast= head,slow=head;
    while(fast!==null&&fast.next!==null){
        fast=fast.next.next
        slow=slow.next
        if(fast==slow){
            let index =fast;
            let index2 = head;
            while(index!==index2){
                index=index.next
                index2=index2.next
            } 
            return index
        } 
    }
    return null
};