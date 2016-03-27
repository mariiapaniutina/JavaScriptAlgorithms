/*
Counting Bits My
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num c
alculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). 
But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function 
like __builtin_popcount in c++ or in any other language.
*/

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  //Lets use dynamic programming
  var arr = [0, 1, 1];
  
  for (var i=3; i<=num; i++){
    var even = 0;
    var temp = i;
    var odd = 0;
    if((i/2) !== Math.floor(i/2)){
      even +=1;
      temp = i-1;
    }
      odd = arr[temp/2];
      arr.push(even + odd);
    
  }
  
  return arr.slice(0, num+1);
};
