import React from "react";

export default class ParentComponents extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Mayank"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: this.state.name + "."
            })
        }, 1000)
    }

    render() {
        console.log("Re-rendered...");
        return (
            <div>
                <h1>User Name: {this.state.name}</h1>
                <ChildComponents name={this.state.name} />
            </div>
        )
    }
}

export class ChildComponents extends React.Component {

    constructor(props) {
        super()
        this.state = {
            newName: props.name + "...."
        }
    }

    // static getDerivedStateFromProps(props) {
    //     return {
    //         newName: props.name + "...."
    //     }
    // }
    render() {
        return <div>The Data from Parent: <b>{this.state.newName}</b></div>
    }
}