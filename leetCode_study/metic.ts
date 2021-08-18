/*
 * 2021-06-03 13:07:08
 * @create by: zj
 * @Description: 
 */
// export {}
const hello: unknown = "Hello World"



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