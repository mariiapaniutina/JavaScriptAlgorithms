/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cacheCapacity = capacity;

  //constructor for Doubly Linked list
  //with minimum required methods
  var DDList = function() {

    //constructor for list node
    this.Node = function(key, val) {
      this.key = key;
      this.val = val;
      this.prev = null;
      this.next = null;
    };

    //first element of list
    this.listHead = null;

    //last element of list
    this.listTail = null;

    //size of linked list
    this.listSize = 0;

    //map which provides immidiate access to elements in list (via key)
    this.listKeyMap = {};
  };

  //pushing new nodes in front of list
  DDList.prototype.pushFront = function(key, val) {
    var nodeToAdd = new this.Node(key, val);

    //if key is already presenting in map and in list => error
    if (this.listKeyMap[key]) {
      return -1;
    }

    //list is empty
    if (this.listSize === 0) {
      this.listHead = nodeToAdd;
      this.listTail = nodeToAdd;

    //list is not empty, attaching to front  
    } else {
      this.listHead.prev = nodeToAdd;
      nodeToAdd.next = this.listHead;
      this.listHead = nodeToAdd;
    }

    this.listKeyMap[key] = nodeToAdd;
    this.listSize++;
    
    return nodeToAdd;
  };

  //removing tail from list
  DDList.prototype.popBack = function() {
    //list is empty => do nothing
    if (this.listSize === 0) {
      return;
    }

    var tailKey = this.listTail.key;

    //list contains one element - just removing it
    if (this.listSize === 1) {
      this.listHead = null;
      this.listTail = null;

    //list contains more than two elements  
    } else {
      //saving reference to tail
      var oldTail = this.listTail;

      //saving reference to new tail
      var newTail = oldTail.prev;

      newTail.next = null;
      this.listTail = newTail;
      oldTail.prev = null;
    }

    delete this.listKeyMap[tailKey];
    this.listSize--;
  };

  //removing head from list
  DDList.prototype.popFront = function() {
    //if list is empty => do nothing
    if (this.listSize === 0) {
      return;
    }

    var headKey = this.listHead.key;

    //list contains one element - just removing it
    if (this.listSize === 1) {
      this.listHead = null;
      this.listTail = null;

    //list contains more than two elements  
    } else {
      var oldHead = this.listHead;
      var newHead = oldHead.next;

      newHead.prev = null;
      this.listHead = newHead;
    }

    delete this.listKeyMap[headKey];
    this.listSize--;
  };

  DDList.prototype.removeAtKey = function(key) {
    //if list does not have such key => error
    if (!this.listKeyMap[key]) {
      return -1;
    }

    var nodeToRemove = this.listKeyMap[key];
    var nodeFrom = nodeToRemove.prev;
    var nodeTo = nodeToRemove.next;

    //list contains one element - just remove it
    if (this.listSize === 1) {
      this.listHead = null;
      this.listTail = null;

      delete this.listKeyMap[key];
      this.listSize--;

    //list contains more than two elements and need to remove tail   
    } else if (this.listTail.key === key) {
      this.popBack();

    //list contains more than two elements and need to remove head   
    } else if (this.listHead.key === key) {
      this.popFront();

    //list contains more than two elements and need to in the middle of list  
    } else {
      nodeFrom.next = nodeTo;
      nodeTo.prev = nodeFrom;
      nodeToRemove.next = null;
      nodeToRemove.prev = null;

      delete this.listKeyMap[key];
      this.listSize--;
    }
  };
  
  DDList.prototype.getKeysMap = function(){
    return this.listKeyMap;
  };

  DDList.prototype.getListHead = function() {
    return this.listHead;
  };
  
  DDList.prototype.getListTail = function() {
    return this.listTail;
  };
  
  DDList.prototype.getListSize = function(){
    return this.listSize;
  };

  this.cacheList = new DDList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  
  var cacheMap = this.cacheList.getKeysMap();
  
  //element present in list
  if (cacheMap[key]) {
    var val = cacheMap[key].val;
    
    //remove element from list
    this.cacheList.removeAtKey(key);

    //and push it to front
    var nodeToAdd = this.cacheList.pushFront(key, val);

    return val;

  //no element in list => eror  
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  var cacheMap = this.cacheList.getKeysMap();

  //there is room for putting new element to list
  if (this.cacheList.getListSize() < this.cacheCapacity) {

    //removing element, if it has the same key as new one
    if (cacheMap[key]){
      this.cacheList.removeAtKey(key);
    }

    //push new element in front of list
    this.cacheList.pushFront(key, value);
    
  //no room to put new element  
  } else {
    //element is already presented in list
    if (cacheMap[key]){
      var nodeKey = key;

    //there is no such element in list, taking last one  
    } else {
      var nodeKey = this.cacheList.getListTail().key;
    }
    
    //removing element from list by key    
    this.cacheList.removeAtKey(nodeKey);

    //put it in front of list
    this.cacheList.pushFront(key, value);
  }

};
