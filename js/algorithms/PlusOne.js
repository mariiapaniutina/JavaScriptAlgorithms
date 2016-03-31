/*
Plus One

Given a non-negative number represented as an array of digits, plus one to the number.
The digits are stored such that the most significant digit is at the head of the list.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var rem = 1;
  var arr = [];
  var temp;
  
  for (var i=digits.length-1; i>=0; i--){
    temp = digits[i] + rem;
    if(temp > 9){
      temp = 0;
      rem = 1;
    } else {
      rem = 0;
    }
    arr.unshift(temp);
  }
  
  if(rem > 0){
    arr.unshift(rem);
  }
  
  return arr;
};
