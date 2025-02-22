//Task 1
console.log("Task 1");


//declaring the class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary
    }

//Forming the method
    getDetails() {
        return `Employee Name: ${this.name}, EmployeeID: ${this.id}, Deparment: ${this.department}, Salary: ${this.salary}`;
    }

    //Salary Calculation
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}
//Test Cases: 
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000

