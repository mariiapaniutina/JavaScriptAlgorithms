/*
Longest Palindrome
Given a string which consists of lowercase or uppercase letters, 
find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  var getStrMap = function(str){
    var map = {};
    for (var i=0; i<str.length; i++){
      if (map[str[i]] === undefined){
        map[str[i]] = 1;
      } else {
        map[str[i]] += 1;
      }
    }
    return map;
  };
  var getLongestPalindromeFromMap = function(map){
    var one = 0;
    var sum = 0;
    for (key in map){
      //saving one
      if (map[key]/2 !== Math.floor(map[key]/2) && one === 0){
        one = 1;
      }
      
      //calculating rest
      sum += Math.floor(map[key]/2)*2;
    }
    
    return sum+one;
  };
  var strMap = getStrMap(s);
  var longestPalindromeFromMap = getLongestPalindromeFromMap(strMap);
  
  return longestPalindromeFromMap;
  
};
