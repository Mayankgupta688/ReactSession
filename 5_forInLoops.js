var employeeDetails = {
    name: "Mayank",
    age: 20,
    designation: "Developer",
    salary: 10
}

for(key in employeeDetails) {
    console.log(key);
    console.log("Key Value: " + employeeDetails[key]);
}