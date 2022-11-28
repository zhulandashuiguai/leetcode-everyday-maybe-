/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
题目：
有一个单链表的 head，我们想删除它其中的一个节点 node。
给你一个需要删除的节点 node 。你将 无法访问 第一个节点  head。

思路：比较简单：直接用给的节点的next.val赋给当前，再把当前的next指向指向next.next就能实现覆盖
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};