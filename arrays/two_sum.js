/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const hashMap = {}
    for(let i = 0; i < nums.length; i++) {
        if(hashMap[target - nums[i]] !== undefined){
           return [i, hashMap[target - nums[i]]]
        }
        hashMap[nums[i]] = i
    }
    return arrPos
}