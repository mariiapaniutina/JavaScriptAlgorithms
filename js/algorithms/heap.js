var Heap = function(){
  this.arr = [];
};

Heap.prototype.addItem = function(val){
 console.log('Heap.addItem :: START');
  this.arr.push(val);
  
  var elIdx = this.arr.length - 1;
  var parentIdx = this.findParentIdx(elIdx);
  
  while (this.arr[parentIdx] < this.arr[elIdx]){
    this.swapElementsByPos(parentIdx, elIdx);
    elIdx = parentIdx;
    parentIdx = this.findParentIdx(elIdx);
  }
  
};

Heap.prototype.findParentIdx = function(i){
  console.log('Heap.findParentIdx :: START');
  var idx = 0;
  var len = this.arr.length;
  if (i < len && i > 0){
    return Math.floor((i-1)/2);
  }
  
  return idx;
};

Heap.prototype.swapElementsByPos = function(i, y){
  console.log('Heap.swapElementsByPos :: START');
  var len = this.arr.length;
  var tmp;
  if (i < len && y < len){
    tmp = this.arr[i];
    this.arr[i] = this.arr[y];
    this.arr[y] = tmp;
  }
};

Heap.prototype.print = function(){
  console.log('heap is', this.arr);
};
