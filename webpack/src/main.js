/**
 * 使用CommonJS的模块化语法导入
 * @type {{add: function(*, *), mul: function(*, *)}|{add?: function(*, *), mul?: function(*, *)}}
 */
const mathUtil = require("./mathUtil.js");

/**
 * 使用ES6的模块化语法导入
 */
import {Person} from "./info";
import {name, age} from "./info";

console.log(mathUtil.add(10, 20));
console.log(mathUtil.mul(1, 10));

const mike = new Person(name, age);
mike.showInfo();