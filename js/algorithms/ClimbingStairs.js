/*
Climbing Stairs
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [];
      if (n>=1){
        arr[0] = 1;
      }
      if (n>=2){
        arr[1] = 2;
      }
      for (var i=2; i<n; i++){
        arr[i] = arr[i-1] + arr[i-2];
      }
      return arr[arr.length - 1];
};
