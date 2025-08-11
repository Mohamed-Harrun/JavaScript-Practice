// Closure  = A function defined inside of another function,
//            the inner function has access to the variables
//            and scope of the outer function.
//            allow for private variables and state maintainance 
//            used frequently in js frameworks: React, Vue, Angular



function outer (){
let message = "Hi";
function inner(){
    message = "hello"; // we can reassign it.
    console.log(message);
}
inner();
}

// message = "hello"; outside we don't have access
outer();