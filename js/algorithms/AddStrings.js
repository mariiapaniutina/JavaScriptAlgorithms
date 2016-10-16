/*
Add Strings

Given two non-negative numbers num1 and num2 represented as string, return the sum of num1 and num2.

Note:
    The length of both num1 and num2 is < 5100.
    Both num1 and num2 contains only digits 0-9.
    Both num1 and num2 does not contain any leading zero.
    You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {

  var makeSameLen = function(s, len){
    while(s.length !== len){
        s = '0' + s;
    }
    return s;
  };
  
  var addSimple = function (a, b){
    var sum = '';
    var overflowNum = 0;
    var maxLen = Math.max(a.length, b.length);
    var aS = makeSameLen(a, maxLen);
    var bS = makeSameLen(b, maxLen);
    
    for (var i=maxLen-1; i>=0; i--){
      var curr = +aS[i] + +bS[i] + +overflowNum;
      if (curr > 9){
        overflowNum = Math.floor(curr/10);
        var num = curr - 10;
        sum = '' + num + sum;
      } else {
          overflowNum = 0;
        sum = '' + curr + sum;
      }
    }
    
    if (overflowNum > 0){
      sum = '' + overflowNum + sum;
    }
    
    return sum;
  };
  
  var largeSum = addSimple(num1, num2);
  
  return largeSum;
};
