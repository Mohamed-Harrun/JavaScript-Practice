let numbers = [50,60,75,200,300,600];


// function total (first,second){
//     return first+second;
// }

// let nums = numbers.reduce(total);
// console.log(nums);


let nums =  numbers.reduce(function (element,accumulate){
    return element+accumulate;
});
console.log(nums);