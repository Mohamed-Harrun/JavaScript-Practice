class user {
    constructor(name,age) {
        this.name = name; // when this is called by an object this will become person.name 
        this.age = age;
    }
    print(){
        console.log(this.name+" "+this.age)
    }
    
}

let person = new user("Harrun",19)
console.log(person.age)
person.print();

class paid extends user{
    scale(){
        console.log("you're old")
    }
}
const usp = new paid("Harrun",19);
console.log(usp.age)





