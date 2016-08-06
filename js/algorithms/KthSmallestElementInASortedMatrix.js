/*
Kth Smallest Element in a Sorted Matrix

Given a n x n matrix where each of the rows and columns are sorted in ascending order, 
find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.
Example:
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,
return 13.
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {

  //method for merging two sorted arrays, and first and second are the same length
  var merge = function(arr1, arr2){
    var result = [];
    var len = arr1.length;
    var idxOne = 0;
    var idxTwo = 0;
    var tail;
    
    while(idxOne < len && idxTwo < len){
      if (arr1[idxOne] < arr2[idxTwo]){
        result.push(arr1[idxOne]);
        idxOne++;
      } else {
        result.push(arr2[idxTwo]);
        idxTwo++;
      }
    }
    
    //check if arr1 has tail
    if (idxOne < len){
      tail = arr1.slice(idxOne);
      result = result.concat(tail);
    }
    
    //check if arr2 has tail
    if (idxTwo < len){
      tail = arr2.slice(idxTwo);
      result = result.concat(tail);
    }
    
    return result;
  };
  
  //method for flattening sorted matrix to sorted array
  var sortMatrix = function(matrix){
    var resMatrix = [];
    var refMatrix = matrix.slice();
    var mid = Math.floor(matrix.length / 2);
    
    while(resMatrix.length !== 1){
      resMatrix = [];
      for (var i=0; i<refMatrix.length; i++){
        if(refMatrix[i+1]){
          var tmp = merge(refMatrix[i], refMatrix[i+1]);
          resMatrix.push(tmp);
          i++;
        }else{
           resMatrix.push(refMatrix[i]);
        }
      }
      refMatrix = resMatrix.slice();
    }
    return resMatrix;
  };
  
  var sortedFlattedMatrix = sortMatrix(matrix);
  return sortedFlattedMatrix[0][k-1];
};
