class ClassName {
    constructor(parameter1, parameter2) {
      // Initialize properties
      this.property1 = parameter1;
      this.property2 = parameter2;
    }
  
    // Method
    method1() {
      console.log(`Property1: ${this.property1}`);
    }
  
    // Another Method
    method2() {
      console.log(`Property2: ${this.property2}`);
    }
  }
  


const myObject = new ClassName('Value1', 'Value2');
myObject.method1(); // Output: Property1: Value1
myObject.method2(); // Output: Property2: Value2



/* An instance in programming refers to a specific object created from a class. When
you define a class, you’re essentially creating a blueprint or template for objects.
An instance is a concrete realization of that blueprint, with its own set of properties and methods
as defined by the class. */




