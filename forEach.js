// let numbers = [1,2,3,4,5,6];

// numbers.forEach(function(number,index,array){ // in here number refers to the current value
//     console.log(number);
//     console.log(`the number is${index+1}`)
//     console.log(array)
// });

let numberss = [1,2,3,4,5,6,7]



function display (element){
    console.log(element)
}

function triple (element,index,array){
array[index]=element*3;                     // this will mutiple by 3 for each element then the array value will become as 3 multiplied value
}

numberss.forEach(triple);
numberss.forEach(display);




// let fruits = ["apple", "banana", "coconut", "orange"]

// function one (element){
// console.log(element);
// }

// function uppercase(element,array,index){
//     array[index] = element . toUpperCase();
// }

 



let fruits = ["apple", "banana", "coconut", "orange"];

function one(element) {
    console.log(element);  // This should display the current element in the array
}

function uppercase(element, index, array) {
    array[index] = element.toUpperCase();  // This should update the element in the array to uppercase
}

// Convert each element in the fruits array to uppercase
fruits.forEach(uppercase);
fruits.forEach(one);