// export {}
const hello: unknown = "Hello World"

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

//链表
//节点
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
//构造链表
const tailNode: ListNode = new ListNode(5);
const node3: ListNode = new ListNode(4, tailNode);
const node2: ListNode = new ListNode(3, node3);
const node1: ListNode = new ListNode(2, node2);
const root: ListNode = new ListNode(1, node1);
// console.dir(root, { depth: 4 });

//反转链表
function reveseLink(head: ListNode): ListNode {
  let node: ListNode = head;
  let cur: ListNode = head, pre: ListNode = head.next;
  return head
}

//栈与队列 push/pop push/shift

//递归
function dFibola(n: number): number {
  if (n < 2) {
    return n
  }
  return dFibola(n - 1) + dFibola(n - 2)
}
// console.log(dFibola(3), "泡泡茶壶");


//动态规划
//斐波拉契数
function fibola(n: number): number {
  let dp: Int32Array = new Int32Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
}
console.log(fibola(4), "泡泡茶壶");


function frogSteps(n: number): number {
  if (n <= 2) {
    return n
  }
  return frogSteps(n - 1) + frogSteps(n - 2)
}
// console.log(frogSteps(4), "青蛙跳台阶");


//最长增子序列
function maxChildLen(nums: number[]): number {
  const n: number = nums.length
  let dp: number[] = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  console.log(dp);
  return Math.max(...dp)
}
// console.log(maxChildLen([8, 2, 5, 3, 7, 11, 6]), "泡泡茶壶");


function dfs(root) {
  let stack = []
  stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
}