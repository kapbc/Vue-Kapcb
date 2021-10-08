function add (num1, num2) {
  return num1 + num2
}

function mul (num1, num2) {
  return num1 * num2
}

/**
 * 使用CommonJS的语法导出
 * @type {{add: (function(*, *)), mul: (function(*, *))}}
 */
module.exports = {
  add, mul
}