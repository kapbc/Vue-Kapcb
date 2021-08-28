let name = 'Mike Chen';
let age = 18;
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

/**
 * 1.导出方式一
 */
export {
  name,
  age,
  flag
}

/**
 * 2.导出方式二
 */
export let email = 'eircccallroot@yeah.net';
export let address = '深圳';