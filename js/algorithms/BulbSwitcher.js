/*
Bulb Switcher

There are n bulbs that are initially off. 
You first turn on all the bulbs. 
Then, you turn off every second bulb. 
On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). 
For the nth round, you only toggle the n'th bulb. Find how many bulbs are on after n rounds.

Example:

Given n = 3. 

At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off]. 

So you should return 1, because there is only one bulb is on.
*/

/*
Solution is:
1   + 1
2   - 2
3   - 3
4   + 2  4
5   - 5
6   - 2  3  6
7   - 7
8   - 2  4  8
9   - 3  9
10  - 2  5  10
11  - 11
12  - 2  3  4  6  12
13  - 13
14  - 2  7  14
15  - 3  5  15
16  + 2  4  8  16
17  - 17
18  - 2  3  6  9  18
19  - 19
20  - 2  4  5  10  20
21  - 3  7  21
22  - 2  11 22
23  - 23
24  - 2  3  4  6  8  12  24
25  + 5  25
*/

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};
