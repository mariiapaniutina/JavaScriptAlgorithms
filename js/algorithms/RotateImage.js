/*
Rotate Image

You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix){
  var n = matrix.length;
  
  for (var i=0; i<n;i++){
    for(var j=0; j<n; j++){
      var tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
      if(i==j){
        break;
      }
    }
  }
  
  for (var k=0; k<n; k++){
    matrix[k].reverse();
  }
  
  //return matrix;
};
