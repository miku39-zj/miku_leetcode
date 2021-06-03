/*
 * @Descripttion: 
 * @version: 
 * @Author: zj
 * @Date: 2021-02-22 08:32:23
 * @LastEditors: zj
 * @LastEditTime: 2021-03-03 13:39:36
 */
/**
 * @description: 深拷贝 只考虑对象和数组，不考虑循环引用
 * @param {any} target
 * @return {*}
 * @author: zj
 */
function deepClone(target: any): any {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key])
    }
    return cloneTarget;
  } else {
    return target
  }
}

// 考虑循环引用 map
function _deepClone(target: any, map = new Map()): any {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return target;
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = _deepClone(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}

function deepCope(target: any, map: WeakMap<object,any> = new WeakMap()) {
  if (typeof target === "object") {
    let copeTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return target;
    }
    map.set(target, copeTarget);
    for (const key in target) {
      copeTarget[key] = deepCope(target[key], map)
    }
    return copeTarget
  } else {
    return target
  }
}
const target = {
  name: "miku",
  actor: ["kkr", "miku"]
}
const p = deepCope(target)
p.name = "kkr";
console.log(target);
console.log(p);

/**
 * @description:高阶函数柯里化
 * @param {Function} func
 * @return {*}
 * @author: zj
 */
function curry(func: Function) {
  return function currid(...args) {
    const context = this;
    if(args.length >= func.length) {
      func.apply(context, args)
    }else {
      return function (...args2) {
        return currid.apply(context, args.concat(args2))
      }
    }
  }
}

Function.prototype.myCall = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError("error")
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const resulr = context.fn(...args);
  delete context.fn
}

Function.prototype.myApply = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError("error")
  }
  context = context || window;
  context.fn = this;
  let resule;
  if(arguments[1]){
    resule = context.fn(...arguments[1]);
  }else{
    resule = context.fn();
  }
  delete context.fn;
  return resule
}
