var employeeList = [{
    name: "M",
    age: 30
}, {
    name: "R",
    age: 40
}, {
    name: "X",
    age: 25
}];

var filteredEmployeeList = employeeList.filter((employee) => {
    return employee.age < 35;
})

console.dir(filteredEmployeeList);