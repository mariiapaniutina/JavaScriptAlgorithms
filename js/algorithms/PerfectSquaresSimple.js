/*
Perfect Squares Simple version

Given a positive integer n, find the number of perfect square 
numbers (for example, 1, 4, 9, 16, ...) which sum to n. 
*/

/**
 * @param {number} n
 * @return {number}
 */
 
 var numSquares = function(n) {
  var maxN = Math.floor(Math.sqrt(n));
  
  //helper function
  //building the list of "perfects"
  var listN = function(){
    var arr = [];
    for (var i=1; i<maxN+1; i++){
      arr.push(i*i);
    }
    return arr;
  };
  
  //another helper function
  //finding the max perfect
  var minusMax = function(arr, n){
    var x;
    for (var i=arr.length-1; i>0; i--){
      if(n-arr[i]>=0){
        return arr[i]
      }
    }
    return 1;
  };
  
  var newList = listN();
  var m = [];
  
  while (n>0){
    var val = minusMax(newList, n);
    m.push(val);
    n = n-val;
  }
  
  return m.length;
};
