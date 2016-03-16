/*
Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (var i=0, j=s.length-1; i<s.length, j>0; i++, j--){
    if(s[i] !== s[j]){
      return false;
    }
  }
  return true;
};
