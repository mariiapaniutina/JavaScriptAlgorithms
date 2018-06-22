/*
Shortest Distance to a Character

Given a string S and a character C, return an array of integers representing the shortest distance
from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.
*/

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    var getCPosList = function(str, c){
        var list = [];
        
        for (var i=0; i<str.length; i++) {
            if (str[i] === c) {
                list.push(i);
            }
        }
        
        return list;
    };
    
    var cPosList = getCPosList(S, C);
    var shortestDistList = [];
    var maxDist = S.length;
    
    for (var i=0; i<S.length; i++) {
       if (S[i] === C) {
           shortestDistList.push(0);
       } else {
           var currMin = maxDist;
           for (var j=0; j<cPosList.length; j++) {
               var tmp = Math.abs(cPosList[j] - i);
               if (tmp < currMin) {
                   currMin = tmp;
               }
           }
           shortestDistList.push(currMin);
       }
    }
    
    return shortestDistList;
};
