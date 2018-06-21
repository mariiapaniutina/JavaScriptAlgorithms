/*
Backspace String Compare

Given two strings S and T, return if they are equal when both are typed into empty text editors. 
# means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".


Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    var s = [];
    var t = [];
    
    for (var i=0; i<S.length; i++) {
        if (s.length > 0 && S[i] === '#') {
            s.pop();
        } else if (S[i] !== '#'){
            s.push(S[i])
        }
    }
    
    for (var j=0; j<T.length; j++) {
        if (t.length > 0 && T[j] === '#') {
            t.pop();
        } else if (T[j] !== '#'){
            t.push(T[j])
        }
    }
    
    return s.join('') === t.join('');
};
