(function() {


    class Employee {
        name = "10";

        getName() {
            console.log("Name Value is: " + this.name);
        }
    }

    var abc = new Employee()

    abc.getName();

    functionRefernce = abc.getName;

    functionRefernce();


})();