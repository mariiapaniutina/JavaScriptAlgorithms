/*
Intersection of Two Linked Lists
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3

begin to intersect at node c1.

Notes:

    If the two linked lists have no intersection at all, return null.
    The linked lists must retain their original structure after the function returns.
    You may assume there are no cycles anywhere in the entire linked structure.
    Your code should preferably run in O(n) time and use only O(1) memory.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
  if (headA == null || headB == null){
      return null;
  }    
  
  var headAA = headA;
  var headBB = headB;
  var arr1 = [];
  
  for (; headAA !== null; headAA = headAA.next){
    arr1.push(headAA);
  }
  
  for (; headBB !== null; headBB = headBB.next){
    if(arr1.indexOf(headBB) !== -1){
        return headBB;
    }
  }

  return null;
};
