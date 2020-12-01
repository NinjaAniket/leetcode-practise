// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// 35. Search Insert Position
// Input: nums = [1,3,5,6], target = 5
// Output: 2

function BinarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let midIndex = Math.floor((high + low) / 2);
    if (nums[midIndex] === target) {
      return midIndex;
    } else if (target > nums[midIndex]) {
      low = midIndex + 1;
    } else {
      high = midIndex - 1;
    }
  }

  return low;
}

BinarySearch([1, 3, 5, 6], 5);

//   timecomplexity = O(log n)
// space complexity = O(1)
