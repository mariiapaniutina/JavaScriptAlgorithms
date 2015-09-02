/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length. 
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
  function getpairs(){
    var a = [];
    for (var i=0; i<s.length; i++){
      a[i] = s[i] + t[i];
    }
    return a;
  }
  if(s.length == t.length){
    
    var pairs = getpairs();
    //console.log(pairs());
    for (var i=0; i<s.length; i++){
      var index = s.indexOf(pairs[i][0]);
      if(t[index] !== pairs[i][1]){
        return false;
      }
      
      var index2 = t.indexOf(pairs[i][1]);
      if(s[index2] !== pairs[i][0]){
        return false;
      }
    }
    
    
    return true;
  } else {
    return false;
  }

};
