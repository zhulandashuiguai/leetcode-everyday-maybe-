var isSubtree = function(root, subRoot) {
    function isSameTree(left,right){
        if(left==null&&right==null) return true//两边同时为null
        if(left==null||right==null) return false//这个表示只有一方为null
        if(left.val!==right.val) return false
        return left.val==right.val&&isSameTree(left.left,right.left)&&isSameTree(left.right,right.right)
    }
    if(isSameTree(root,subRoot)) return true
    if(root ==null) return false
    return isSubtree(root.left,subRoot)||isSubtree(root.right,subRoot) 
};
//
var isSubtree = function(root, subRoot) {
    //此题也类似判断两个二叉树是否相等 
    //1. 确定递归函数参数
    const compare = function(left,right){
        if(left===null&&right===null){
            return true;
        }else if(left!==null&&right===null||left===null&&right!==null||left.val!==right.val){
            return false;
        }
        let leftSide = compare(left.left,right.left);
        let rightSide = compare(left.right,right.right);
        let isSame = leftSide&&rightSide;
        return isSame;
    }
   if(root===null){
       return false
   }
   if(compare(root,subRoot)){
       return true;
   }
   return isSubtree(root.left,subRoot)||isSubtree(root.right,subRoot);
};
