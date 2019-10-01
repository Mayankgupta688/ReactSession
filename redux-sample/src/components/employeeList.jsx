import React from "react";
import OtherEmployee from "./otherEmployee";

import { connect } from "react-redux";
import * as actions from "../actions/index";

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        }
    }

    updateFormData = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state.name);
        console.log(this.state.age);
        
    }

    addEmployeeDataOnClick() {
        this.props.addEmployeeData({
            name:this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <>
                <div>
                    <input name="name" type="text" value={this.state.name} onChange={this.updateFormData} placeholder="Add Name"/><br></br><br></br>
                    <input name="age" type="text" value={this.state.age} onChange={this.updateFormData} placeholder="Add Age"/><br></br><br></br>
                    <input type="button" value="Add Employee" onClick={this.addEmployeeDataOnClick.bind(this)} /><hr></hr>
                </div>

                <div>
                    {this.props.employees.map((employee) => {
                        return (
                            <div>
                                <b>Employee Name: {employee.name}</b><br></br><br></br>
                                <b>Employee Name: {employee.age}</b><br></br><br></br><hr></hr>
                            </div>
                        )
                    })}<br></br>

                    <p>
                        <h2>Employee Names:</h2>
                        <OtherEmployee></OtherEmployee>
                    </p>

                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps, actions)(EmployeeList);