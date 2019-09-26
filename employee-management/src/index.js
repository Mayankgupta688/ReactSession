import React from "react";
import ReactDOM from "react-dom";
import higherOrderFunction from "./components/higherOrderComponent";

class GeneralComponent extends React.Component {
    render() {
        return(
            <>
                <h2>Employee Age: {this.props.empData.age}</h2>
                <h2>Employee Designation: {this.props.empData.designation}</h2>
            </>
        );
    }
}

class SpecializedComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            otherBonus: 1.5
        }
    }
    render() {
        return (
            <>
                <h2>Employee Salary: {this.props.empData.salary}</h2>
                <h2>Employee Bonus: {this.props.empData.bonus}</h2>
                <h2>Employee Other Bonus: {this.state.otherBonus}</h2>
            </>
        );
    }
}


var FirstComponent = higherOrderFunction(GeneralComponent, SpecializedComponent)

ReactDOM.render(<FirstComponent></FirstComponent>, document.getElementById("root"));

