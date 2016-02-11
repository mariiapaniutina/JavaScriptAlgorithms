/*
Excel Sheet Column Number
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var sum = 0;
  var arr = {
    A:1,
    B:2,
    C:3,
    D:4,
    E:5,
    F:6,
    G:7,
    H:8,
    I:9,
    J:10,
    K:11,
    L:12,
    M:13,
    N:14,
    O:15,
    P:16,
    Q:17,
    R:18,
    S:19,
    T:20,
    U:21,
    V:22,
    W:23,
    X:24,
    Y:25,
    Z:26
  };
  
  var test_arr=[]
  var j=s.length-1;
  for(var i=0; i<s.length; i++, j--){
    test_arr.push(arr[s[i]]*Math.pow(26,j));
  }
  
  for(var k=0; k<test_arr.length; k++){
    sum+=test_arr[k];
  }
  
  return sum;
    
};
