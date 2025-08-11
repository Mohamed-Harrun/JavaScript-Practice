/* function greet (callback){
    console.log("Good Morning")
    callback();
}
function intro(){
    console.log("I'm, Harrun")
}

greet(intro);
 */

/* function sum(callback,x,y){ // 3 parameter
    let result = x+y;
    callback(result); // displayConsole(3);
}

function displayConsole(result){ //this will be called with 3 // then finnally console will becomes 3
    console.log(result)
}

sum(displayConsole,1,2); */ // function and 2 values passed as an argument


// function adding (callback,x,y){
//     let result = x+y;
//     callback(result);
// }

// function addingg(sbjcsha){
// console.log(sbjcsha);
// }


// adding(addingg,2,6);

// let bus = [1,2,3];

// function set (element){
//     console.log(element)
// }


// bus.forEach(set);



function harrun (a,b) {
    console.log("Definition of an callback function")
    
    let c = a+b;
    console.log(c);
    }

// this is the function that accepts callback
    function adding(callback){
        let a = 10;
        let b = 20;
        callback(a,b)
    }
// call the adding function and pass harrun as an argument to that function

    adding(harrun)








