// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */

//Parameters: s and t are strings, all lowercase English letters.
//Return: true or false
//Exampe: anagram vs nagaram is true. rat vs car is false.
//Pseudocode: Reorder both strings by sorting them in the same order. Then compare if the strings match.

var isAnagram = function (s, t) {
  const reorderS = s.split("").sort().join("");
  const reorderT = t.split("").sort().join("");
  if (reorderS === reorderT) {
    return true;
  }
  return false;
};

console.log(isAnagram("car", "rat"));
