export default Person

class Person {

  name
  age
  gender


  constructor (name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  }

  showMessage () {
    console.log('My name is : ' + this.name + ' age is : ' + this.age + ' gender is : ' + this.gender)
  }
}