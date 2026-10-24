// Write a program that calculates the total price of all the items.

const prices = [150, 250, 100, 500];
let total = 0;

for (let check = 0 ; check < prices.length ; check++) total += prices[check];

console.log(total);
