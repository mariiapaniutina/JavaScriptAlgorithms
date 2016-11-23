/*
Repeated Substring Pattern

Given a non-empty string check if it can be constructed by taking a substring of it and 
appending multiple copies of the substring together. 
You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice

Example 2:
Input: "aba"
Output: False

Example 3:
Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

/**
 * @param {string} str
 * @return {boolean}
 */
var repeatedSubstringPattern = function(str) {
  var curr = '';

  for (var i=0; i<str.length; i++){
    if (curr[0] !== str[i]){
      curr += str[i];
    } else {
      for (var j=0; j<str.length; j+=curr.length){
        var repeated = str.substr(j, curr.length);
        if (repeated !== curr){
          curr += str[i];
          break;
        }
        if (j === str.length-curr.length){
          return true;
        }
      }
    }
  }

  return false;
};
