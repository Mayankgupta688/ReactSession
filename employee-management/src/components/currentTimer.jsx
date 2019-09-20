import React from "react";

export default class CurrentTimer extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: "Mayank Gupta",
            userAge: 20,
            currentTime: new Date().toTimeString()
        }

        setInterval(() => {
            this.setState({
                currentTime: new Date().toTimeString()
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <b>Updated User Name: {this.state.userName}</b><br></br><br></br>
                <b>Updated User Age: {this.state.userAge}</b><br></br><br></br>
                <b>Updated New Current Time: {this.state.currentTime}</b><br></br><br></br>

                <ChildComponent currentTime={this.state.currentTime}></ChildComponent>
            </div>
        )
    }
}

function ChildComponent(props) {
    return <h3>Time in Child Component is: {props.currentTime}</h3>
}