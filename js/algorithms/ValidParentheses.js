/*
Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var returned = true;
  var arr = [];
  
  var A = '[';
  var AA = ']';
  
  var B = '(';
  var BB = ')';
  
  var C = '{';
  var CC = '}';
  
  //remove last element from array
  var removeEl = function (){
      var size = arr.length;
      if (arr.length >=1){
          arr.length = size-1;
      } else {
        returned = false;
      }
  }
  
  //insert element in the end of array
  var insertEl = function(x){
      arr[arr.length] = x;
  }
  
  //check if last element value is equal x
  var checkLast = function (){
    if (arr.length > 0){
      return arr[arr.length-1];
    } else {
      returned = false;
    }
  }
  
  for (var i=0; i<s.length; i++){
    //if it is open char - put it into array
    if(s[i] == A || s[i] == B || s[i] == C){
      insertEl(s[i]);
    } 
    
    //if it close char - check if in array we have open one
    if (s[i] == AA){
      if (checkLast() == A){
        removeEl();
      } else {
        return false;
      }
    } 
    
    //if it close char - check if in array we have open one
    if (s[i] == BB){
      if (checkLast() == B){
        removeEl();
      } else {
        return false;
      }
    } 
    
    //if it close char - check if in array we have open one
    if (s[i] == CC){
      if (checkLast() == C){
        removeEl();
      } else {
        return false;
      }
    }
  }
  
  //if some open chars left in array - return false
  if(arr.length !== 0){
    returned = false;
  }
  return returned;
  
};
