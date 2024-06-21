/**
 * Given an integer array nums, find a subarray that has the largest product, and return the product.
 * It is guaranteed that the answer will fit in a 32-bit integer.
 * 
 * Example 1:
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * 
 * Example 2:
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let maxSoFar = nums[0],
    minSoFar = nums[0],
    result = maxSoFar;

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];

    let tempMax = Math.max(curr, maxSoFar * curr, minSoFar * curr);

    minSoFar = Math.min(curr, maxSoFar * curr, minSoFar * curr);

    maxSoFar = tempMax;

    result = Math.max(maxSoFar, result);
  }

  return result;
};
