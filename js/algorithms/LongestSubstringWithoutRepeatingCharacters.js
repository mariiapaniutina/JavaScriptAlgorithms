/*
Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var map = {};
  var curr = '';
  var startPos;
  
  if (s.length === 0){
      return 0;
  }
  
  for (var i=0; i<s.length; i++){
    startPos = curr.indexOf(s[i]);
    
    if(startPos > -1){
      curr = curr.substring(startPos + 1) + s[i];
    }
    
    if(startPos === -1){
      curr = curr + s[i];
    }
    
    if (map[curr] === undefined){
      map[curr] = curr.length;
    }
  }
  
  var res = (function(obj){
      var arr = [];
      for (var key in obj){
          arr.push(obj[key]);
      }
      return arr;
  })(map);
  
  return Math.max.apply(null, res);
  
};
