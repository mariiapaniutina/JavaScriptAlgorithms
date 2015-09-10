/*
    Valid Anagram
    
    Given two strings s and t, write a function to determine if t is an anagram of s.

    For example,
    s = "anagram", t = "nagaram", return true.
    s = "rat", t = "car", return false.

    Note:
    You may assume the string contains only lowercase alphabets.
 */

var isAnagram = function(s, t) {
  s = s.split("");
  t = t.split("");
  
  if (s.length !== t.length){
    return false;
  } else {
    s = s.sort();
    t = t.sort();
    for (var i=0; i<s.length; i++){
      if(s[i] !== t[i]){
        return false;
      }
    }
    return true;
  }
};