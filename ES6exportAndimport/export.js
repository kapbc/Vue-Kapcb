let name = 'Mike Chen';
let age = 18;
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

/**
 * 1.导出变量方式一
 */
export {
  name,
  age,
  flag
}

/**
 * 2.导出变量方式二
 */
export let email = 'eircccallroot@yeah.net';
export let address = '深圳';

/**
 * 3.导出函数方式一
 */
export function logMessage(message) {
  console.log('这是export.js中的导出函数');
  console.log(message);
}

/**
 * 4.导出整个类
 */
export class Person {
  // name;
  // age;

  /**
   * ES6中定义构造器
   * @param name String
   * @param age int
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log('这是Person类中的run方法');
    console.log('My name is : ' + this.name + ' age is : ' + this.age);
  }
}

/**
 * 某些情况下 ,一个模块中包含某个功能 ,但是开发者并不希望给这个功能命名, 而是让导入者自己来命名
 * 这种情况就使用 export default
 * 并且一个js文件中的export default只能有一个
 */
const countryCode = 'CN';
export default countryCode;