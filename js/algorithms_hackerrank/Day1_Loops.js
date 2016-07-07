/*
Objective 
In this challenge, we use for, while, and do-while loops on a given string.

Resources 
Check out the Tutorial tab to learn more.

Task

Given string  composed of lowercase letters , print all the vowels together, 
followed by all the consonants, in the order that they appear in the string.

The code for handling the input is provided for you in the editor. 
You have to complete the  function.

Note: Vowels are a, e, i, o and u.

Sample Input

javascriptloops
Sample Output

a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
*/

/**
* @params {String} s
* @returns {Void}
*/
function vowelsAndConsonants(s) {
    var vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    };
    
    var vowelsStr = '';
    var restStr = '';
    var len = s.length;
    
    for (var i=0; i<len; i++){
        if (vowels[s[i]] == true){
            vowelsStr += s[i];
        } else {
            restStr +=s[i];
        }
    }
    
    var printChar = function(str, fn){
        var len = str.length;
        for (var i=0; i<len; i++){
            fn(str[i]);
        }
    }
    
    printChar(vowelsStr, console.log);
    printChar(restStr, console.log)
}
