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
//r: we must return a boolean true or false based on if all the letters to make ransomNote can be taken from magazine, but only once per letter.
//e: in the above examples, we see that all letters in ransomNote is unique and must be mapped to a letter in magazine. thus, there can be no repeated letters in ransomNote from one letter in magazine. letters can be unused in magazine as long as all the letters for ransomNote is found.
//p: we construct a hash table, which contains key value pairs for the letter and index for magazine based on the letters in ransomNote. we reject adding values into the hashtable if the index is repeated, and pass false. if the hashtable is the same length as ransomNote, then we know all letters can be traced to magazine uniquely and pass true.
//alternatively, we can create a hashmap out of magazine and subtract character counts from it as we compare it to ransomNote.
var canConstruct = function (ransomNote, magazine) {
  const map = {};
  for (let letter in magazine) {
    if (!map[letter]) {
      map[letter] == 0;
    }
    map[letter]++;
  }

  for (let letter in ransomNote) {
    if (!map[letter]) {
      return false;
    }
    map[letter]--;
  }
  return true;
};

// if (ransomNote.length > magazine.length) {
//     return false;
//   }

//   let hashTable = {};
//   for (let i = 0; i < magazine.length; i++) {
//     if (!Object.hasOwn(hashTable, magazine[i])) {
//       hashTable[magazine[i]] = magazine
//         .split("")
//         .filter((x) => x == magazine[i]).length;
//     }
//   }

//   for (let j = 0; j < ransomNote.length; j++) {
//     if (Object.keys(hashTable).includes(ransomNote[j])) {
//       if (hashTable[ransomNote[j]] == 0) {
//         return false;
//       }
//       hashTable[ransomNote[j]] -= 1;
//     } else {
//       return false;
//     }
//   }
//   console.log(hashTable);
//   return true;

//   let hashTable = {};
//   for (let i = 0; i < magazine.length; i++) {
//     if (ransomNote.includes(magazine[i])) {
//       console.log(i);
//       if (!Object.hasOwn(hashTable, i)) {
//         if (
//           Object.values(hashTable).filter((x) => x == magazine[i]).length <
//           ransomNote.split("").filter((x) => x == magazine[i]).length
//         ) {
//           hashTable[i] = magazine[i];
//           if (Object.keys(hashTable).length == ransomNote.length) {
//             return true;
//           }
//         }
//       } else {
//         return false;
//       }
//     }
//   }
//   return false;
// };

console.log(canConstruct("a", "b"));
// console.log(
//   canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
// );
