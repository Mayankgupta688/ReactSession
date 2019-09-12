class EmployeeSkeleton {
    constructor(name, age, designation) {
        this.name = name;
        this.age = age;
        this.designation = designation
    }

    getNameData() {
        console.log("User Name: " + this.name);
    }
}

var myEmp = new EmployeeSkeleton("Mayank", 30, "Developer");

alert(myEmp.getNameData());