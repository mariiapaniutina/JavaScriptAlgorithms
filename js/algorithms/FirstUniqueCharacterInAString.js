/*
First Unique Character in a String

Given a string, find the first non-repeating character in it and 
return it's index. If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters. 
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  
  var getUniqCharMap = function(s){
    var sMap = {};
    var sArr = [];

    for (var i=0; i<s.length; i++){
      if (!sMap[s[i]]){

        sMap[s[i]] = 1;
        sArr[i] = s[i];

      } else {
        sMap[s[i]]++;
      }
    }
    
    return {
      charMap: sMap,
      charPos: sArr
    };
  };
  
  var getFirstUniqueChar = function(map, arr){
    for (var i=0; i<arr.length; i++){
      if (map[arr[i]] && map[arr[i]] === 1){
        return i;
      }
    }
    
    return -1;
  };
  
  var uninqueCharMap = getUniqCharMap(s);
  var firstUniqueChar = getFirstUniqueChar(uninqueCharMap.charMap, uninqueCharMap.charPos);
  
  return firstUniqueChar;
};
