// 53. Maximum Subarray
// Medium
// 27.2K
// 1.2K
// company
// Amazon
// company
// Apple
// company
// Cisco
// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

//p: we are given nums, an array of integers that can be both negative or positive.
//r: we must return a number that represents the largest sum of a subarray within nums. the subarray can be as long as nums. note that a SUBARRAY is a contiguous non-empty sequence within an array.
//e: in the above examples, we can see that the subarray can be a part of nums or the entire array.

//p: we can also start the subarray by finding the first positive integer, since any negative value will just hinder the sum. another way is to remove negative integers from the start and end of the array. within this array, we can try to find any pair of large negative numbers that surround a smaller subarray. we can then return only the smaller subarray which will not have the larger negative numbers. if there is no pair, we can then return the original subarray. we must also consider the fact that if most or all of the values of nums is negative, we must still return a subarray which is at least two integers long.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var maxSubArray = function (nums) {};
