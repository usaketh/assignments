/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const s1 = str1.toLowerCase().split('');
  const s2 = str2.toLowerCase().split('');

    s1.sort((a, b) => a.localeCompare(b));
    s2.sort((a, b) => a.localeCompare(b));

    return s1.join('') === s2.join('');
}

module.exports = isAnagram;
