/*
Implementation of merging two sorted arrays with extra memory
*/

/**
* @params {number []} arr1
* @params {number []} arr2
* @returns {number []}
*/
var mergeTwoSortedArrays = function(arr1, arr2){
  var arr1Len = arr1.length || 0;
  var arr2Len = arr2.length || 0;
  var totalArr = [];
  var curr1 = 0;
  var curr2 = 0;
  var tail;

  while(curr1 < arr1Len && curr2 < arr2Len){    
    if (arr1[curr1] < arr2[curr2]){
      totalArr.push(arr1[curr1]);
      curr1++;
    } else {
      totalArr.push(arr2[curr2]);
      curr2++;
    }
  }
  
  //add tails
  if (curr1 < arr1Len) {
    tail = arr1.splice(curr1);
    totalArr = totalArr.concat(tail);
  }
  
  if (curr2 < arr2Len) {
    tail = arr2.splice(curr2);
    totalArr = totalArr.concat(tail);
  }
  
  return totalArr;
};
