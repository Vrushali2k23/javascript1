console.log("*******************step 1**********************");

const GoodMorningMessage = () => {
    console.log("Good morning, Today is Thursday");
};


GoodMorningMessage();

console.log("*******************step 2**********************");
const multiplyAndLog = (num1, num2, num3 = 1) => {
    const result = num1 * num2 * num3;
    console.log(`The result of multiplication of => ${num1}, ${num2}, ${num3} is: ${result}`);
};


multiplyAndLog(5, 5, 2);


console.log("*******************step 3**********************");

multiplyAndLog(10, 4);
console.log("*******************step 4**********************");

const addition = (num1, num2, num3, num4, num5) => {
    const sum = num1 + num2 + num3 + num4 + num5;
    return sum;
};


const result = addition(100, 100, 200, 349, 756);


console.log(`The result of adding  the given numbers  is: ${result}`);

console.log("*******************step 5**********************");
const concatenateStrings = (str1, str2, str3, str4, str5) => {
    const result = `${str1} ${str2} ${str3} ${str4} ${str5}`;
    return result;
};


const concatenatedString = concatenateStrings("I am", "learning", "ES6", 'feature', "in depth");



console.log(`The result of adding the strings is: "${concatenatedString}"`);

