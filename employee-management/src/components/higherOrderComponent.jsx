import React from "react";

function getEmployeeData() {
    return {
        name: "Mayank",
        age: 20,
        designation: "Developer",
        salary: 10,
        bonus: 1
    }
}

export default function higherOrderFunction(InputComponent, SecondComponent) {
    return class HigherOrderComponent extends React.Component {
        constructor() {
            super();
            this.state = {
                empData: getEmployeeData()
            }
        }

        render() {
            return  (
                <>
                    <h1>Employee Name: {this.state.empData.name}</h1>
                    { InputComponent && <InputComponent empData={this.state.empData}></InputComponent> }
                    { SecondComponent && <SecondComponent empData={this.state.empData}></SecondComponent> }
                </>
            )
        }
    }
}


