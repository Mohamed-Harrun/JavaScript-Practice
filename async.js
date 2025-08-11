//  synchrounous is an line by execution of a program.
// async is an multiple operations handled in same time without blocking the flow and execution of the program.


// let see the example.

function func1(callback){

    setTimeout(()=>{console.log("task1");
        callback();
    },1000)
}

function func2(){
    console.log("task2");
    console.log("task3");
    console.log("task4");
}


func1(func2);