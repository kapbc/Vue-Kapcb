/**
 * 导入变量方式一
 * 在node中可以省略 "./export.js" 中的.js
 */
import { flag } from './export.js'
import { name } from './export.js'
import { age } from './export.js'
/**
 * 导入变量方式二
 */
import { email, address } from './export.js'
/**
 * 导入方法
 */
import { logMessage } from './export.js'
/**
 * 导入整个类
 */
import { Person } from './export.js'
/**
 * 导入default的时候, 不需要{}, 这种情况下默认导入的是 "./export.js" 中 export default的
 * 因为一个js文件中的export default只能有一个, 不能存在多个
 */
import code from './export.js'
/**
 * 导入所有并取别名
 */
import * as exportParam from './export.js'

if (flag) {
  console.log('Kapcb nb!')
}

console.log('My name is : ' + name + ' age is : ' + age)

console.log('My email is : ' + email + ' address is : ' + address)

logMessage('这是来自import.js中的消息')

let person = new Person()
person.name = 'Kapcb'
person.age = 24
person.run()

console.log('My country code is : ' + code)

if (exportParam.flag) {
  console.log('-------------------------------------------')
  console.log('My name is : ' + exportParam.name + ' age is : ' + exportParam.age + ' email is : ' + exportParam.email + ' address is : ' + exportParam.address)
  let person = new exportParam.Person('Mike', 19)
  person.run()
  console.log('-------------------------------------------')
}