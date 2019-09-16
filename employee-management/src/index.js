import React from "react";
import ReactDOM from "react-dom";

let displayTemplate = (
    <div id="outer">
        <div>
            <b>
                <div>User Data: 1</div>
                <div>User Data: 2</div>
            </b>
    </div></div>
);

ReactDOM.render(displayTemplate, document.getElementById("root"));

ReactDOM.render(<h4>This is other Part of Application</h4>, document.getElementById("otherDiv"));