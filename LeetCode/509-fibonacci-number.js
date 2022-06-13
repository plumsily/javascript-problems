// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// /**
//  * @param {number} n
//  * @return {number}
//  */

//p: we are given a number, n.
//r: we are supposed to return a number that is the fibonacci value given n.
//e: in the above examples, we see that the general formula of the fibonacci sequence is f(n) = f(n-1) + f(n-2) for n>1.
//p: we first know the values of 0 and 1, which are just 0 and 1 respectively. we populate an array with these first values. then we use a for loop that starts at i=2, and proceed until n. at each loop, we add f(i-1) and f(i-2) to pusth f(i) into the array (stack). thus we will be able to return the last value for i=n.
var fib = function (n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};
