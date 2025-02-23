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
        return `Employee Name: ${this.name}, EmployeeID: ${this.id}, Deparment: ${this.department}, Salary: $${this.salary}`;
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

//Task 2
console.log("Task 2");

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); //Special part that gives it same properties as Employee
        this.teamSize = teamSize //adding team size
    }
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team size: ${this.teamSize}`
    }
    calculateBonus(){
        return this.salary * .10 *12  //have to account for 12 months
    }
    
}
//Test Cases: 
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600


//Task 3
console.log("Task 3");

//Creating company class 
class Company {
    constructor(name){
        this.name = name
        this.employees = []
    }
    addEmployee(employee){  //pushing employee to array
        this.employees.push(employee)
    }
    listEmployees(){
        return this.employees  //Reruning array
    }
    calculateTotalPayroll() {  //Task 4 payroll
        return this.employees.reduce((total, emp) => total + emp.calculateAnnualSalary(), 0)
    }
    //Task 5:
    promoteToManager(employee, teamSize) {
        let index = this.employees.indexOf(employee);
        if (index !==-1){
            this.employees[index] = new Manager(
                employee.name,
                employee.id,
                employee.department,
                employee.salary,
                teamSize
            )}
            else {
                console.log("Not Found")
            }
        }
    }

//Test cases:
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
console.log(company.listEmployees());
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"


//Task 4 ---going back to class company
console.log("Task 4");
console.log(company.calculateTotalPayroll());

//Task 5 
console.log("Task 5")
company.promoteToManager(emp1, 3); //Using employee Alice to manager
console.log(company.listEmployees());
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"
