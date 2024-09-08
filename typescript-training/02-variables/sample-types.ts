//<let <variableName>: <type> = <initial value>;

let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Nikhil";
let lastName: string = 'Kumar';
let mydata: any =50.0;

//We can assign different values of any types
mydata ='false'

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
console.log(`Hi ${firstName} ${lastName}`);  //Useful for long strings with alot of cancatination  ,,This is backticks: Refrence variables with ${..}