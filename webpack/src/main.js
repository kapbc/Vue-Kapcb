const mathUtil = require("./mathUtil.js");

import {Person} from "./info";
import {name, age} from "./info";

console.log(mathUtil.add(10, 20));
console.log(mathUtil.mul(1, 10));

const mike = new Person(name, age);
mike.showInfo();