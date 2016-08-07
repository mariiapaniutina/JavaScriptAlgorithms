/*
Power of Four

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion? 
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
//current solution has loop
  var arrThree = [1]; 
  var currPow = 1;
  
  while (currPow <= num){
    currPow = currPow * 4;
    if(currPow <= num){
      arrThree.push(currPow);
    }
  }
  
  if(arrThree.indexOf(num) !== -1){
    return true;
  } else {
    return false;
  }
};
