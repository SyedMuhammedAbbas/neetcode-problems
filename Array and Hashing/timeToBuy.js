const prices = [2, 4, 1];

// find day to buy, on that day price should be min
// find the future day to sell, where price should be max
// profit = max - min

const maxProfit = (prices) => {
  let minPrice = prices[0];
  let profit;

  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
      if (i === prices.length - 1) {
        return 0;
      }
    } else {
      const currentProfit = prices[i] - minPrice;
      if (currentProfit > profit) {
        profit = currentProfit; // Update the max profit if we find a better one.
      }
    }
  }

  return profit;
};

console.log(maxProfit(prices));
