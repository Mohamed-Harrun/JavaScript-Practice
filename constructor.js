/* Object Constructor Functions
Sometimes we need to create many objects of the same type.

To create an object type we use an object constructor function.

It is considered good practice to name constructor functions with an upper-case first letter. */

function Car (make, model, year, color){
this.make = make;
this.model = model;
this.year = year;
this.color = color;
this.drive = function (){ console.log(`you drive this ${this.make}`)}
}

const car1 = new Car ("ford", "Mustang", 2024, "red")
const car2 = new Car ("chevrolet","camaro",2025,"blue")
console.log(car1.make);
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)

console.log(car2.make);
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)

car1.drive();