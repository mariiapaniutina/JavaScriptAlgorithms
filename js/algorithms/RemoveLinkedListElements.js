/* 
Remove Linked List Elements

Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5 
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  
  while (head != null && head.val == val){
    head =  head.next;
  }
  var prev=head;
  var curr = head;
  
  
    for (; curr!==null; ){
      //console.log('checking head.val=' + curr.val);
      if (curr.val == val){
        //console.log('found item to remove ' + curr.val);
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      
      curr = curr.next;
    } 
    
  return head;
  
};