/*
Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var arr = [0];
  
  while (Math.floor(n/5) >=1){
    n = Math.floor(n/5);
    arr.push(n+arr[arr.length-1]);
    
  }
  
  return arr[arr.length-1];
};
