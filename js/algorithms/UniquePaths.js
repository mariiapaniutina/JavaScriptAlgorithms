/*
Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?
*/

/*
Solution example
1  1  1  1
1  2  3  4
1  3  6  10
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 0 || n === 0){
        return 0;
    }
    
    var arr = [];
    for (var i=0; i<m; i++){
      arr[i] = [];
      for (var j=0; j<n; j++){
        if (i == 0 || j == 0){
          arr[i][j] = 1;
        } else {
          arr[i][j] = arr[i-1][j] + arr[i][j-1];;
        }
      }
    }
  
    return arr[m-1][n-1];
};
