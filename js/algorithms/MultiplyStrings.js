/*
Multiply Strings

Given two numbers represented as strings, return multiplication of the numbers as a string.

Note:
    The numbers can be arbitrarily large and are non-negative.
    Converting the input string to integer is NOT allowed.
    You should NOT use internal library such as BigInteger.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var addZerosBefore = function(s, len){
    while(s.length !== len){
        s = '0' + s;
    }
    return s;
  };
  
  var multTen = function(s, powLen){
    for (var i=0; i<powLen; i++){
      s = s + '0';
    }
    
    return s;
  };
  
  var addSimple = function (a, b){
    var sum = '';
    var overflowNum = 0;
    var maxLen = Math.max(a.length, b.length);
    var aS = addZerosBefore(a, maxLen);
    var bS = addZerosBefore(b, maxLen);
    
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
  
  var multSimpleArr = function(a, b){
    var arr = [];
    var overflowNum = 0;
    var row = '';
    var zeros = 0;
    
    for (var i=a.length - 1; i>= 0; i--){
      for (var j=b.length - 1; j>= 0; j--){
        var curr = (+a[i] * +b[j]) + +overflowNum;
        
        if (curr > 9){
          overflowNum = Math.floor(curr/10);
          var num = curr - Math.floor(curr/10)*10;
          row = '' + num + row;
        } else {
          overflowNum = 0;
          row = '' + curr + row;
        }
        
      }
      if (overflowNum > 0){
        row  = '' + overflowNum + row;
        overflowNum = 0;
      }
      
      var tmpRow = multTen(row, zeros); 
      zeros++;
      arr.push(tmpRow);
      row = '';
    }
    
    return arr;
  };
  
  var sumArrs = function(arr){
    var sum = arr[0];
    
    for (var i=1; i<arr.length; i++){
      sum = addSimple(sum, arr[i]);
    }
    
    return sum;
  };
  
  var arrs = multSimpleArr(num1, num2);
  var result = sumArrs(arrs);
  
  if (+result === 0) return '0';
  
  return result;
};
