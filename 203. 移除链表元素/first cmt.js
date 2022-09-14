/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
//  题目:给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
    示例：输入：head = [1,2,6,3,4,5,6], val = 6
        输出：[1,2,3,4,5]
    输入：head = [7,7,7,7], val = 7
    输出：[]
    1.解题思路：头节点最后判断，设置三个指针，分别p指向当前，pre指向上一个，next指向下一个
    从第二个节点开始循环链表，并每次初始化next，如果当前值等于val，让pre.next等于next，p.next=null,然后
    如果不相等指针也要整体往后移，最后判断头节点即可
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head
    let p = head.next
    let pre = head
    while (p) {
        let next = p.next
        if (p.val == val) {
            p.next = null
            p = next
            pre.next = p
        } else {
            pre = p
            p = next

        }
    }
    if (head.val == val) head = head.next
    return head
};
// 还可以利用哑节点，就是直接在头节点之前再造一个一个节点，就可简便的判断删除
var removeElements = function(head, val) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while (temp.next !== null) {
        if (temp.next.val == val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return dummyHead.next;
};