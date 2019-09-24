import React from "react";

export default class IterationComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            empDetails: [{
                name: "Mayank",
                age: 20
            }, {
                name: "Rupa",
                age: 10    
            }, { 
                name: "Anshul",
                age: 20
            }],
            userLoggedIn: true
        }
    }

    addNewEmployee() {
        this.setState({
            empDetails: [{
                name: this.state.addEmployeeTextbox,
                age: 50
            }, ...this.state.empDetails
            ]
        })
    }

    addEmployeeTextbox(event) {
        this.setState({
            addEmployeeTextbox: event.target.value
        })
    }

    render() {

        var domElementArray = this.state.empDetails.map((employee) => {
            return (
                <div key={employee.name}>
                    <input type="text" />
                    <div>Employee Name: {employee.name}</div>
                    <div> Employee Age: {employee.age}</div><br></br><br></br>
                </div>
            )
        })

        return (
            <div>
                {this.state.userLoggedIn === true && domElementArray}<br></br><br></br>
                {this.state.userLoggedIn === false && <h1>Please login the User Details</h1>}
                <input type="text" value={this.state.newEmployee} onChange={this.addEmployeeTextbox.bind(this)} /><br></br><br></br>
                <input type="button" value="Add Employee" onClick={this.addNewEmployee.bind(this)} />
            </div>
        )
    }
}