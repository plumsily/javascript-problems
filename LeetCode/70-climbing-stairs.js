// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45

// /**
//  * @param {number} n
//  * @return {number}
//  */

//p: we are given a number, n.
//r: we must return the total number of permutations of steps we can use to get to the number, n. we can only take 1 or 2 steps at a time, so we are counting the number of unique combinations of 1 and 2 steps taken to get to n.
//e: in the above examples, we can see that any number of 1 or 2 steps can be taken at a time to get to n.
//p: if we approach it at the n-th case, we know that the maximum number of 1 steps that would fit in n is n. the max number of 2 steps is n/2. since we know that the returning number is always at least the max number of 1 steps, n, we know that it is at least 1. from there, we know that we can replace all the 1 steps at some point with a 2 step. since the we can repeat a 2 step as many times as we want in the order, this is basically a permutation with repeats allowed. order matters in that they must still be unique. thus, the equation to find the total number of permutations allowed is n^r where n is the number of things to choose from and r is the total number of slots. here, we will treat a slot as either being a 1 or 2 step, making the total number of slots for this permutation: n/2. therefore, r = n/2 and n = 2. this means that the total number of permutations is 2^(n/2).
//in the case where n is not even, there will always be a 1 step in addition to the total number of permutations. this 1 step can be in front of or behind the permutations, so, not counting the case of all 1 steps, we know there are (2^(n/2)-1)*2 permutations with the bounding 1 steps. for the cases where the 1 step is sandwiched between 2 steps, we add additional counts equal to n/2-1 where that is equal to the number of spaces between each 2 step slot (n/2).
var climbStairs = function (n) {
  if (n == 1) {
    return 1;
  }
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

console.log(climbStairs(6));
