/*
 * 2021-08-17 20:10:10
 * @create by: zj
 * @Description: 
 */

// 1.数组
/**
 * @description: 二分查找
 * @param {Array} nums
 * @param {number} target
 
 */
 function binarySearch(nums: Int16Array, target: number): number {
  let right: number = nums.length - 1;
  let left: number = 0;
  while (left <= right) {
    const mid: number = left + (right - left >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
let nums: Int16Array = new Int16Array([1, 2, 3, 4, 5, 6])
// console.log(binarySearch(nums, 4))

/**
 * @description: 最左侧~二分查找
 * @param {number} nums
 * @param {number} target
 
 */
function binarySearchL(nums: number[], target: number): number {
  let right: number = nums.length - 1;
  let left: number = 0;
  while (left <= right) {
    const mid: number = left + (right - left >>> 1)
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}
// console.log(binarySearch2([1, 2, 4, 4, 4, 6], 4))

/**
 * @description: 最右侧~二分查找
 * @param {number} nums
 * @param {number} target
 
 */
function binarySearchR(nums: number[], target: number): number {
  let right: number = nums.length - 1;
  let left: number = 0;
  while (left <= right) {
    const mid = left + (right - left >>> 1)
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right
}
// console.log(binarySearchR([1, 2, 4, 4, 5, 6], 4))