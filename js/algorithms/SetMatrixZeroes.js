/*
Set Matrix Zeroes 

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place. 
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var arrI = {};
    var arrJ = {};
    var iLen = matrix.length;
    var jLen = matrix[0].length;
    function findZeros (m){
        for (var i=0; i<iLen; i++){
            for (var j=0; j<jLen; j++){
                if(m[i][j] == 0){
                    arrI[i] = i;
                    arrJ[j] = j;
                }
            }
        }
    }
  findZeros(matrix);
  
  function clearMatrix (m){
      for (var i=0; i<iLen; i++){
          for (var j=0; j<jLen; j++){
              if (arrI[i] !== undefined || arrJ[j] !== undefined){
                  m[i][j] = 0;
              }
          }
          
      }
  }
  
  clearMatrix(matrix);
  
};
