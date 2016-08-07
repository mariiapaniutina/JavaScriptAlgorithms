/*
Power of Three

Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion? 
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
//this solution uses loop
  var arrThree = [1]; 
  var currPow = 1;
  
  while (currPow <= n){
    currPow = currPow * 3;
    if(currPow <= n){
      arrThree.push(currPow);
    }
  }
  
  if(arrThree.indexOf(n) !== -1){
    return true;
  } else {
    return false;
  }
  
};
