/*
Group Anagrams

Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:

    For the return value, each inner list's elements must follow the lexicographic order.
    All inputs will be in lower-case.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var ob = {};
  var result = [];
  
  //building a map with anagrams
  for (var i=0; i<strs.length; i++){
    var tmp = strs[i];
    var name = tmp.split('').sort().join('');
    
    if(!ob[name]){
      ob[name] = [];
    }
    ob[name].push(tmp);
  }
  
  //building an array with sorted groups of anagrams
  for(var param in ob){
    result.push(ob[param].sort());
  }
  
  return result;
};
