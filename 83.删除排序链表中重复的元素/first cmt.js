/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
题目：
给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
输入：head = [1,1,2]
输出：[1,2]

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head
    let h = head
    while (h.next !== null) {
        // 如果相等就覆盖
        if (h.val == h.next.val) {
            h.next = h.next.next
        } else {
            // 不相等就继续找下一个
            h = h.next
        }
    }
    //注意引用类型,指针的改动会影响原数组
    return head
};