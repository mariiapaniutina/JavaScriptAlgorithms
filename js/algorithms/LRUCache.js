/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.arr = [];
    this.capacity = capacity;
    this.len = 0;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
  for (var i=0; i<this.arr.length; i++){
   var obKey = Object.keys(this.arr[i])[0];
    if(obKey == key){
      return this.arr[i][key];
    }
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
 
 /*
 Toooooo expensive solution...
 TODO: rewrite with linked list
 */
LRUCache.prototype.set = function(key, value) {
  var ob = {[key]: value};
  
  var inserted = false;
  for (var i=0; i< this.arr.length; i++){
    var obKey = Object.keys(this.arr[i])[0];
    if(obKey == key){
      this.arr.splice(i, 1);
      break;
    }
  }
  
  this.arr.unshift(ob);
  
  if(this.arr.length > this.capacity){
    this.arr.pop();
  }
};

LRUCache.prototype.getData = function(){
  return this.arr;
}
