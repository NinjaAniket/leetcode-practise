// 242. Valid Anagram
// Given two strings s and t , write a function to determine if t is an anagram of s.

var isAnagram = function (s, t) {
  if (checkAnagram(s) == checkAnagram(t)) {
    return true;
  } else {
    return false;
  }
};

function checkAnagram(str) {
  return str.toLowerCase().split("").sort().join("");
}

checkAnagram("anagram", "nagaram");

isAnagram("rat", "art");
