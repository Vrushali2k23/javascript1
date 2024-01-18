class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }

    displayInfo() {
        console.log(`Employee ID: ${this.emp_id}`);
        console.log(`Employee Name: ${this.emp_name}`);
        console.log(`Employee Department: ${this.emp_dept}`);
        console.log(`Employee Salary: ${this.emp_salary}`);
        console.log(`Employee Company: ${this.emp_company}`);
    }
}

// Creating objects with values
const emp_Anil= new Employee(1, "Anil", "IT", 50000, "TCS");
const emp_Radha = new Employee(2, "Radha", "HR", 74000, "Wipro");
const emp_Rishi= new Employee(3, "Rishi", "Finance", 47000, "TCS");
const emp_Sonali = new Employee(4, "Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(5, "Monika", "IT", 40000, "Wipro");
const emp_Viny = new Employee(6, "Vinayak", "IT", 75000, "TCS");
const emp_Mahi = new Employee(7, "Mahesh", "HR", 85000, "Infy");



// Displaying information for each employee
//console.log("Employee 1 Information:");
//emp_Anil.displayInfo();
//emp_Radha.displayInfo();
//emp_Rishi.displayInfo();
//emp_Sonali.displayInfo();
//emp_Monika.displayInfo();
//emp_Viny.displayInfo();
//emp_Mahi.displayInfo();
const employees = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_Viny, emp_Mahi];//

console.log("---------------------Step 1------------------");
console.log("Employees working in TCS:");
employees.forEach(employee => {
    if (employee.emp_company === "TCS") {
        console.log(`Employee Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
    }
})

console.log("---------------------Step 2------------------");
console.log("Finance Department Employees:");
employees.forEach(employee => {
    if (employee.emp_dept === "Finance") {
        console.log(`Employee Name: ${employee.emp_name}, Department: ${employee.emp_dept}`);
    }
})

console.log("---------------------Step 3------------------");
console.log("Employees whose names start with 'R':");
employees.forEach(employee => {
    if (employee.emp_name.startsWith("R")) {
        employee.displayInfo();
    }
});
console.log("---------------------Step 4------------------");
console.log("Employees whose salary is greater than 75000:");
employees.forEach(employee => {
    if (employee.emp_salary > 75000) {
        console.log(`Employee Name: ${employee.emp_name}, Company: ${employee.emp_company}, Salary: ${employee.emp_salary}`);
    }
});
console.log("---------------------Step 5------------------");

for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    if (employee.emp_salary >= 50000 && employee.emp_dept === "IT") {
        employee.displayInfo();
    }
}

console.log("---------------------Step 6------------------");
console.log("Employees from company 'Infy':");
for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    if (employee.emp_company === 'Infy') {
        employee.displayInfo();
    }
}





