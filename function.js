
// function

/* function hello(){
    console.log("Hi guys")
}
 */
    // Parameters and arguments
/* 
hello();
function hello(a,b){   //parameters
    let c=a+b;
    console.log(c);
}
hello(10,15);  //arguments

*/


function hello(a,b){   
    let c=a+b;
    return c;

}

console.log(hello(10,15));  

/*  Function definition with parameters
function calculateTotalPrice(price, discount) {
     Calculate the discounted price
    const discountedPrice = price - (price * (discount / 100));
    return discountedPrice;
}

Function call with arguments
const totalPrice = calculateTotalPrice(1000, 10); // Arguments: 1000 and 10

console.log(totalPrice); // Output: 900 */
