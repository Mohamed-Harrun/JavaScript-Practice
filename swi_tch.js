// let age = 99;
// switch (true) { // condition based
//     case age >10:
//     console.log("10>")
//         break;

//     default:
//         break;
// }

let age = 99;
let res;
switch (age) {
    case 99:
        res = "the age is one";
        break;

    default:
        break;
}
console.log(res);








// Why switch is Better Here:
// Readability: The switch structure makes it clear that you are checking the same variable (day) against multiple values.
// Organized Structure: The cases are grouped logically, making it easier to understand what the code does at a glance.
// Maintainability: If you want to add more cases, you can simply add another case block without disturbing the existing structure.
// When Not to Use switch:
// Complex Conditions: If you need to check complex conditions (e.g., ranges of values, multiple variables), if...else if 
// might be more appropriate.
// Non-Discrete Values: If you need to evaluate non-discrete values (like ranges, or values that require complex logic to check), switch is not
//  ideal.
// Summary
// switch is best used when you have a single variable or expression that needs to be compared against multiple possible values.
// It provides a cleaner, more readable, and sometimes more efficient alternative to multiple if...else if statements.