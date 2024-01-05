function maleMarriageEligibility(gender, age, boyname) {
    if (gender.toLowerCase() === 'male') {
        return age >= 21 ? boyname + " is eligible for marriage." : boyname + " is not eligible for marriage yet.";
    } else {
        return "Invalid gender. This function is for males only.";
    }
}

// Example usage:
var gender = "male";
var age = 18;
var boyname = "John";

console.log(maleMarriageEligibility(gender, age, boyname));