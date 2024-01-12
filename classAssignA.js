
console.log("**********************Step1*****************************");
class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.year = year;
        this.color = color;
        this.model = model;
        this.mileage = mileage;
    }

    logDetails() {
        return `${this.year} ${this.color} ${this.make} ${this.model} with ${this.mileage} miles`;
    }
}

// an array of vehicles//
const arrayOfVehicles = [];

// Creating  5 objects for  vehicle and added them into the array//
const vehicle1 = new Vehicle("Toyota", "Car", 2022, "Blue", 15000);
const vehicle2 = new Vehicle("Honda", "Twowheler", 2021, "Red", 20000);
const vehicle3 = new Vehicle("AshokLayland", "truck", 2020, "Maroon", 18000);
const vehicle4 = new Vehicle("TataNexon", "Electric car", 2023, "Green", 12000);
const vehicle5 = new Vehicle("Bajaj", "Autoriksha", 2019, "Black", 25000);

arrayOfVehicles.push(vehicle1, vehicle2, vehicle3, vehicle4, vehicle5);

// Traversing the  array and  meaningful messages//
arrayOfVehicles.forEach((vehicle, index) => {
    console.log(`Vehicle ${index + 1} Details: ${vehicle.logDetails()}`);
});
console.log("**********************Step 2*****************************");

class College {
    constructor(name, location, ContactNo, studentstrength) {
        this.name = name;
        this.location = location;
        this.ContactNo = ContactNo;
        this.studentstrength = studentstrength;
    }

    display() {
        console.log(`College Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Contact No: ${this.ContactNo}`);
        console.log(`Student Count: ${this.studentstrength}`);
        console.log("-----------------------------");
    }
}

// Creating 4 objects for college //
const college1 = new College("SPM College", "Solapur", 7877725451, 1000);
const college2 = new College("SVIT Diploma Collage", "Pune", 8885123465, 8000);
const college3 = new College("MIT MBA collage", "Mumbai", 9999741255, 5000);
const college4 = new College("IIT collage", "Kharagpur", 9878925544, 1000);

//  display method for each object//
college1.display();
college2.display();
college3.display();
college4.display();

console.log("**********************Step 3*****************************");

function traverseObject(inputObject) {
    for (let key in inputObject) {
        if (inputObject.hasOwnProperty(key)) {
            console.log(`${key}: ${inputObject[key]}`);
        }
    }
}


console.log("Traversing College 1 Object:");
traverseObject(college1);
console.log("-----------------------------");
console.log("\nTraversing College 2 Object:");
traverseObject(college2);
console.log("-----------------------------");
console.log("Traversing College 3 Object:");
traverseObject(college3);
console.log("-----------------------------");
console.log("Traversing College 4 Object:");
traverseObject(college4);