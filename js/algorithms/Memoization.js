/*
* @param {Function} fn
* @returns {Data} cashed result is returning
*/
var memoize = function(fn){
  var ob = {};
  return function(){
    var index = JSON.stringify(arguments);
    if(ob[index] === undefined){
      ob[index] = fn.apply(this, arguments);
    } 
    return ob[index];
  };
};

//lets create a fib function without recursion
var fib = memoize(function(n){
  var arr = [];
  if(n == 0 || n == 1){
    return n;
  } else {
    arr.push(0);
    arr.push(1);
    for (var i=2; i<n; i++){
      arr.push(arr[i-1] + arr[i-2]);
    }

    return arr[arr.length-1];
  }
  
});

//example
console.time('no cashe');
console.log(fib(350)); //3.865462327928464e+72
console.timeEnd('no cashe');
//no cashe: 2.30ms

console.time('from cashe');
console.log(fib(350)); //3.865462327928464e+72
console.timeEnd('from cashe');
//from cashe: 1.15ms
