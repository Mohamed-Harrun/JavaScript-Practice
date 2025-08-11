/* const hell = (greet)=>{console.log("harrun")
                  console.log(greet,"harrun")
};
hell("hi"); */

let numbers = [1,2,3,4,5]

const squares = numbers.map((element)=> Math.pow(element,2))
console.log(squares)

const fill = numbers.filter((element)=>  element>2) // for one line of code we  don't necessarly need 
                                                    // "return" in one line of code

console.log(fill);
