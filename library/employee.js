class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  findName() {
    return this.name;
  }

  findId() {
    return this.id;
  }

  findEmail() {
    return this.email;
  }

  findRole() {
    return this.role;
  }


}
module.exports = Employee;