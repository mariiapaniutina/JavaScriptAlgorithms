/*
Pascal's Triangle

Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var arr=[];
    if(numRows==0){
        return [];
    }
    for (var i=0; i<numRows; i++){
        if(i==0){
            arr[0] = [1];
        }
        if(i==1){
            arr[1] = [1, 1];
        }
        if(i>=2){
            var len = i+1;
            var tmp_arr = [];
            tmp_arr[0] = 1;
            tmp_arr[i] = 1;
            for (var j=1; j<i; j++){
                tmp_arr[j] = arr[i-1][j-1]+arr[i-1][j];
            }
            arr[i] = tmp_arr;
        }
    }
    return arr;
};
