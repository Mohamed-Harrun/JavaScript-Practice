function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    //function parameters this all are the placeholders
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()/*-+";

    let allowedChars = "";
    let password ="";
    allowedChars +=includeLowercase? lowerCaseChars :"";
    allowedChars +=includeUppercase? upperCaseChars :"";
    allowedChars +=includeSymbols? symbolsChars :"";
    allowedChars +=includeNumbers? numbersChars :"";

    for (i=0;i<length;i++){
       const randomIndex = Math.floor(Math.random()*allowedChars.length);
       password += allowedChars[randomIndex];
           
    }
    //return password;
    console.log(password);
}




const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
const password = generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
//values to the placeholders
//console.log(password)