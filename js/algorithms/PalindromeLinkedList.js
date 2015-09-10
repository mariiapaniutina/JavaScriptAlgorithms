/*
Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.
 */

var isPalindrome = function(head) {
  var arr = [];
  
  //making array
  for (; head !== null; head = head.next){
    arr.push(head.val);
  }
  
  //console.log('arr', arr);
  
  //checking if palindrome
  if (arr.length/2 !== Math.floor(arr.length/2)){
    var j=Math.floor(arr.length/2);
    var i=Math.floor(arr.length/2);
  } else {
    var j=Math.floor(arr.length/2);
    var i=Math.floor(arr.length/2)-1;
  }
  
  for (i; i>=0, j<arr.length; i--, j++){
    if (arr[i] !== arr[j]){
      return false;
    }
  }
  
  return true;
};