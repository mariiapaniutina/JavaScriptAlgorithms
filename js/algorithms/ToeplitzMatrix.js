/*
Toeplitz Matrix
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 
Example 1:
Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: True
Explanation:
1234
5123
9512

In the above grid, the diagonals are "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]", 
and in each diagonal all elements are the same, so the answer is True.

Example 2:
Input: matrix = [[1,2],[2,2]]
Output: False
Explanation:
The diagonal "[1, 2]" has different elements.

Note:
matrix will be a 2D array of integers.
matrix will have a number of rows and columns in range [1, 20].
matrix[i][j] will be integers in range [0, 99].
*/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    var map = {};
    var result = true;
    var iL = matrix.length;
    var jL = matrix[0].length;
    
    for (var i=0; i<iL; i++){
        for (var j=0; j<jL; j++){
            var key = '' + i + '' + j;
            var val = matrix[i][j];
            // check for top and left nums and put it to map
            if (i === 0 || j === 0) {
                map[key] = val;
            // now check prev number from diagonale (it should be in the map)
            // and if this exists, put current to map,
            //if not - break the loop    
            } else {
                var prevI = i-1;
                var prevJ = j-1;
                var prevKey = '' + prevI + '' + prevJ;
                if (map[prevKey] === val){
                    map[key] = val;
                } else {
                    result = false;
                    break;
                }
            }
        }
    }
    
    return result;
    
};
