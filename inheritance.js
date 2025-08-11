/* 
Inheritance = allows a new class to inherit properties and methods
from an existing class (parent -> child)
helps with the code reusability
*/

class animals{
    alive  = true
        eat(){
        console.log(`this ${this.name} is eating`)
    }
    sleeping(){
        console.log(`this ${this.name} is sleeping`)
    }
}
class Rabbit extends animals{  // this extend keyword is used to access properties and methods of animals
    name = "rabbit";
}

//const rabbit = new Rabbit();
console.log(animals.alive);

//rabbit.sleeping();
//rabbit.eat();



class harrun{
    print(){
        console.log(`he is good ${this.name}`);
    }
}

class full extends harrun{
    name = "harrun";
}

const Full =  new full
Full.print();