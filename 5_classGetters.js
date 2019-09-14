class Employee {

    salary = 0;
    constructor(name, designation, age) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }

    set empSalary(value) {

        if(this.age > 50) {
            this.salary = value + 10000;
        } else {
            this.salary = value;
        }
    }

    get empSalary() {
        if(this.age > 50) {
            return this.salary - 10000;
        } else {
            return this.salary;
        }
    }
}

var myEmp = new Employee("M", "D", 20);

myEmp.salary = 10000;

debugger;

myEmp.empSalary = 10000;

console.log("Original Salary: " + myEmp.empSalary)

console.dir(myEmp);