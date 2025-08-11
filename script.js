// let username;
// document.getElementById("mysubmit").onclick=function (){
// username=document.getElementById("mytext").value;
// console.log(username)
// }

let sub = document.getElementById("mysubmit");
sub.onclick= function(){
username = document.getElementById("mytext").value;
console.log(username)
document.getElementById("msg").textContent=`Welcome ${username}`
}

/* 

DOUBTS
1. WHY I,M USING LET USERNMAE VARIABLE AT THE OUTSIDE OF THE FUNCTION USE CASE OF IT
2. EXPLAIN OVERALL CODE






*/