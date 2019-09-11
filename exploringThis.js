
function Employee(name, age, designation) {

    var userName = "XYZ";

    this.name = name;
    this.age = age;
    this.designation = designation;


    function innerFunction() {
        alert(userName);
        alert(this.name);
    }
}

var Mayank = new Employee("Mayank", 18, "Developer");

var Rupa = Employee("Mayank", 18, "Developer");

console.dir(Mayank);

// Function of new:

// 1. A new memory address is created.
// 2. Memory that is created will be pointed by "this" keyword
// 3. We add properties to "this" memory location
// 4. The new memory address is returned..