/*
Arithmetic Slices
A sequence of number is called arithmetic if it consists of at least three elements 
and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequence:
1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9

The following sequence is not arithmetic.
1, 1, 2, 5, 7


A zero-indexed array A consisting of N numbers is given. 
A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of array A is called arithmetic if the sequence:
A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.

Example:
A = [1, 2, 3, 4]
return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    //build array of max arithmetic sequence based on its length
    var buildDiff = function(arrLen){
        var begin = 2;
        var beginArr = [0, 0, 0, 1];
        for (var i=4; i<=arrLen; i++){
            beginArr[i] = beginArr[i-1] + begin;
            begin++;
        }
        return beginArr;
    }
    
    var len = 0;
    var curr = 0;
    var change = A[1] - A[0];
    var diffArr = buildDiff(A.length);
    
    //counting all arithmetic sequence
    for (var i=1; i<A.length; i++){
        if (A[i] - A[i-1] == change){
            curr += 1;
        } else {
            change = A[i] - A[i-1];
            len += diffArr[curr+1];
            curr = 1;
        }
    }
    
    //check latest
    len += diffArr[curr+1];
    
    return len;
};
