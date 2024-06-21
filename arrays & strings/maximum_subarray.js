/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currSum = 0, maxSum = nums[0]

    if (nums.length === 1) {
        return nums;
    }

    for (let i = 0; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = 0
        }
        
        currSum += nums[i]
        // console.log('currSum', currSum)
        maxSum = Math.max(maxSum, currSum)
        // console.log('maxSum', maxSum)
    }

    return maxSum
};