var person = {
  firstName: "Max",
  lastName: "Payne",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}

// -----------------bind()----------------

// 'this' here points to the global not person object, hence causes error

// var logName = function (lang1, lang2) {
//   console.log(`Logged: ${this.getFullName()}`)
// }


//logName(); //gets us error

//instead we can use bind

var logName = function (lang1, lang2) {
  console.log(`Logged: ${this.getFullName()}`);
  console.log(`Arguments: ${lang1} ${lang2} `);
  // console.log(`-----------------`)
}

// bind() creates a copy of whatever function you are calling it on and whatever object you pass to the bind()
// 'this' points to that object 

// In this case it creates a copy of logName() function and 'this' points to the 'person' object
var logPersonName = logName.bind(person); // function.bind(thisArg)

console.log(`--------bind()---------`)
logPersonName('en', 'es'); //this.getFullName() is accessed

// also we can do it on the fly 

var logName1 = function () {
  console.log(`Logged: ${this.getFullName()} ("Use bind on the Fly") `);
}.bind(person)

logName1();


console.log(`----------call()--------------`);
// -----------------call()------------------
// call() lets us decide what the 'this' variable will be
// function.call(thisArg, arg1, arg2,....argN)

// 'this' points to person object and 'en' and 'es' is passed as parameters
logName.call(person, 'en', 'es');
// unlike bind() ... call() doesn't create a copy of the function 
// but actually executes the function (i.e logName() here)
// and decides what the 'this' variable should be and rest is the parameters that is passed to the function

console.log(`----------apply()--------------`);
// -------------------apply()------------------
// function.apply(thisArg,[arg1, arg2,.... argN])
logName.apply(person, ['en', 'es'])

// Used cases 

// Function Borrowing

var person2 = {
  firstName: "John",
  lastName: "Smith",
}

console.log(person.getFullName.apply(person2));
//borrowed the function getFullName() from person object and applied 'person2' as thisArg 

// Function Currying - creating a copy of a function but with some preset parameters
function multiply(a, b) {
  return a * b;
}

var multipleOfTwo = multiply.bind(this, 2)
// made a copy of two and set 2 as permanent first parameter

// multipleOfTwo() is equivalent to :
// function multipleOfTwo(b) {
//   var a=2;
//   return a*b
// }

console.log(multipleOfTwo(5))

// GREPPER
// Answer in SIMPLEST form

// Call invokes the function and allows you to pass in arguments one by one.
// Apply invokes the function and allows you to pass in arguments as an array.
// Bind returns a new function, allowing you to pass in a this array and any number of arguments.

// Apply vs.Call vs.Bind Examples
// --------------
//   Call

// var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
// var person2 = { firstName: 'Kelly', lastName: 'King' };

// function say(greeting) {
//   console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
// }

// say.call(person1, 'Hello'); // Hello Jon Kuperman
// say.call(person2, 'Hello'); // Hello Kelly King

// --------------
//   Apply

// var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
// var person2 = { firstName: 'Kelly', lastName: 'King' };

// function say(greeting) {
//   console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
// }

// say.apply(person1, ['Hello']); // Hello Jon Kuperman
// say.apply(person2, ['Hello']); // Hello Kelly King

// -------------
//   Bind

// var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
// var person2 = { firstName: 'Kelly', lastName: 'King' };

// function say() {
//   console.log('Hello ' + this.firstName + ' ' + this.lastName);
// }

// var sayHelloJon = say.bind(person1);
// var sayHelloKelly = say.bind(person2);

// sayHelloJon(); // Hello Jon Kuperman
// sayHelloKelly(); // Hello Kelly King