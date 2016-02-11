/*
Excel Sheet Column Title
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var dict = {
    1:  'A',
    2:  'B',
    3:  'C',
    4:  'D',
    5:  'E', 
    6:  'F', 
    7:  'G', 
    8:  'H', 
    9:  'I', 
    10: 'J', 
    11: 'K', 
    12: 'L', 
    13: 'M', 
    14: 'N', 
    15: 'O', 
    16: 'P', 
    17: 'Q', 
    18: 'R', 
    19: 'S', 
    20: 'T', 
    21: 'U', 
    22: 'V', 
    23: 'W', 
    24: 'X', 
    25: 'Y', 
    26: 'Z'
  };
  
  var num = n;
  var arr = [];
  var x = 0;
  var returned = '';
  
  while ((n-x)%26 > 0){
   arr.push(n%26);
   n = Math.floor(n/26);
   if (n == 26){
     arr.push(26);
   }
    
  }
  
  if (num%26 === 0){
    if (typeof dict[Math.floor(num/26)-1] === 'undefined'){
      dict[Math.floor(num/26)-1] = '';
    }
    returned = dict[Math.floor(num/26)-1] + '' + dict[26];
  } else {
    for (var i=arr.length-1; i>=0; i--){
      returned+=dict[arr[i]];
    }
  }
    
  return returned;
};
