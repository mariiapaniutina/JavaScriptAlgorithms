/* 
Evaluate Reverse Polish Notation 

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:

  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6

 */


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  var arr = [];
  var operand = function(x){
    if(x=='*' || x=='/' || x=='+' || x=='-'){
      return true;
    } else {
      return false;
    }
  }
  
  var tmp = 0;
  for (var i=0; i<tokens.length; i++){
    if (operand(tokens[i])){
      if(tokens[i] == '/'){
        tmp = arr[arr.length-2] / arr[arr.length-1];
        //because .floor doesnt work correctly for negative numbers, we will do next
        if(tmp<0){
          tmp = Math.ceil(tmp);
        } else {
          tmp = Math.floor(tmp);
        }
        arr[arr.length-2]=tmp;
        
        arr.length = arr.length-1;
      }
      if(tokens[i] == '*'){
        tmp = arr[arr.length-2] * arr[arr.length-1];
        arr[arr.length-2]=tmp;
        arr.length = arr.length-1;
      }
      if(tokens[i] == '+'){
        tmp = arr[arr.length-2] + arr[arr.length-1];
        arr[arr.length-2]=tmp;
        arr.length = arr.length-1;
      }
      if(tokens[i] == '-'){
        tmp = arr[arr.length-2] - arr[arr.length-1];
        arr[arr.length-2]=tmp;
        arr.length = arr.length-1;
      }
      //nsole.log(tokens[i]);
      //nsole.log(arr);
    } else {
      arr.push(+tokens[i]);
    } 
  }
  
  return arr[0];
  
};

