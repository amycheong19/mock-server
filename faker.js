//POPULATE fake data
var R = require('ramda');
var faker = require('faker');

//To view more details
//https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html

function generateData () {
  var students = []

  for (var id = 0; id < 10; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.firstName()
    var phoneNumber = faker.phone.phoneNumberFormat()

    students.push({
      "id": id+1,
      "first_name": firstName,
      "last_name": lastName,
      "phone": phoneNumber
    })
  }

  return { "students": students }
};

let data = generateData();

require('fs').writeFileSync('studentsDB.json', JSON.stringify(data, null, 2), 'utf-8');
