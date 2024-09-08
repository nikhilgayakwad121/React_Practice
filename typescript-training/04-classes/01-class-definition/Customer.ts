class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {

        // properties
        // constructors
        //getter / setter methods

        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// let's create an instance
let myCustomer = new Customer("Nikhil ", "Gayakwad");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);