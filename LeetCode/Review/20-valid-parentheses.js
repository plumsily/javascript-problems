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

//p: the parameters are a string, s, that contains only of (){}[]. they will be either completely closed or left open.
//r: we must return a boolean to confirm if all the brackets are closed as true or false if one is dangling.
//e: in the above examples, we can see that a closed bracket must be of the same type.
//p: here, we can see that it would be useful to use a stack array, where each value is added. we can then compare the next value to the top of the stack to see if it will complete. if it can close it, we remove the top value from the stack using shift. if it does not complete, we can add that value to the stack. we use a complementary hash map object that contains the corresponding close bracket. thus, if we can match the correct complement from the top of the stack to the current value in the loop of s, we can remove it from the stack.

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function (s) {
  const map = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    //check whether if it's an opening bracket
    if (Object.hasOwn(map, s[i])) {
      stack.unshift(s[i]);
      //else if it's a closing bracket, compare it to the stack
    } else {
      //if the stack is a complement to the current value, we remove the top of the stack
      if (map[stack[0]] === s[i]) {
        stack.shift();
      } else {
        //we know we can return false here since the top of the stack represents the innermost bracket. if that cannot close, then we already know it won't pass.
        return false;
      }
    }
  }
  return stack.length === 0;
};
