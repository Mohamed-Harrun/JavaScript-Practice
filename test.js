const numbers = [10, 25, 5, 40];

const secondNum = numbers.reduce((acc,num)=>(num > acc ? num : acc),
numbers[0]
)

console.log(secondNum);
