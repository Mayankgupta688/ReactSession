(function() {

    class Employee {
        constructor(name, age) {
            
            this.name = name;
            this.age = age;
        }

        getTotalCount() {
            console.log("Count " + Employee.totalCount);
        }

        initializedValue() {
            Employee.totalCount = 10;
        }
    }

    debugger;

    var firstEmployee = new Employee("M", 20);

    firstEmployee.initializedValue();

    firstEmployee.getTotalCount();

    Employee.totalCount = Employee.totalCount + 1;

    var secondEmployee = new Employee("R", 20);

    Employee.totalCount += 1;

    console.log(secondEmployee.getTotalCount())
    console.log(firstEmployee.getTotalCount())
    
})();