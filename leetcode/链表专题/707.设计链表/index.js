var MyLinkedList = function() {
    this.size = 0;
    this.head = new ListNode(0);
    this.tail = new ListNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }
    let curr;
    if (index + 1 < this.size - index) {
        curr = this.head;
        for (let i = 0; i <= index; i++) {
            curr = curr.next;
        }
    } else {
        curr = this.tail;
        for (let i = 0; i < this.size - index; i++) {
            curr = curr.prev;
        }
    }
    return curr.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    this.addAtIndex(0, val);
};

MyLinkedList.prototype.addAtTail = function(val) {
    this.addAtIndex(this.size, val);
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) {
        return;
    }
    index = Math.max(0, index);
    let pred, succ;
    if (index < this.size - index) {
        pred = this.head;
        for (let i = 0; i < index; i++) {
            pred = pred.next;
        }
        succ = pred.next;
    } else {
        succ = this.tail;
        for (let i = 0; i < this.size - index; i++) {
            succ = succ.prev;
        }
        pred = succ.prev;
    }
    this.size++;
    const toAdd = new ListNode(val);
    toAdd.prev = pred;
    toAdd.next = succ;
    pred.next = toAdd;
    succ.prev = toAdd;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }
    let pred, succ;
    if (index < this.size - index) {
        pred = this.head;
        for (let i = 0; i < index; i++) {
            pred = pred.next;
        }
        succ = pred.next.next;
    } else {
        succ = this.tail;
        for (let i = 0; i < this.size - index - 1; i++) {
            succ = succ.prev;
        }
        pred = succ.prev.prev;
    }
    this.size--;
    pred.next = succ;
    succ.prev = pred;
};

function ListNode(val, next, prev) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.prev = (prev===undefined ? null : next)
}
