/*
 * 2021-08-17 20:07:56
 * @create by: zj
 * @Description: 
 */

/**
 * @description: 冒泡排序
 * @param {Array} nums
 
 */
 function bubbleSort(nums: number[]): number[] {
  const n: number = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let flag: boolean = true;
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j + 1] < nums[j]) {
        flag = false;
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
      }
    }
    if (flag) break
  }
  return nums;
}
// console.log(bubbleSort([3, 44, 38, 5, 47, 15,36,26,2,46,4,19,48]));

/**
 * @description: 选择排序
 * @param {Array} nums
 
 */
function selectSort(nums: Array<number>): Array<number> {
  const n: number = nums.length;
  let minI: number
  for (let i = 0; i < n - 1; i++) {
    minI = i
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minI]) {
        minI = j
      }
    }
    [nums[minI], nums[i]] = [nums[i], nums[minI]]
  }
  return nums;
}
// console.log(selectSort([1, 5, 6, 4, 3, 2]),66666)

/**
 * @description: 插入排序
 * @param {number} nums
 
 */
function insertSort(nums: number[]): number[] {
  const n: number = nums.length;
  for (let i = 1; i < n; i++) {
    while (i > 0 && nums[i - 1] > nums[i]) {
      [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]]
      i--
    }
  }
  return nums
}
// console.log(insertSort([1, 5, 6, 4, 3, 2]), 1111111111)

/**
 * @description: 归并排序
 * @param {number} nums
 
 */
function mergeSort(nums: number[]): number[] {
  let Merge = function (nums1: number[], nums2: number[]): number[] {
    const n1: number = nums1.length, n2: number = nums2.length;
    let res: number[] = []
    let p1: number = 0, p2: number = 0;
    while (p1 < n1 && p2 < n2) {
      if (nums1[p1] < nums2[p2]) {
        res.push(nums1[p1])
        p1++
      } else {
        res.push(nums2[p2])
        p2++
      }
    }
    while (p1 < n1) {
      res.push(nums1[p1])
      p1++
    }
    while (p2 < n2) {
      res.push(nums2[p2])
      p2++
    }
    return res
  }
  const n: number = nums.length;
  if (n < 2) {
    return nums;
  }
  const middle: number = n >> 1,
    left: number[] = nums.slice(0, middle),
    right: number[] = nums.slice(middle);
  return Merge(mergeSort(left), mergeSort(right));
}
// console.log(mergeSort([1, 5, 6, 4, 3, 2]))

//快速排序
function quickSort(nums: number[]): number[] {
  const n: number = nums.length;
  const quick: Function = function (left: number, right: number): number[] {
    if (left >= right) {
      return nums
    }
    let mid: number = left;
    let i: number = left, j: number = right;
    while (i < j) {
      while (i < j && nums[j] > nums[mid]) {
        j--
      }
      while (i < j && nums[i] <= nums[mid]) {
        i++
      }
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    [nums[mid], nums[i]] = [nums[i], nums[mid]]
    quick(left, i - 1)
    quick(i + 1, right)
    return nums
  }
  return quick(0, n - 1)
}
let arr: number[] = [1, 5, 6, 4, 3, 2]
// console.log(quickSort(arr), "泡泡茶壶")

//堆排序
function heapSort(nums: number[]): number[] {
  const n: number = nums.length
  const heap: Function = function (nums: number, start: number, end: number) {
    let tmp: number = nums[start];
    let i: number = start;
    let left: number = i * 2 + 1;
    while (left < end) {
      let right: number = left + 1;
      if (right < end && nums[right] > nums[left]) {
        left = right
      }
      if (tmp < nums[left]) {
        nums[i] = nums[left];
        i = left;
        left = i * 2 + 1;
      } else {
        break
      }
    }
    nums[i] = tmp;
  }
  //建堆
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heap(nums, i, n)
  }
  //维护调整堆
  for (let i = n - 1; i >= 0; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]]
    heap(nums, 0, i)
  }
  return nums
}
// let arr: number[] = [1, 5, 6, 4, 3, 2]
// console.log(heapSort(arr), "泡泡茶壶")
//桶排序
function bucketSort(nums: number[]): number[] {
  const n: number = nums.length;
  let max: number = Math.max(...nums);
  let bucket: number[] = new Array(max + 1).fill(0);
  for (let i = 0; i < n; i++) {
    bucket[nums[i]]++
  }
  let res: number[] = []
  for (let i = 0; i < max + 1; i++) {
    while (bucket[i]) {
      res.push(i)
      bucket[i]--
    }
  }
  return res
}
// let arr: number[] = [1, 5, 6, 4, 4, 3, 2]
// console.log(bucketSort(arr), "泡泡茶壶")