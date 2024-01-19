const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];


arrayNumbers.forEach((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`);
});
console.log("================step 2====================");
console.log("Positive Numbers:");
arrayNumbers.forEach(element => {
    if (element > 0) {
        console.log(element);
    }
});
console.log("================step 3====================");
const negativeNumbers = [];
arrayNumbers.forEach(element => {
    if (element < 0) {
        negativeNumbers.push(element);
    }
});

console.log("Negative Numbers Array:");
console.log(negativeNumbers);

console.log("================step 4====================");
console.log("Even Numbers:");
arrayNumbers.forEach(element => {
    if (element % 2 === 0) {
        console.log(element);
    }
});
console.log("================step 5====================");
const sum = arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


console.log(`Sum of all elements: ${sum}`);
console.log("================step 6====================");
console.log("Even Indexed Values:");
arrayNumbers.forEach((element, index) => {
    if (index % 2 === 0) {
        console.log(element);
    }
});
