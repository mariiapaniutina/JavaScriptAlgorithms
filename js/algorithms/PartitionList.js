/*
Partition List  

Given a linked list and a value x, partition it such that all nodes less 
than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5. 
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    if (head == null){
        return head;
    }
    
    var left = [];
    var right = [];
    var list = null;
    var arr = [];
    
    var curr = head;
  
  var addToLinkedList = function(val){
    var el = new ListNode(val);
    if(list == null){
      list = el;
    } else {
      var newHead = list;
      while(newHead.next !== null){
        newHead = newHead.next;
      }
      newHead.next = el;
    }
  };
  
  while (curr !== null){
    if (curr.val < x){
      left.push(curr.val);
    } else{
      right.push(curr.val);
    }
    curr = curr.next;
  }
  
  if (right.length !== 0){
    left.push(right.shift());
  }
  
  arr = left.concat(right);
  
  for (var i=0; i<arr.length; i++){
    addToLinkedList(arr[i]);
  }
  
  return list;
 
};
