export default {
  PersonInfo,
  HighQualityPersonCheck,
};

class PersonInfo {

  name;
  age;
  gender;
  address;

  constructor(name, age, gender, address) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
  }

  showMessage() {
    console.log('My name is : ' + this.name + ' age is : ' + this.age + ' gender is : ' + this.gender + ' address is : ' + this.address);
  }
};

function HighQualityPersonCheck(person) {
  if (person.name === 'kapcb' && person.age <= 20 && person.gender === '男' && person.address === '深圳') {
    console.log('-----------------------------------');
    console.log('You Are High Quality Person!')
    console.log('-----------------------------------');
    document.write('You Are High Quality Person!')
  }
}