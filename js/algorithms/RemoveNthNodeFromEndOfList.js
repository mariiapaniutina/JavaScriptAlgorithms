/*
Remove Nth Node From End of List

Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  
  var x = 0;
  
  var curr = head;
  
  for (; curr!==null; curr = curr.next){
    x+=1;
  }
  
  var search_pos = x-n;
  
  var k = 0;

  //console.log(search_pos);
  if (search_pos == 0){
    return head.next;
  }
  
  var curr2 = head;
  for (; curr2 !== null; curr2 = curr2.next){
    k++;
    if (k== search_pos){
      var rem = curr2.next.next;
      curr2.next = rem;
      
    }
  }
  
  return head;
};
