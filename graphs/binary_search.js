/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 2 && nums[0] === target) return 0;
  if (nums.length === 1 && nums[0] === target) return 0;
  if (nums.length === 2 && nums[1] === target) return 1;

  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  return -1;
};
