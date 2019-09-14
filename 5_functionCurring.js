(function() {


    class Employee {
        salary =  10;
        age = 20;

        getEmployeeSalary() {
            console.log(this.salary);
            return this;
        }

        getEmployeeAge() { 
            console.log(this.age);
            return this;
        }
    }


    var myEmp = new Employee();

    //myEmp.getEmployeeSalary();

    //myEmp.getEmployeeAge();

    debugger;

    myEmp.getEmployeeSalary().getEmployeeAge();

    // myEmp.getEmployeeSalary();
    //myEmp.getEmployeeAge();

    myEmp.getEmployeeAge().getEmployeeSalary();

    // undefined.getEmployeeAge();


})()

