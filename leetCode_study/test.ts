/*
 * @Descripttion: 
 * @version: 
 * @Author: zj
 * @Date: 2021-03-01 08:29:12
 * @LastEditors: zj
 * @LastEditTime: 2021-03-08 08:56:22
 */

// console.log([1, 2].valueOf());
// console.log([1, 2].toString());
// console.log({ a: 1 }.valueOf());
// console.log({ a: 1 }.toString());
let n: null = null
console.log(Object.prototype.toString.call(n));


//在进行对象转换时，将优先调用toString方法，如若没有重写 toString，将调用 valueOf 方法；如果两个方法都没有重写，则按Object的toString输出。
//在进行强转字符串类型时，将优先调用 toString 方法，强转为数字时优先调用 valueOf。
//使用运算操作符的情况下，valueOf的优先级高于toString。
//  [Symbol.toPrimitive]:当一个对象转换成对应的原始值时就会调用此函数，有三种模式：string number default. 优先级高于toString和valueOf
class A {
  public name;
  public constructor(name) {
    this.name = name
  }
  toString() {
    return "toString"
  }
  valueOf() {
    return "valueOf"
  }
  [Symbol.toPrimitive](hint) {
    if (hint == "number") {
      return 10
    }
    if (hint == "string") {
      return "helloWorld"
    }
    return "toPrimitive"
  }
}
// let a = new A({ "miku": 99 });
// console.log(a + "66"); // 基本数据类型





