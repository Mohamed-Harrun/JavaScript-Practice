// it is used to combine single variables into an array.

// let food1 = "idly";
// let food2 = "dosa";
// let food3 = "poori";
// let food4 = "pongal";

// let allFood = [...food1,...food2,...food3,...food4]
// console.log(allFood);

// function all(){
    
// }
// function show(...values){
// console.log(values);
// }
// show("MohamedHarrun",132,JS)
// function showArguments(...args) {
//     console.log(args);
//   }
  
//   showArguments(1, 2, 3, 'hello', true);
//   // Output: [1, 2, 3, 'hello', true]
  




//   const bro = "mohamed"
//   function names (...full){
//     console.log(full)
//   }

//   names(bro)





  function sum (...numbers){
    let result = 0;
    for (let number of numbers){
      result =result+number;
    }
    return result;
  }
  console.log(sum (1,2,3));



  // function sum(...numbers) {
  //   let result = 0;
  //   for (let number of numbers) {
  //     result += number;
  //   }
  //   return result;
  // }
  
  // console.log(sum(1, 2, 3)); // Output: 6
  

  function fullName(...namer){
    return namer.join(" ")
  }

console.log(fullName("Mohamed", "Harrun"));



function fullName(...namer) {
  return namer.join(" ");
}
console.log(fullName("Mohamed", "Harrun")); // Output: "Mohamed Harrun"
