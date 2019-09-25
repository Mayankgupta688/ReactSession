import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

var userName = "Home";

export default class SinglePageComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
  
    }

    render() {
        return (
            <BrowserRouter>
                <h1>This is the Application Header</h1>

                <Link style={{paddingRight: "10px"}} to="/">Home</Link>
                <Link style={{paddingRight: "10px"}} to="/about/10/Mayank">About 10</Link>
                <Link style={{paddingRight: "10px"}} to="/about/15/Rupa">About 15</Link>
                <Link style={{paddingRight: "10px"}} to="/help">Help</Link>

                <Switch>
                    <Route path="/help" component={HelpComponent} />
                    <Route path="/about/:id/:name" component={AboutComponent} />
                    <Route path="/" component={HomeComponent} />
                </Switch>
            
            </BrowserRouter>
        )
    }
}

