/*
Kth Smallest Element in a BST

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
 */

var kthSmallest = function(root, k) {
    var arr = [];
    
    var findNode = function(node, lvl){
        if(node === null){
            return;
        } else {
            findNode(node.left, lvl+1);
            arr.push(node.val);
            findNode(node.right, lvl+1);
        }
    }
    
    findNode(root, 0);
    
    return arr[k-1];
};
