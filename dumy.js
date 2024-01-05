let count = 0;
let number = 1;

while (count < 15) {
    if (number % 2 !== 0) {
        console.log(number);
        count++;
    }
    number++;
}
//*************************** */
function findGreaterNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Both numbers are equal.";
    }
}

// Example usage:
var number1 = 800;
var number2 =800;

var greaterNumber = findGreaterNumber(number1, number2);
console.log("The greater number is: " + greaterNumber);


//***************************** */

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
var num1 = 29;
var num2 = 47;
var num3= 0;
var num4 = 101;
console.log(num1 + " is " + isEvenOrOdd(num1));
console.log(num2 + " is " + isEvenOrOdd(num2));
console.log(num1 + " is " + isEvenOrOdd(num3));
console.log(num2 + " is " + isEvenOrOdd(num4));