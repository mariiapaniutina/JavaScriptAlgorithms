/*
Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var resHead = null;
    var resTail = null;
    var item = null;
    var leftOvers = null;
    
    while (l1 !== null && l2 !== null){
        if (l1.val < l2.val){
            item = l1;
            l1 = l1.next;
        } else {
            item = l2;
            l2 = l2.next;
        }
        item.next = null;
        
        //check if resHead is empty
        if (resHead === null){
            resHead = item;
            resTail = item;
        } else {
            resTail.next = item;
            resTail = item;
        }
    }
    
    if (l1 !== null){
        leftOvers = l1;
    }
    
    if (l2 !== null){
        leftOvers = l2;
    }
    
    if (leftOvers !== null){
        if (resHead === null){
            resHead = leftOvers;
        } else {
            resTail.next = leftOvers;
        }
    }
    
    return resHead;
    
};
