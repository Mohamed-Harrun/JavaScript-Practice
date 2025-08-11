/* 
getter - special method that makes a property readable
setter - special method that makes a property writeable

validate and modify a value when reading/writing a property
*/


/* class rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;
        }
        else{
            console.error("width must be a positive number")
        }
    }
    get width(){
        return this._width.toFixed(1);
    }
    set height (newHeight){
        if(newHeight>0){
            this._height = newHeight;
        }
        else {
            console.error("height must be a positive number")
        }
    }
    get height(){
        return this._height.toFixed(1);
    }
    get area(){
        return (this._height * this._width).toFixed(1);
    }
}

const Rectangle = new rectangle(5,6)
console.log(Rectangle.height)
console.log(Rectangle.width)
console.log(Rectangle.area) */



// we don't want to people to enter any garbage values. so we can do some validations
// that's why getters and setters are come in


// another example

class person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName (newFirstName){
        if(typeof newFirstName ==="string" && newFirstName.length >0){
            this._firstName = newFirstName;
        }
        else{
            console.error("Enter character")
        }
    }
    get firstName (){
        return this._firstName;
    }

}
const Person = new person(5, 6, "Bye")
console.log(Person.firstName)
console.log(Person.lastName)
console.log(Person.age)