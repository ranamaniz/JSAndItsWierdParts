var person = {
  firstName: "Max",
  lastName: "Payne",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}

// bind()

// 'this' here points to the logName() not person object, hence causes error
/*
var logName = function () {
  console.log(`Logged: ${this.getFullName()}`)
}
*/

// logName(); //gets us error

//instead we can use bind

var logName = function () {
  console.log(`Logged: ${this.getFullName()}`);
}

var logPersonName = logName.bind(person); //we can access this of the person object now de to bind()

logPersonName(); //this.getFullName() is accessed



