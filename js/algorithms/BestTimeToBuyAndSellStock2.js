/*
Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). 
However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var profit = 0;
  var len = prices.length;
  var tmp;
  
  for (var i=0; i<len-1; i++){
      tmp = prices[i+1] - prices[i];
      if( tmp > 0){
          profit += tmp;
      }
  }
  
  return profit;
};
