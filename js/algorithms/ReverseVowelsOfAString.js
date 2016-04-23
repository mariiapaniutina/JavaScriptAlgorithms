/*
Reverse Vowels of a String  

Write a function that takes a string as input and r
everse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede". 
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    var vowels_map = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true
    };
    var len = s.length;
  
    if (len <=1){
        return s;
    }
    
    var s_vowels_map = (function(){
      var arr = [];
      for (var i=0; i<len; i++){
        if (vowels_map[s[i]] !== undefined){
          arr.unshift(s[i]);
        }
      }
      return arr;
    })();
  
    var s_reversed = (function(){
      var s_new = '';
      for (var i=0; i<len; i++){
        if (vowels_map[s[i]] !== undefined){
          s_new += s_vowels_map[0];
          s_vowels_map.shift();
          
        } else {
          s_new += s[i];
        }
        
      }
      return s_new;
    })();
  
    return s_reversed;
};
