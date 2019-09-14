var employeeDetails = [{
    name: "Mayank",
    age: 40
}, {
    name: "Rupa",
    age: 20
}, {
    name: "Anshul",
    age: 25
}];

var newEmployeeList = employeeDetails.map((employee, index, fullArray) => {
    if(employee.age < 30) {
        employee.age += 5
    } else {
        employee.age += 10;
    }

    if(employee.age == 10) {
        fullArray[index].age = 100;
    }

    return employee.name;
})

console.dir(newEmployeeList);