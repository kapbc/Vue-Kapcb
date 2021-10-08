class Info {
  name
  age
  gender
  address

  constructor (name, age, gender, address) {
    this.name = name
    this.age = age
    this.gender = gender
    this.address = address
  }

  showMessage () {
    console.log('My name is : ' + this.name + ' age is : ' + this.age + ' gender is : ' + this.gender + ' address is : ' + this.address)
  }
}

function HighQualityPersonCheck (info) {
  if (info.name === 'kapcb' && info.age <= 24 && info.gender === '男' && info.address === '深圳') {
    let logMessage = 'You are high quality person'
    document.writeln(logMessage)
    console.log('---------------------------------')
    console.log(logMessage)
    console.log('---------------------------------')
  }
}

module.exports = {
  Info,
  HighQualityPersonCheck
}