import React from "react";
import ReactDOM from "react-dom";

var otherName = "Mayank Gupta";

var color = "red";

var footerStyle = {
    "color": color,
    "backgroundColor": "green",
    "paddingLeft": "50px"
}

var applicationStyling = {
    "header": {
        "color": "green"
    }, "footer": {
        "color": "red"
    }, "content": {
        "color": "yellow"
    }
}


function HeaderComponent() {
    return <h1 style={applicationStyling.header}>This is Header Page</h1>
}

function ContentPage(props) {
    props.details.name = "sgfisdgfisfg";
    return <h2 style={applicationStyling.content}>This is Content Part... for { "Mayank".indexOf("nk") }... Aged {props.age}</h2>
}

function FooterComponent() {
    return <h1 style={applicationStyling.footer}>This is Footer Page</h1>
}

var userDetails = {
    name: "Mayank",
    age: "20"
}

ReactDOM.render(<div>
    <HeaderComponent></HeaderComponent>
    <ContentPage name="Mayank" age="10" details={userDetails}></ContentPage>
    <ContentPage name="Anshul" details={userDetails}></ContentPage>
    <FooterComponent></FooterComponent>
</div>, document.getElementById("root"));