export default {
  Person,
  HighQualityPersonCheck,
}

function HighQualityPersonCheck (person) {
  if (person.name === 'kapcb' && person.age <= 24 && person.gender === '男') {
    const message = 'I\'m a high quality person'
    console.log(message)
    document.write(message)
  }
}

class Person {
  name
  age
  gender

  constructor (name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
  };

  showMessage () {
    console.log('My name is : ' + this.name + ' age is : ' + this.age + ' gender is : ' + this.gender)
  }
}