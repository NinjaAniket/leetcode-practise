// Leetcode No 47
// Input => ["eat","tea","tan","ate","nat","bat"]
// Output =>// [["eat","tea","ate"],["tan","nat"],["bat"]]
function groupAnagrams(str) {
  const hashMap = {};

  for (let x of str) {
    const sortedSTR = x.split("").sort().join("");
    if (hashMap[sortedSTR]) hashMap[sortedSTR].push(x);
    else hashMap[sortedSTR] = [x];
  }

  return Object.values(hashMap);
}

groupAnagrams(["eat", "tea", "as", "sd"]);

// time-complexity => time complexity of sort function is "n log n"
// overall complexity => O (n *  m log m) => n is length of strs and m is longest str

//for space complexity anagrams gonna be unique so, n keys in hashTable i.e length of annagrams
//space complexity => O(n) linear space
