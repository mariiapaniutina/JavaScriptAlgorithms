/*
Happy Number My Submissions Question
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: 
Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a 
cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/


/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {
  var arr = [];
  while(true){
    var sum = 0;
    while (n > 0){
      var curr = n % 10;
      sum += Math.pow(curr, 2);
      n = Math.floor(n/10);
    }
  
    if (sum == 1){
      return true;
    }

    for (var i=0; i<arr.length; ++i){
      if (arr[i] == sum){
        return false;
      }
    }
      
    arr.push(sum);
    n = sum;
  }
};
