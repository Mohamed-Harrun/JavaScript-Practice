/* 
Destructuring  = extract values from arrays and objects,
then assign them to variables in a convenient way 
[] - to perform array destructuring
{} - to perform oject destructuring
*/

// EX-1 Swap he value of two variables

let a = 10;
let b = 20;
[a,b] = [b,a]
console.log(a);
console.log(b);

// EX-2 Swap  two elements in array

const colors = ["red", "green", "blue"];
[colors[0] ,colors[2]]=[colors[2] , colors[0]]
//[colors[0],colors[2]]=[colors[2],colors[0]]
console.log(colors);







const fruits = ["orange", "apple", "banana"];
const [f1,f2,f3] = fruits

console.log(f1)
console.log(f2)
console.log(f3)

