/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
返回 滑动窗口中的最大值 。
 */
// 方法一：单调队列：
/**
 *  自己实现队列的pop，push，getMax方法
 *  单调队列就是队列里的数是递增或者递减的
 *  push的时候，如果push的当前值比队列的最后一位大就让队列pop，直到当前值比队列最后一位小，呈现递减的趋势。
 *  pop就是当前要pop的值为队列的最大值时就让这个值弹出，否则不作为。
 *  获取最大值就是当前队列的0号元素
 * 
*/
 var maxSlidingWindow = function(nums, k) {
    let queue = [];
    let res = [] 
    // pop方法
    function pop(val){
        if(queue.length&&queue[0]==val){
            queue.shift()
        }
    }
    // push方法
    function push(val){
        // 队列单调递减
        while(queue.length && val>queue[queue.length-1]){
                queue.pop()  //如果要push的值比队列尾的元素大，就让这个元素pop使之呈现递减
        }
        queue.push(val)
    }
    function  getMax(){
        return queue[0]
    }
    let left =0;
    let right =k-1
    for(let i=0;i<k;i++){
        push(nums[i])
    }
    while(right<nums.length){
        res.push(getMax())
        // 滑动窗口
        pop(nums[left])
        left++
        right++
        push(nums[right])
    }
    return res
};

// 比较标准的类写法
var maxSlidingWindow = function (nums, k) {
    class MonoQueue {
        queue;
        constructor() {
            this.queue = [];
        }
        enqueue(value) {
            let back = this.queue[this.queue.length - 1];
            while (back !== undefined && back < value) {
                this.queue.pop();
                back = this.queue[this.queue.length - 1];
            }
            this.queue.push(value);
        }
        dequeue(value) {
            let front = this.front();
            if (front === value) {
                this.queue.shift();
            }
        }
        front() {
            return this.queue[0];
        }
    }
    let helperQueue = new MonoQueue();
    let i = 0, j = 0;
    let resArr = [];
    while (j < k) {
        helperQueue.enqueue(nums[j++]);
    }
    resArr.push(helperQueue.front());
    while (j < nums.length) {
        helperQueue.enqueue(nums[j]);
        helperQueue.dequeue(nums[i]);
        resArr.push(helperQueue.front());
        i++, j++;
    }
    return resArr;
};