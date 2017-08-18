/*
Keyboard Row
Given a List of words, return the words that can be typed using letters 
of alphabet on only one row's of American keyboard.

Example 1:
```
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
```

Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    //Map with all alphabet letters in keyboard row
    var map = {
        //first row
        q: 1,
        w: 1,
        e: 1,
        r: 1,
        t: 1,
        y: 1,
        u: 1,
        i: 1,
        o: 1,
        p: 1,
        
        //second row
        a: 2,
        s: 2,
        d: 2,
        f: 2,
        g: 2,
        h: 2,
        j: 2,
        k: 2,
        l: 2,
        
        //third row
        z: 3,
        x: 3,
        c: 3,
        v: 3,
        b: 3,
        n: 3,
        m: 3
    };
    
    //the letters within one row
    var results = [];
    
    for (var i = 0; i < words.length; i++){
        var row;
        var word = words[i];
        //assuming that current words letters are within the same row
        //pushing word into array of results
        results.push(word);
        
        //going through letters with word
        for (var j = 0; j < word.length; j++){
            //looking what row idx is 
            var currLetterRow = map[word[j].toLowerCase()];
            
            if (j === 0){
                //specifying first idx of letter as correct idx for all letters within word
                row = currLetterRow;
            } else {
                //if current (not first) idx is different that first,
                // removing word from results array and breaking loop
                if (currLetterRow !== row){
                    results.pop();
                    break;
                }
            }
        }
    }
    
    return results;
};
