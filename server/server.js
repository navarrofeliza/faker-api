const express = require("express");
const app = express();
const port = 8000;

// create classes with constructors for the api methods
class User {
  constructor() {
    this._id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
console.log(new User());

class Company {
  constructor() {
    this._is = faker.datatype.uuid();
    this.name = faker.company.companyName();
    this.street = faker.address.streetName();
    this.city = faker.address.cityName();
    this.state = faker.address.stateName();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.countryName();
  }
}
console.log(new Company());

// now it's the routing time for each information
// getting new user
app.get("/api/users/new", (req, res) => {
  var user = new User();
  res.json({
    results: user,
  });
});

//getting new Company
app.get("/api/companies/new", (req, res) => {
  var company = new Company();
  res.json({
    results: company,
  });
});

//getting the new Compnay and new Users
app.get("/api/user/company", (req, res) => {
  var user = new User();
  var company = new Company();
  res.json({
    results: {
      user: user,
      company: company,
    },
  });
});

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
