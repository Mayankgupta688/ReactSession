import React from "react";

export default class LifecycleEvents extends React.Component {
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {
            name: this.props.name,
            age: 10
        }
    }

    // componentWillMount() {
    //     // Some Code...
    // }

    componentDidMount() {

        // Explore the Use Case
        console.log("componentDidMount");

        setTimeout(() => {
            this.setState({
                designation: 100
            });
        }, 2000)
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.name == this.state.name) {
            return true;
        }

        return true;
    }

    render() {
        console.log("render");
        return <b>Designation is {this.state.designation}</b>
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
}