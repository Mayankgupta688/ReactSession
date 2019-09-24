import React from "react";

export default class ConditionalExecution extends React.Component {
    render() {

        return (
            <div>
                {this.props.name === "Mayank" && <h1>Hello Mayank....</h1>}
                {this.props.name === "Rupa" && <h1>Hello Rupa....</h1>}
                {(this.props.name === "Rupa" || this.props.age == 20) && <h1>Hello Rupa with Age 20....</h1>}
                {(this.props.other === "X") && <h2>Hello X with Age 20....</h2>}

                <p>
                    <b>This is inner Paragraph...</b>
                    <div>
                        {(this.props.other === "X") && <h1>Hello X with Age 20....</h1>}
                    </div>
                </p>
            </div>
        )
    }
}