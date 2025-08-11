/* let username = "";
while (username==="") {
    username = window.prompt("enter your name");
}
console.log(`hello${username}`) */


let username ="";

while (username === "" || username === null ) {
    username = window.prompt('enter your username')
    if (username!="" && username!=null) {
        console.log("you have user name")
    } else {
        console.log("no username")
    }
}









// while (username===""||username===null) {
//     username = window.prompt("Enter your username");
//     if (username!="" && username!=null) {
//         console.log("You have username");
//     } else {
//         console.log("You don't have username");
//     }

// }




// if it is entering into loop it will never end until the condition is satisfy.