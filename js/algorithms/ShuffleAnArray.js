/*
Shuffle an Array

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
 * @param {Array} arr
 */
var ShuffleArray = function(arr){
  this.originalArr = arr || [];
};

/**
 * @return {Array} arr
 */
ShuffleArray.prototype.shuffle = function(){
  var random;
  var tmp;
  var len = this.originalArr.length;
  //take a copy or original array
  var arr = this.originalArr.slice();
  
  for (var i=0; i<arr.length; i++){
    tmp = arr[i];
    random = Math.floor(Math.random() * len);
    arr[i] = arr[random];
    arr[random] = tmp;
  }
  
  return arr;
};

/**
 * @return {Array} this.originalArr
 */
ShuffleArray.prototype.reset = function(){
  return this.originalArr;
};

var test = new ShuffleArray([1, 2, 3, 4, 5, 6]); 
console.log('shuffled array', test.shuffle());  //shuffled array [2, 5, 4, 1, 6, 3]
console.log('shuffled array', test.shuffle());  //shuffled array [3, 4, 1, 6, 5, 2]
console.log('shuffled array', test.shuffle());  //shuffled array [1, 5, 6, 4, 2, 3]
console.log('reset array', test.reset());       //reset array [1, 2, 3, 4, 5, 6]
