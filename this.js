// using inside an object

const person = {
    name:"spongebob",
    favFood:"Hamburger",
    sayHello: function(){console.log(`i love ${this.name}`)},
    eat : () => {console.log(`the person ${this.name} is eaating ${this.favFood}`)}
}
person.sayHello();
person.eat();
// inside a function this refers to the function.
// this keyword is doen't work with arrow function
