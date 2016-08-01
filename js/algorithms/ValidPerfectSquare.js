/*
Valid Perfect Square
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:
Input: 16
Returns: True

Example 2:
Input: 14
Returns: False
*/

/*
My solution:
Sqrt    Sqr
1       1   
    3
2       4   = 3 + 1
    5
3       9   = 5 + 4
    7
4       16  = 9 + 7
    9
5       25  = 16 + 9
    11
6       36  = 25 + 11
    13
7       49  = 36 + 13
    15
8       64  = 49 + 15
    17
9       81  = 64 + 17
    19
10      100 = 81 + 19
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  var start = 1;
  var curr = 1;
  var tmp;
  
  if(num === 1){
    return true;
  }
  
  while(curr <= num){
    start += 2;
    tmp = start + curr;
    if (tmp <= num){
      curr = tmp;
      if(curr === num){
          return true;
      }
    } else{
      return false;
    }
  }
  
};
