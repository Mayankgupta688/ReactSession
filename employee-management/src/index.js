import React from "react";
import ReactDOM from "react-dom";

import CurrentTimer from "./components/currentTimer";

import Clock from "./components/clock";


setInterval(() => {
    ReactDOM.render(
        <CurrentTimer></CurrentTimer>, document.getElementById("root"));
}, 1000)
