var MyStack = function() {
    this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x) //队列
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // 单队列的做法：pop的时候，把队列的n-1个元素按顺序加到队尾，队头就是栈顶的元素
    let i = this.queue.length-1
    while(i){
       this.push( this.queue.shift())
       i--
    }
    return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {    
    return this.queue[this.queue.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length ==0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */