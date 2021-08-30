export const name = 'Mike';
export const age = 18;

export class Person {

  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log('My name is : ' + this.name + ' age is : ' + this.age);
  }
}