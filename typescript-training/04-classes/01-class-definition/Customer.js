var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        // properties
        // constructors
        //getter / setter methods
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// let's create an instance
var myCustomer = new Customer("Nikhil ", "Gayakwad");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
