/*
var TreeNode = function(val){
	this.val = val;
	this.neighbors = [];
};
*/

var visitEl = function(val){
	console.log('el is visited', val);
};

var treeLevelTraversal = function(root){
	var visited = [];
	visited.push(root);
	
	while (visited.length > 0){
		var el = visited.shift();
		visitEl(el.val);
		
		var neighborsLen = el.neighbors.length;
		for (var i=0; i<neighborsLen; i++){
			visited.push(el.neighbors[i]);
		}
	}
};
