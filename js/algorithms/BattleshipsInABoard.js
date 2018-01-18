/*
Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
Example:
X..X
...X
...X
In the above board there are 2 battleships.
Invalid Example:
...X
XXXX
...X
This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
Follow up:
Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?
*/

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    var map = {};
    
    for (var i=0; i<board.length; i++){
        for (var j=0; j<board[i].length; j++){
            //looking for x
            if (board[i][j] === 'X'){
                //creating current key and its neighbors
                var key = '' + i + ':' + j;
                var lKey = '' + (i - 1) + ':' + j;
                var rKey = '' + (i + 1) + ':' + j;
                var tKey = '' + i + ':' + (j - 1);
                var bKey = '' + i + ':' + (j + 1);
                
                //if foud any neighbor, delete is and put current
                if (map[lKey]) {
                    delete map[lKey];
                } else if (map[rKey]) {
                    delete map[rKey];
                } else if (map[tKey]){
                    delete map[tKey];
                } else if (map[bKey]){
                    delete map[bKey];
                }
                
                map[key] = 1;
            }
        }
    }
        
    return Object.keys(map).length;
};
