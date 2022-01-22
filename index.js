// console.log(this);

// function a(){
// 	console.log(this); 
// 	this.newVariable='hello';
// }

// var b= function(){
// 	console.log(this);
// }

// a(); 
// console.log(newVariable);
// b();


// var c = {
// 	name:"The c object",
// 	log: function(){
// 		var self = this;
// 		// since object is by reference self points at the same place as the this points
// 		this.name='updated c object';
// 		console.log(this);

// 		var setname = function(newname){
// 			self.name=newname;
// 			console.log(this);
// 			// this here points to global object 
// 		}
// 		// 

// 		setname("updated again, the c object");
// 		console.log(this);

// 	}
// }

// c.log();

// //IIFE 



// // closures

// function closureFunction(whattosay){
// 	return function(name){
// 			console.log('Closure eg:'+whattosay+' '+name);
// 		}
// }

// closureFunction('Hello')('Max');


// var sayHi = closureFunction('Hello');
// sayHi('Harry');

var arr1 =[1,2];

var arr7 = _.map(arr1, function(item){return item*3});

console.log(arr7);