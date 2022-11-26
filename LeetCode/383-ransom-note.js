// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

// /**
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  */

//p: magazine is a string that should contain all the letters needed to make ransomNote.
//r:
//e: in the above examples, we see that all letters in ransomNote is unique and must be mapped to a letter in magazine. thus, there can be no repeated letters in ransomNote from one letter in magazine. letters can be unused in magazine as long as all the letters for ransomNote is found.
//p:
var canConstruct = function (ransomNote, magazine) {};
