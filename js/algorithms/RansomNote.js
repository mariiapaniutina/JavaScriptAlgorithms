/*
Ransom Note

 Given  an  arbitrary  ransom  note  string  and  another  string  containing  letters from  all  the  magazines,  
 write  a  function  that  will  return  true  if  the  ransom   note  can  be  constructed  from  the  magazines ; 
 otherwise,  it  will  return  false.   

Each  letter  in  the magazine  string  can  only  be  used  once  in  your  ransom  note.

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
    var ransomMap = function(ransomNote){
        var map = {};
        for (var i=0; i<ransomNote.length; i++){
            if (map[ransomNote[i]] === undefined){
                map[ransomNote[i]] = 1;
            } else {
                map[ransomNote[i]] += 1;
            }
        }
        return map;
    };
    
    var getObjectLength = function(obj){
        var len = 0;
        for (var prop in obj){
            len += 1;
        }
        return len;
    };
    
    var ransomMagazineUse = function(ransomMap, magazine){
        var result;
        for (var i=0; i<magazine.length; i++){
            if(ransomMap[magazine[i]] !== undefined && ransomMap[magazine[i]] > 0){
                ransomMap[magazine[i]] -= 1;
                
                if(ransomMap[magazine[i]] === 0){
                    delete ransomMap[magazine[i]];
                }
            }
        }
        result = getObjectLength(ransomMap);
        return result === 0;
    };
    
    //usage
    var map = ransomMap(ransomNote);
    var canUseResult = ransomMagazineUse(map, magazine);
  
    return canUseResult;
};
