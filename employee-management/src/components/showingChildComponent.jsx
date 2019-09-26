import React from "react";

export default class ShowingChildComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ChildComponent name="Mayank">
                <h1>Hello World...</h1>
                <h1>Hello All...</h1>
            </ChildComponent>
        )
    }
}

class ChildComponent extends React.Component {
    render() {
        return (
            <>
                <div>{this.props.name}</div>
                {this.props.children[0]}
                <div>Other Data {this.props.children[0]}</div>
            </>
           
        )
    }
}
