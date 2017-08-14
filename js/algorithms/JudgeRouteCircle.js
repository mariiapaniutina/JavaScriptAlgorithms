/**
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, 
judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. 
The valid robot moves are R (Right), L (Left), U (Up) and D (down). 
The output should be true or false representing whether the robot makes a circle.

Example 1:
```
Input: "UD"
Output: true
```

Example 2:
```
Input: "LL"
Output: false
```
**/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    //counter for `UP` and `DOWN`, they are cancelling each other
    var UD = 0;
    //counter for `LEFT` and `RIGHT`, they are cancelling each other
    var LF = 0;
    
    var len = moves.length;
    
    for (var i = 0; i < len; i++){
        if (moves[i] === 'U'){
            UD ++;
        } else if (moves[i] === 'D'){
            UD--;
        } else if (moves[i] === 'L'){
            LF++;
        } else {
            LF--;
        }
    }
    
    return LF === 0 && UD === 0;
};
