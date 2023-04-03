function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: The sum of nums[0] = 2 and nums[1] = 7 is 9, so we return [0, 1].
