// 20. Valid Parentheses
// Easy
// 17.4K
// 938
// company
// Amazon
// company
// BlackRock
// company
// Adobe
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function (s) {
  const map = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (Object.hasOwn(map, s[i])) {
      stack.unshift(s[i]);
    } else {
      if (map[stack[0]] === s[i]) {
        stack.shift();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
