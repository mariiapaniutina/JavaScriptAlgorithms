/*
Ransom Note

 Given  an  arbitrary  ransom  note  string  and  another  string  containing  letters from  all  the  magazines,  
 write  a  function  that  will  return  true  if  the  ransom   note  can  be  constructed  from  the  magazines ;  
 otherwise,  it  will  return  false.   

Each  letter  in  the  magazine  string  can  only  be  used  once  in  your  ransom  note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var getRansomMap = function(s){
    var map = {};
    for (var i=0; i<s.length; i++){
      if (!map[s[i]]){
        map[s[i]] = 1;
      } else {
        map[s[i]]++;
      }
    }

    return map;
  };
    
  var ransomMap = getRansomMap(ransomNote);
  
  //cleaning chars from ransom note
  for (var i=0; i<magazine.length; i++){
    if (ransomMap[magazine[i]] && ransomMap[magazine[i]] > 0){
      ransomMap[magazine[i]]--;
    }
  }
  
  //checking if some chars from ransom note are not using
  for (var key in ransomMap){
    if (ransomMap[key] > 0){
      return false;
    }
  }
  
  return true;
    
};
