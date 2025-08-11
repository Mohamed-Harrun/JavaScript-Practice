// -----output
//prompt guess 50-100
//ok too high or too low
//correct means attempts and then congrat
// ------
/* 

*/


// let guessNum;
// let attempt;
// let myNum;
// let maxNum=100;
// let minNum = 50;
// guessNum=Math.floor(Math.random()*51);
// myNum = window.prompt("Enter a number from 50-100")
// while (myNum != guessNum){
// if(guessNum>80){
//     alert("the number is greter than 80")
// }    
// elseif

// }


const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1)+minNum);

let  attempts = 0;
let guess;
let running = true;


while (running){
guess = window.prompt(`enter a number between ${minNum} and ${maxNum}`)
guess = Number(guess);

if(isNaN(guess)){
    window.alert("Enter a valid number")
}
else if(guess<minNum || guess>maxNum)
{
    window.alert("Enter a valid number")
}
 else {
    attempts++;
    if (guess<answer) {
        window.alert(`too low and try again`)
    } 
    else if (guess > answer){
        window.alert(`too high and try again`)
    }       
    else {
        window.alert(`you won and you woned in ${attempts}`)
        running=false;
    }

}


}