/*
Maximum Average Subarray I
Given an array consisting of n integers, find the contiguous subarray of 
given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:
```
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
```

Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
Note:
1 <= k <= n <= 30,000.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    //sum of subarray from `i-k + 1` till `i` (because i starts from 0 and k starts from 1)
    var sum = 0;
    
    //this is going to be max avarege
    var max = Number.NEGATIVE_INFINITY;
    
    //going once through all elements
    for (var i = 0; i <= nums.length; i++){
        //updating subarrays sum
        sum += nums[i];
        
        //when we found first (and rest) subaarryas
        if (i >= k - 1){
            //looking for avarage of current subarray
            var currMax = sum / k;
            
            //if current avarege is bigger than max avarege, update
            if (currMax > max){
                max = currMax;
            }
            
            //removing first element from subarrays sum
            sum -= nums[i - k + 1];
        }
    }
    
    return max;
};
