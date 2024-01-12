console.log("******Step 1***************");

var professor = {name: "Dr. Anil Patil",age: 36,designation: "Professor of System Programing",address: "Sindhu Vihar,attar Nagar Solapur",mobileNo: "9834817498",certificates: ['Hacker Rank Participation', 'Certificate in IFE course', 'Certificate in Advanced Programming',], totalExperience: "14 years",
};


console.log("Name: " + professor.name,"Age: " + professor.age,"Designation: " + professor.designation,"Address: " + professor.address,"Mobile Number: " + professor.mobileNo);
console.log("******Step 2***************");
var  degrees={engineering: "CSC", Phd:"Advanced Computing",otherDegrees: ["BCA","MCA"]};
console.log("Engineering Degree: " + degrees.engineering,"PhD Degree: " + degrees.Phd,"Other Degrees: " + degrees.otherDegrees.join(", "));
console.log("******Step 3***************");
console.log("Certificates: " + professor.certificates.join(', '));
console.log("******Step 4***************");
console.log("New property added that is Total Experience: " + professor.totalExperience);
console.log("******Step 5***************");
professor.age = 36;
console.log("modified the property that is Age: " + professor.age);
console.log("******Step 6***************");
professor.certificates.splice(1, 0, "Oracle Certified");
console.log("Certificates: " + professor.certificates.join(', '));
console.log("******Step 7***************");
var lastCertificate = professor.certificates[professor.certificates.length - 1];

console.log("Last Certificate: " + lastCertificate);
console.log("******Step 8***************");
console.log(professor);
console.log("******Step 9***************");
console.log("Certificates:");

for (const certificate of professor.certificates) {
    console.log("- " + certificate);
}
