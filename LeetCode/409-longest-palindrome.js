// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

// /**
//  * @param {string} s
//  * @return {number}
//  */

//p: we are given an input, s, that is a string that is at least one character long. s contains both lowercase and uppercase letters. lowercase and uppercase are NOT treated as the same letter.
//r: we must return the length, a number, of the longest palindrome that can be constructed with the letters in s. a palindrome is a word that is the same reversed.
//e: in the examples above, we see that out of the 8 letters in s, the longest palindrome is 7. a word of one letter is a palindrome of itself, so the longest is 1.
//p: since we don't have to return the actual palindrome itself, we just need to know the requirements of a palindrome. one req is that half of the word must be equal to the reverse of the other half. this means that they must map, or be in pairs. with the exception of an odd numbered palindrome where the middle character can be a single. thus, we can use a hash table to count the instances of each letter in s, taking into consideration case. if the count is even, then we know that it can be mapped to either half. this will make it a palindrome. we can allow one odd numbered count to cover odd numbered palindromes. if there are more than one odd numbered count, then it is not a palindrome since all letters must be paired.
var longestPalindrome = function (s) {
  let hashTable = {};
  let count = 0;
  if (s.length == 1) {
    return 1;
  }
  for (let letter of s) {
    hashTable[letter] = (hashTable[letter] || 0) + 1;
    if (hashTable[letter] % 2 == 0) {
      count += 2;
    }
  }
  return s.length > count ? count + 1 : count;

  //   let hashTable = {};
  //   if (s.length == 1) {
  //     return 1;
  //   }
  //   for (let i = 0; i < s.length; i++) {
  //     if (Object.hasOwn(hashTable, s[i])) {
  //       hashTable[s[i]]++;
  //     } else {
  //       hashTable[s[i]] = 1;
  //     }
  //   }
  //   let evenCount = 0;
  //   let oddCount = 0;
  //   for (const char in hashTable) {
  //     if (hashTable[char] % 2 !== 0) {
  //       oddCount = 1;

  //       evenCount += hashTable[char] - 1;
  //     } else {
  //       evenCount += hashTable[char];
  //     }
  //   }
  //   console.log(hashTable, evenCount, oddCount);
  //   return evenCount + oddCount;
};

console.log(
  longestPalindrome(
    "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  )
);
