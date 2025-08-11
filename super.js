/* 
Super is used in classes to call the costructor or
access the properties and methods of a parent (superclass)
this  = this object
super  = parent class
*/
// class animal{
//     constructor(){

//     }

// }
// class Rabbit extends animal{
//     constructor(name,age,runSpeed){
//         this.age = age;
//         this.name = name;
//         this.runSpeed = runSpeed;
//     }
// }
// class Fish extends animal{
//     constructor(name,age,swimSpeed){
//         this.age = age;
//         this.name = name;
//         this.swimSpeed = swimSpeed;
//     }
// }
// class Hawk extends animal{
//     constructor(name,age,flySpeed){
//         this.age = age;
//         this.name = name;
//         this.flySpeed = flySpeed;
//     }
// }


// const rabbit = new Rabbit("rabbit",1,25);
// const fish = new Fish("fish",1,20);
// const hawk = new Hawk("hawk",2,30);



/* 
In the above code name and age are same for all the classes 
we are already inherit the class animal to the class rabbit, fish, hawk so that we can declare the age and name to
the animal class. it only accessable through the super method.
*/






/* class animal{
    constructor(age,name){
        this.age = age;
        this.name = name;
    }

}
class Rabbit extends animal{
    constructor(name,age,runSpeed){
        super(age,name);
        this.runSpeed = runSpeed;
    }
}
class Fish extends animal{
    constructor(name,age,swimSpeed){
        super(age,name);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends animal{
    constructor(name,age,flySpeed){
        super(age,name);
        this.flySpeed = flySpeed;
    }
}


const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish("fish", 2, 20);
const hawk = new Hawk("hawk",2,30);

console.log(rabbit.age);
console.log(rabbit.name);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.age);
console.log(hawk.name);
console.log(hawk.flySpeed); */

class animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class rabbit extends animal{
    constructor(runspeed,name,age){
        super(name,age)
        this.runspeed = runspeed;
    }
}

const Rabbit = new rabbit(5,"rabbit",5)

console.log(Rabbit)