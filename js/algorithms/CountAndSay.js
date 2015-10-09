/*
Count and Say

The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string. 
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var result = '1';
  var tmp_result = '';
  var counter = 1;
  for (i=0; i<n-1; i++){
    for (var j=0; j<result.length; j++){
      //lets do in one loop, counter will count how many repeats we have
      if(result[j] !== result[j+1] || j == result.length - 1){
        tmp_result += counter + result[j];
        counter = 1;
      } else {
        counter +=1;
      }
    }
    result = tmp_result;
    tmp_result = '';
  }
  return result;
};
