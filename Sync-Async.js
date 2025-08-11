let a = 10;
let b = 20;
console.log('synchoronous')
setTimeout(function () {
    console.log('async')
},1000)
fetch('/').then(function(){
    console.log('fetch')
})

console.log(a);
console.log(b);
