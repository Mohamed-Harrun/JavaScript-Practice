function task1(callback) {
    setTimeout(()=>{
        console.log("task1 is completed");
        callback();
    },1000) 
       
}

function task2(callback) {
    setTimeout(()=>{
        console.log("task2 is completed");
        callback();
    },2000) 
       
}

function task3() {
    setTimeout(()=>{
        console.log("task3 is completed");
    },500)    
}

task1(()=>{
    task2(
        ()=>{task3();}
    );
});

