export default {
  Person,
  highQualityPersonCheck,
}

let highQualityPersonCheck = function (person) {
  if (person.name === 'kapcb' && age <= 24 && gender === '男') {
    console.log("I'm a high quality person");
  }
}

class Person {
  name;
  age;
  gender;

  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  };

  showMessage() {
    console.log('My name is : ' + this.name + ' age is : ' + this.age + ' gender is : ' + this.gender);
  }
}