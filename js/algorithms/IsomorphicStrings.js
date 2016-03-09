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
    var sLen = s.length;
    var tLen = t.length;
    var el;
    var buildDict = function(str1, str2){
        var dict = {};
        for (var i=0; i<sLen; i++){
            el = str1[i];
            if(dict[el] === undefined){
                dict[el] = str2[i];
            } else {
                if(dict[el] !== str2[i]){
                    return false;
                }
            }
        }
        return true;
    };
    
    if(sLen !== tLen){
        return false;
    } else {
        return buildDict(s, t) && buildDict(t, s);
    }
};
