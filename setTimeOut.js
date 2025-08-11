// Settimeout() = function in javascript that allows you to schedule the execution of a function after 
//                an amount of time (millisconds) times are approximate (varies based on the workload of the js env.)


//                setTimeout(callback, delay);



// setTimeout(function(){window.alert('Hello')},3000)
let timeoutId;

function setTimer() {
    timeoutId = setTimeout(function(){window.alert('Hello')},2000);
    console.log("Started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}

