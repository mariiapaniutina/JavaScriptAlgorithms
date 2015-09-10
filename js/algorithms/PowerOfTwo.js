/*
Power of two
Given an integer, write a function to determine if it is a power of two. 
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n>=1){
    while (n%2 !== 1){
      n = Math.floor(n/2);
    }
    if (n !== 1) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

