/**
 * ES5 写法, ES6自带导出模块化
 * 在全局中就存在一个modelOne对象
 */
const modelOne = (function () {
  // 定义导出对象
  let obj = {}

  let name = 'Mike Chen'
  let age = 18

  function sum (num1, num2) {
    return num1 + num2
  }

  let flag = true

  if (flag) {
    console.log(sum(10, 20))
  }


  obj.flag = flag
  obj.sum = sum

  // 返回出去, 使用modelOne接收
  return obj
})()