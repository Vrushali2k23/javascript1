console.log("==================Assignment 02======================")

function stringHandsOn(){
    var givenString="   Hey ,you are doing good, keep it up   ";
    console.log(`1) Given String is= ${givenString}`);
}
stringHandsOn();

var givenString="   How are you ? i am good, keep it up   ";
var totalChar = givenString.length;
console.log(`2) Length of the String is= ${totalChar}`);

var givenString="   How are you ? i am good, keep it up   ";
var trimResult = givenString.trim();
console.log(`3) After trim given String is: ${trimResult}, It's length is: ${trimResult.length} `);

var extraSpaces = totalChar-trimResult.length;
console.log(`4) The Total Number Extra Spaces Removed is= ${extraSpaces}`);

var firstChar = trimResult.charAt(0);
var lastChar = trimResult.charAt(33);
console.log(`5) First Character after trim is= ${firstChar}, Last Character after trim is= ${lastChar}`);

var result = trimResult.split(" ");
console.log(`6) Total words in the string is= ${result.length} `);

var indexOfgood= trimResult.indexOf('good');
console.log(`7) Index of word "good" is= ${indexOfgood}`);

var result = trimResult.substring(22);
var result = trimResult.slice(22);
console.log(`8) Substring Starting From Index 22 is= ${result}   Slice Starting From Index 22 is= ${result} `);

var result= trimResult.endsWith("up");
console.log(`9) String ends with word "up"= ${result}`);

var result= trimResult.startsWith("How");
console.log(`10) String Start with word "Hey"= ${result}`);