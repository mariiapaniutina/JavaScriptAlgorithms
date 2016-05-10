/*
Best Time to Buy and Sell Stock 

Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), 
design an algorithm to find the maximum profit.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var len = prices.length;
  var curr = prices[0];
  var res = 0;
  
  for (var i=0; i< prices.length; i++){
    if (prices[i] > curr &&(prices[i]-curr > res) ){
      res = prices[i] - curr;
    }
    if (prices[i] < curr){
      curr = prices[i];
    }
  }
  
  return res;
};
