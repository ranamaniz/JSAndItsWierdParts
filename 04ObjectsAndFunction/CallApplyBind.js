var person = {
  firstName: "Max",
  lastName: "Payne",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName());