//<let <variableName>: <type> = <initial value>;
var found = true;
var grade = 88.6;
var firstName = "Nikhil";
var lastName = 'Kumar';
var mydata = 50.0;
//We can assign different values of any types
mydata = 'false';
// let's break it! type mismatch error
/*
found = 0;
grade = "A";
firstName = false;
*/
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// use template Strings
console.log("Hi ".concat(firstName, " ").concat(lastName));
