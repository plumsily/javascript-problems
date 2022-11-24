// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// Example 2:

// Input: n = 1, bad = 1
// Output: 1

// Constraints:

// 1 <= bad <= n <= 231 - 1

// /**
//  * Definition for isBadVersion()
//  *
//  * @param {integer} version number
//  * @return {boolean} whether the version is bad
//  * isBadVersion = function(version) {
//  *     ...
//  * };
//  */

// /**
//  * @param {function} isBadVersion()
//  * @return {function}
//  */

//P: we are given an API that returns whether the integer passed in is a bad version. the parameters given into the solution function is n and bad, where n is the version numbers and bad is the first one that is bad. bad and n is greater than or equal to 1, which means in the case of n=1, bad=1. bad will also be less than or equal to n, so we know that the last value will always be bad.
//R: we must return the first bad version as an integer. where isbadversion will be called in order to determine whether the version is bad. this will be assumedly checked with the input bad version.
//E: in ex 1, we are given 5 total version numbers. the solution function will check the version numbers by passing it to isbadversion and if it's the first bad version from a good version, it will return the first bad version.
//P: in order to minimize calls to isbadversion, we can do a binary search to split the searches to log(n). we check the end cases first to make sure there exists a bad version. if the first version is bad, then we know the first bad version. if not, we check the middle. if the middle is bad, then we know it is in the first half. if not, then we know it is in the last half. we keep doing a binary search with two variables until we find that low is false and high is true.
var solution = function (isBadVersion) {
  // /**
  //  * @param {integer} n Total versions
  //  * @return {integer} The first bad version
  //  */
  return function (n) {
    let low = 1;
    let high = n;
    while (low < high) {
      let mid = low + Math.floor((high - low) / 2); //lower half
      if (isBadVersion(mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  };
};
