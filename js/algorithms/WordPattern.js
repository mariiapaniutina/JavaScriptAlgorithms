/*
Word Pattern
Given a pattern and a string str, find if str follows the same pattern.

Examples:

    pattern = "abba", str = "dog cat cat dog" should return true.
    pattern = "abba", str = "dog cat cat fish" should return false.
    pattern = "aaaa", str = "dog cat cat dog" should return false.
    pattern = "abba", str = "dog dog dog dog" should return false.

Notes:

    pattern contains only lowercase alphabetical letters, and str contains words separated by a single space. Each word in str contains only lowercase alphabetical letters.
    Both pattern and str do not have leading or trailing spaces.
    Each letter in pattern must map to a word with length that is at least 1.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var arr = str.split(' ');
  var result = true;
  
  var buildMap = function(a, b){
    var ob = {};
    for (var i=0; i<arr.length; i++){
      if(ob[a[i]] == undefined){
        ob[a[i]] = b[i];
      } else {
        if(ob[a[i]] !== b[i]){
          return false;
        }
      }
    }
    return true;
  };
  
  if(pattern.length !== arr.length){
    return false;
  } else {
    result = buildMap(pattern, arr) && buildMap(arr, pattern);
  }
  return result;
};
