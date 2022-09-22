/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
题目：
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
示例：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

思路1: 先将两个链表的值全部取出来放进一个数组中，然后进行排序，排序之后，再把他们串成节点即可
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let arr = []
    while (list1) {
        arr.push(list1.val)
        list1 = list1.next
    }
    while (list2) {
        arr.push(list2.val)
        list2 = list2.next
    }
    arr = arr.sort((a, b) => a - b)

    let head = new ListNode(0)
    let point = head
    while (arr.length) {
        let a = arr.shift()
        let temNode = new ListNode(a)
        point.next = temNode
        point = point.next
    }
    return head.next
};

// 递归法

var mergeTwoLists = function(list1, list2) {
    //递归法思路： 就相当于，先比较一个节点，然后小的那个节点，和剩下的两个链表融合，以此递归
    let l1 = list1
    let l2 = list2
    if (l1 == null) return l2
    if (l2 == null) return l1
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l2.next, l1)
        return l2
    }
};