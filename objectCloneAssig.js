console.log("****************step 1**********************");
var bankSbi = {
    name: "State Bank of India",
    branch: "Main Branch",
    location: "Solapur, Maharashtra",
    accountTypes: "Savings",
    establishedYear: 1806
};

console.log(bankSbi);
console.log("****************step 2**********************");

var bankLocation = {
    street: "Oasis Mall Road",
    city: "Solapur",
    pin: "400001"
};

console.log(bankLocation);
console.log("****************step 3**********************");

// Cloning objects using Object.assign()//
var clonedBankSbi = Object.assign({}, bankSbi);
var clonedBankLocation = Object.assign({}, bankLocation);
console.log("Cloned Bank SBI Object:");
console.log(clonedBankSbi);

console.log("\nCloned Bank Location Object:");
console.log(clonedBankLocation);
console.log("****************step 4**********************");
var rateOfInterest = {
    homeLoanInterest: 5.2,    
    personalLoanInterest: 8.5,  
    dueInterest: 7.0           
};

console.log(rateOfInterest);

console.log("****************step 5**********************");
var sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.log("All properties of sbiDetails after merging:");
console.log(sbiDetails);
console.log("****************step 6**********************");
for (var key in sbiDetails) {
    if (sbiDetails.hasOwnProperty(key)) {
        console.log(`${key}: ${sbiDetails[key]}`);
    }
}