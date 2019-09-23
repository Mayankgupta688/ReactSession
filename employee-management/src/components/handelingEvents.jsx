import React, { Component } from "react";

export default class HandelingEvents extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
            textData: "Hello All..."
        }

        this.incrementCounter = this.incrementCounter.bind(this);
        this.changeData = this.changeData.bind(this);
    }

    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        })

        this.refs.uncontrolledElementButton.focus()
        this.refs.uncontrolledElementOther.value = "dgdiaudg";
    }

    changeData(event) {
        this.setState({
            textData: event.target.value
        })

        
    }

    render() {
        return (
            <div>
                <h2>Counter Value: {this.state.counter}</h2><br></br>
                <input type="text" value={this.state.textData} onChange={this.changeData} /><br></br>
                <input type="text" ref="uncontrolledElement" /><br></br>

                <input type="text" ref="uncontrolledElementOther" /><br></br>
                <input type="button"  ref="uncontrolledElementButton" onClick={this.incrementCounter} value="Click to Update" /><br></br>
            </div>
        )
    }
}