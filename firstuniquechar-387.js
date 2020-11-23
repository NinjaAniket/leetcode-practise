//leetcode #387

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
//bruteforce soln

// function firstUniqueChar(str) {
//     const hashMap = {};

//     for(let char of str){
//         if(hashMap[char]) {
//             hashMap[char]++;
//         } else {
//             hashMap[char] = 1
//         }

//     }

//     for(let i = 0; i<str.length; i++) {
//         if(hashMap[str[i]] == 1) return i
//     }

//     return -1
// }

// firstUniqueChar('jaames')

// time-complexity = 2n;
// space-complexity = O(1)

//optimized soln
function firstUniqueChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      i;
    }
  }
  return -1;
}

firstUniqueChar("leetcode");

// time-complexity = 2n * n;
// space-complexity = O(1)
