/* 
nested objects = objects inside of other objects
allow you to represent more complex data structure
child object is enclosed by a parent object

person {address{}, contactInfo{},}
shoppingCart{keyboard{}, mouse{}, Monitor{}}

*/

const preson = {
    fullName:"spongebob squarepants",
    age:30,
    isStudent:true,
    hobbies:["karate","jellyfishing","cooking"],
    address:{
        street:"124 conch st",
        city:"bikini bottom",
        country:"Int. Water"
    }
}

console.log(preson.fullName)
console.log(preson.address.country)
console.log(preson.hobbies[0])

class person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new address(...address);
    }
}

class address {
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const Person = new person ("spongebob",30,"124 conch st","bikini bottom","int water")