import React from "react";

import { connect } from "react-redux";
import * as actions from "../actions/index";

class OtherEmployee extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>

                    {this.props.employees.map((employee) => {
                        return (
                            <div>
                                <b>Employee Name: {employee.name}</b><br></br><br></br>
                            </div>
                        )
                    })}

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