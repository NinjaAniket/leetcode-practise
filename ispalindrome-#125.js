/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const sanitizedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = sanitizedString.length - 1;
  while (left < right) {
    if (sanitizedString[left] !== sanitizedString[right]) return false;
    left++;
    right--;
  }

  return true;
};

isPalindrome("ab_a");

// time complexity =>>  O(n / 2)
// space complexity =>> O(1) constant space
