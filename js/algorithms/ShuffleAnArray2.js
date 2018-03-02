/*
Shuffle a set of numbers without duplicates.

Example:

// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
*/

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    //copy of original array
    var arr = this.original.slice();
    
    // initially current index is latest element in array
    var currIdx = arr.length;

    //while we do not proceed all elements from array
    while (currIdx !== 0) {

        //grabbing random element from remaining part of array
        var randIdx = Math.floor(Math.random() * currIdx--);

        //swap it with current element
        var tmp = arr[currIdx];
        arr[currIdx] = arr[randIdx];
        arr[randIdx] = tmp;
    }
    
    return arr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
