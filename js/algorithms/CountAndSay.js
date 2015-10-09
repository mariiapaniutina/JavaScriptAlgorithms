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
  var start = '1';
  var result = '';
  var tmp = 1;
  for (i=0; i<n-1; i++){
    for (var j=0; j<start.length; j++){
      //lets do in one loop, tmp will count how many repeats we have
      if(start[j] !== start[j+1] || j == start.length - 1){
        result += tmp + start[j];
        tmp = 1;
      } else {
        tmp +=1;
      }
    }
    start = result;
    result = '';
  }
  return start;
};
