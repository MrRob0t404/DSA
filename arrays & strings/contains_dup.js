/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let freq = {}

    for(let i=0; i< nums.length; i++){ 
        if(freq[nums[i]] === undefined){ 
            freq[nums[i]] = 1
        }else{ 
            return true
        }
    }

    return false
};