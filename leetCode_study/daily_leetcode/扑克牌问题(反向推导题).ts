// 魔术师手中有一堆扑克牌，观众不知道它的顺序，接下来魔术师：

// 从牌顶拿出一张牌， 放到桌子上
// 再从牌顶拿一张牌， 放在手上牌的底部
// 如此往复（不断重复以上两步），直到魔术师手上的牌全部都放到了桌子上。

// 此时，桌子上的牌顺序为：(牌顶) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌底)。

// 问：原来魔术师手上牌的顺序，用函数实现。


// 解答：

// 反向操作为: origin 最后一个放到自己的第一个前面， result 拿出第一个插入 origin 前面，如此重复；

function cale(arr: Array<number>): Array<number> {
    const origin: Array<number> = []
    const n: number = arr.length
    for(let i = 0; i < n; i++) {
        if(origin.length > 0) {
            const num: number = origin.pop()
            origin.unshift(num)
        }
        origin.unshift(arr[i])
    }
    return origin
}