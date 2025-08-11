let textBox = document.getElementById("textBox");
let toFarenheit = document.getElementById("toFarenheit");
let toCelcius = document.getElementById("toCelcius");
let result = document.getElementById("result");
let temp;
function convert(){
    temp = Number(textBox.value);
if (toFarenheit.checked) {    
    temp = temp*9/5+32;
    result.textContent=temp.toFixed() + "°F";
} else if (toCelcius.checked) {
    temp = (temp-32) * (5/9);
    result.textContent=temp.toFixed() + "°C";
}
else{
    result.textContent="Select a unit";
}
}
