import React from "react";

export default class Concepts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: 'Mayank'
            }
        }
    }

    changeUserData = () => {
        this.state.user.name = "Anshul";
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <h1>{this.state.user.name}</h1><br></br>
                <input type="button" onClick={this.changeUserData} value="Click To Change" />
            </div>
        )
    }
}