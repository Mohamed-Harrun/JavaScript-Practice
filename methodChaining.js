let username = prompt("Enter your name:");
// no method chaining


/* let upCase=username.slice(0,1);
upCase = upCase.toUpperCase();
let rest = username.slice(1);
rest = rest.toLocaleLowerCase();
console.log(upCase+rest);
 */

//using maethod chaining

const myName = username.charAt(0).toUpperCase()+username.slice(1);
console.log(myName);
