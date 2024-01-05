var checkEligibility = function(gradScore, hscScore, sscScore, candidateName, Congrates) {
    var isEligible = (gradScore >= 70) || (hscScore >= 80) || (sscScore > 90);

    if (isEligible) {
        Congrates(`${candidateName}, you are eligible for the TCS interview!`);
    } else {
        console.log(`Unfortunately, ${candidateName}, you are not eligible for the TCS interview.`);
    }
};

// Example usage:
checkEligibility(80, 86, 90, "Vrushali", (message) => {
    console.log(message);
});

checkEligibility(70, 65, 55, "Rohan", (message) => {
    console.log(message);
});

checkEligibility(60, 79, 88, "Ayush", (message) => {
    console.log(message);
});