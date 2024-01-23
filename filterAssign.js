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
        console.log("\n");
    }
}


const emp_Anil = new Employee(1, "Anil", "IT", 50000, "TCS");
const emp_Radha = new Employee(2, "Radha", "HR", 74000, "Wipro");
const emp_Rishi = new Employee(3, "Rishi", "Finance", 47000, "TCS");
const emp_Sonali = new Employee(4, "Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(5, "Monika", "IT", 40000, "Wipro");
const emp_Viny = new Employee(6, "Vinayak", "IT", 75000, "TCS");
const emp_Mahi = new Employee(7, "Mahesh", "HR", 85000, "Infy");

// Creating an array of employees//
const employees = [emp_Anil, emp_Radha, emp_Rishi, emp_Sonali, emp_Monika, emp_Viny, emp_Mahi];

// Using filter() for finding employees from TCS//
const tcsEmployees = employees.filter(employee => employee.emp_company === "TCS");

// Log company name and employee name from the filtered array//
console.log("Employees from TCS:");
tcsEmployees.forEach(employee => {
    console.log(`Company: ${employee.emp_company}, Employee Name: ${employee.emp_name}`);
});

console.log("================step 2================");
const wiproEmployees = employees.filter(employee => employee.emp_company === "Wipro");

//  the average salary of Wipro employees//
if (wiproEmployees.length > 0) {
    const totalSalaryWipro = wiproEmployees.reduce((sum, employee) => sum + employee.emp_salary, 0);
    const averageSalaryWipro = totalSalaryWipro / wiproEmployees.length;
    console.log(`Average Salary of Wipro employees: ${averageSalaryWipro}`);
} else {
    console.log("No employees found from Wipro.");
}
console.log("================step 3================");
const wiproInfyEmployees = employees.filter(employee => employee.emp_company === "Wipro" || employee.emp_company === "Infy");

//  the average salary of Wipro and Infy employees//
if (wiproInfyEmployees.length > 0) {
    const totalSalaryWiproInfy = wiproInfyEmployees.reduce((sum, employee) => sum + employee.emp_salary, 0);
    const averageSalaryWiproInfy = totalSalaryWiproInfy / wiproInfyEmployees.length;
    console.log(`Average Salary of Wipro and Infy employees: ${averageSalaryWiproInfy}`);
} else {
    console.log("No employees found from Wipro or Infy.");
}