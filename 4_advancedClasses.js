(function() {

    class EmployeeSkeleton {

        salary = 10;

        constructor(name, age, designation, otherSalary) {
            this.name = name;
            this.age = age;
            this.designation = designation
            this.otherSalary = otherSalary;
            this.randomFunction = () => {
                console.log("Data")
            }
        }

        getNameData() {
            console.log(this.name);
        }
    }

    var myEmp = new EmployeeSkeleton("Mayank", 30, "Developer");

    alert(myEmp.getNameData());

    alert(myEmp.salary);

})();
