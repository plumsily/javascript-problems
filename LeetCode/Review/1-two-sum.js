// 1. Two Sum
// Easy
// 41.8K
// 1.4K
// company
// Amazon
// company
// Adobe
// company
// Apple
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

//p: the parameters are nums, an array of integers, and a target of integer value in the same range as nums' elements.
//r: we must return an array of two integers that point to the indices of the elements of nums that add up to target. only one valid answer exists within nums. further, we cannot use the same element twice. independent of order.
//e: in the above examples, we see that we return a 2 element array of indices that add up to the target value.
//p: this is a good scenario to use a hash map, where we store the index and value of the elements as we traverse the nums array. we then subtract the current element from the target and store that in a temporary variable. we can then check if the hash map object already contains an item that has the temporary variable value, with hasOwn. if this returns true, we can immediately return the index of the temporary variable and the index from the hash map of its complement. otherwise, we add the value into the hash map.

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let x = target - cur;
    if (Object.hasOwn(map, x)) {
      return [i, map[x]];
    }
    map[cur] = i;
  }
};
