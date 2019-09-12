// Map Function

var employeeList = [{
    name: "Mayank",
    age: 20
}, {
    name: "Rupa",
    age: 15
}];

debugger;

var processedArrayList = employeeList.map((employee) => {

    debugger;
    if(employee.age >= 20) {
        employee.age = employee.age + 5;
    } else {
        employee.age -= 5;
    }

    return employee;
})


var dataArray = [10, 20, 30, 40];

var sum = 0;

dataArray.map((intValue) => {
    sum +=intValue;
})

console.dir("Sum is: " + sum);



// Reduce Function