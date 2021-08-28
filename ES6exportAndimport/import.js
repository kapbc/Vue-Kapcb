/**
 * 导入变量方式一
 * 在node中可以省略 "./export.js" 中的.js
 */
import {flag} from "./export.js";
import {name} from "./export.js";
import {age} from "./export.js";
/**
 * 导入变量方式二
 */
import {email, address} from "./export.js";
/**
 * 导入方法
 */
import {logMessage} from "./export.js";
/**
 * 导入整个类
 */
import {Person} from "./export.js";

if (flag) {
  console.log('Kapcb nb!');
}

console.log('My name is : ' + name + ' age is : ' + age);

console.log('My email is : ' + email + ' address is : ' + address);

logMessage('这是来自import.js中的消息');

let person = new Person();
person.name = 'Kapcb';
person.age = 24;
person.run();