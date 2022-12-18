var MyQueue = function() {
    this.stackIn = []
    this.stackOut = []
};

/** 
 * @param {number} x
 * @return {void}
 * 
 * 将一个栈当作输入栈，用于压入push 传入的数据；另一个栈当作输出栈，用于 pop 和 peek 操作。
每次pop 或 peek 时，若输出栈为空则将输入栈的全部数据依次弹出并压入输出栈，这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序。

 */
MyQueue.prototype.push = function(x) {
    this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // 出队稍微复杂一点，要先把stackIn的数据push到stackOut
    if(this.stackOut.length){  //如果stackout里面有值，就直接pop
       return this.stackOut.pop()
    }else{ //否则就先把入栈的数值push到出栈
        while(this.stackIn.length!==0){
            this.stackOut.push(this.stackIn.pop())
        }
        return this.stackOut.pop()
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let tem = this.pop()
    this.stackOut.push(tem)
    return tem
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !(this.stackIn.length || this.stackOut.length)
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */