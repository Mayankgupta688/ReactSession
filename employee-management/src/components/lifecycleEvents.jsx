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

    componentDidMount() {
        console.log("componentDidMount");
        this.setState({
            name: "Rupa.."
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.name == this.state.name) {
            return false;
        }

        return true;
    }

    render() {
        console.log("render");
        return <b>{this.state.name}</b>
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
}