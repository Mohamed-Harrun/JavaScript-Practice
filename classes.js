class product{      // here the product is the object name 
    constructor(name,price){  //to use constructor method inside a class use constructor keyword
        this.name = name;   // this refers to the object
        this.price = price;
    }
    displayProduct(){ // inside class there no need to function keyword to declare a function
        console.log(`your product name is ${this.name} and the price is ${this.price.toFixed(2)}`);
    }
    calculateTotal(salestax){
    return this.price+(this.price*salestax);
    }
}
const salestax=0.05;
const Product1 = new product("shirt",2000);
console.log(Product1.name) // how this works example

Product1.displayProduct();

const total = Product1.calculateTotal(0.05);
console.log(total)