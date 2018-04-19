/*
Most Common Word
Given a paragraph and a list of banned words, return the most frequent word 
that is not in the list of banned words.  It is guaranteed there is at least one 
word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  
Words in the paragraph are not case sensitive.  The answer is in lowercase.

Example:
Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
 

Note:

1 <= paragraph.length <= 1000.
1 <= banned.length <= 100.
1 <= banned[i].length <= 10.
The answer is unique, and written in lowercase (even if its occurrences in 
paragraph may have uppercase symbols, and even if it is a proper noun.)
paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
Different words in paragraph are always separated by a space.
There are no hyphens or hyphenated words.
Words only consist of letters, never apostrophes or other punctuation symbols.
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    //creating map with all words in lowercase as key and value as time of use
    var map = {};
    var tmpKey = '';
    for (var i=0; i<paragraph.length; i++){
        if (paragraph[i] === ' ' || 
            paragraph[i] === '!' || 
            paragraph[i] === '?' ||
            paragraph[i] === "'" ||
            paragraph[i] === ',' || 
            paragraph[i] === ';' ||
            paragraph[i] === '.') {
            //to prevent creating empty key
            if (tmpKey !== '') {
                if(map[tmpKey]) {
                    map[tmpKey] += 1;
                } else {
                    map[tmpKey] = 1;
                }
            }
            
            tmpKey = '';
        } else {
            tmpKey += paragraph[i].toLowerCase();
        }
    }
    
    //leftovers
    if (tmpKey !== '') {
        if(map[tmpKey]) {
            map[tmpKey] += 1;
        } else {
            map[tmpKey] = 1;
        }
        tmpKey = '';
    }
    
    //now removing banned words from our map
    for (var b = 0; b < banned.length; b++) {
        if (map[banned[b]]) {
            delete map[banned[b]];
        }
    }
    
    //now searching for the most common word
    var maxLen = 0;
    var maxWord;
    for (var key in map) {
        if (map[key] > maxLen) {
            maxLen = map[key];
            maxWord = key;
        }
    }
    
    return maxWord;
            
};
